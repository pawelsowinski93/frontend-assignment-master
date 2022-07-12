import React from "react";
import { IList } from "../types/card";

interface IProps {
  item: IList;
}

const ArticlesListItem: React.FC<IProps> = ({ item }) => {
  const { id, date, image, title, preamble } = item;

  return (
    <div className="card__articles__list-item" key={id}>
      <div className="card__articles__list-item__img">
        <img src={image} />
      </div>
      <div className="card__articles__list-item__content">
        <div className="card__articles__list-item__content__title">
          <p className="title">{title}</p>
          <p className="subtitle">{date}</p>
        </div>
        <div className="card__articles__list-item__content__content">
          <p>{preamble}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlesListItem;
