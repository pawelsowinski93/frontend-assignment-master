import React from "react";
import { DataTypes } from "../types/card";
import { dataSourceTypes } from "./helpers/dataSourcecConfig";

interface IProps {
  types: DataTypes;
  dataSourceTypeSet: React.Dispatch<React.SetStateAction<string>>;
}

const SourceTypeSelect = ({ types, dataSourceTypeSet }) => {
  const handleSelect = (type: string): void => {
    dataSourceTypeSet(
      types.includes(type)
        ? types.filter((source) => source !== type)
        : [...types, type]
    );
  };

  return (
    <div className="card__source">
      <div id="section-title" className="card__source__title">
        Data sources
      </div>
      <div className="card__source-input-wrapper">
        {dataSourceTypes.map(({ name, key }) => (
          <div className="card__source-input-wrapper__input" key={key}>
            <input
              type="radio"
              checked={types.includes(name)}
              value={name}
              key={key}
              onClick={() => handleSelect(name)}
              onChange={() => {}}
            />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SourceTypeSelect;
