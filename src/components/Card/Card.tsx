import React, { useState } from "react";
import Sorter from "./components/Sorter";
import SourceTypeSelect from "./components/SourceTypeSelect";
import ArticlesList from "./components/ArticlesList";
import { DataTypes } from "./types/card";
import "./Card.scss";

interface IProps {
  open: boolean;
}

const Card: React.FC<IProps> = ({ open = true }) => {
  const [dataSourceTypes, dataSourceTypeSet] = useState<DataTypes>(["Fashion"]);

  const handleStateChange = (firstFunction, typeParam, callback) => {
    firstFunction(typeParam);
    callback();
  };

  if (!open) {
    return;
  }

  return (
    <div className="card__wrapper">
      <SourceTypeSelect types={dataSourceTypes} {...{ dataSourceTypeSet }} />
      <Sorter />
      <ArticlesList types={dataSourceTypes} {...{ handleStateChange }} />
    </div>
  );
};

export default Card;
