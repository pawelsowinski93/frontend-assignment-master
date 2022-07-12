import React, { useEffect, useState, useCallback } from "react";
import { API_DOMAIN } from "../../../utils/apiDef";
import { monthsMap } from "../../../utils/monthsMap";
import { DataTypes, IList } from "../types/card";
import ArticlesListItem from "./ArticlesListItem";

interface IProps {
  types: DataTypes;
}

const ArticlesList: React.FC<IProps> = ({ types }) => {
  const [list, listSet] = useState<IList[]>([]);
  const [error, errorSet] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (types && types.length) {
      types.forEach((type, index) => {
        fetch(`${API_DOMAIN}articles/${type.toLowerCase()}`)
          .then((data) => data.json())
          .then((data) => {
            if (index === 0) {
              listSet(data.articles);
            } else {
              listSet([...list, ...data.articles]);
            }
          })
          .catch((error) => errorSet(error.message));
      });
    } else {
      listSet([]);
    }
  }, [types]);

  return (
    <div className="card__articles">
      {error
        ? "(Internal Server Error 500) oops something went wrong, please reload the page"
        : list && list.length
        ? monthsMap(list).map((item, index) => (
            <ArticlesListItem key={index} {...{ item }} />
          ))
        : "no items"}
    </div>
  );
};

export default ArticlesList;
