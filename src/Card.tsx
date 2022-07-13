import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import { FaSort } from "react-icons/fa";
import { API_DOMAIN, dataSourceTypes } from "./helpers/cardConfig";
import { ACTION_TYPES } from "./state/actionTypes";
import { sortArticles } from "./helpers/sortArticles";

const Card: React.FC = () => {
  const [state, dispatch] = useContext(AppContext);

  const { articles, articleTypes, error } = state;

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.UPDATE_ARTICLES });

	articleTypes.forEach((type, index) => {
		fetch(`${API_DOMAIN}articles/${type.toLowerCase()}`)
		  .then((data) => data.json())
		  .then((data) => {
			if (index === 0) {
			  dispatch({ type: ACTION_TYPES.UPDATE_ARTICLES, payload: sortArticles(data.articles) })
			} else {
				dispatch({ type: ACTION_TYPES.UPDATE_ARTICLES, payload: sortArticles([...articles, ...data.articles]) })
			}
		  }).catch((error) => {
			dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error.message })
		  });
		})
  }, [articleTypes]);

  return (
    <div className="card">
      <div className="card__source">
        <div id="section-title" className="card__source__title">
          Data sources
        </div>
        <div className="card__source__input">
          {dataSourceTypes.map(({ name, key }) => (
            <div className="card__source__input__wrapper" key={key}>
              <input
                type="radio"
                checked={articleTypes.includes(name)}
                value={name}
                key={key}
                onClick={() =>
                  dispatch({ type: ACTION_TYPES.UPDATE_TYPE, payload: name })
                }
                onChange={() => {}}
              />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card__sort">
        <div id="section-title" className="card__sort__title">
          Sort by date
        </div>
        <FaSort />
      </div>
      <div className="card__articles">
        {error
          ? "(Internal Server Error 500) oops something went wrong, please reload the page"
          : articles &&
            articles.length > 0 &&
            articles.map(({ id, date, image, title, preamble }) => (
              <div className="card__articles__list-item" key={id}>
                <div className="card__articles__list-item__img">
                  <img src={image} />
                </div>
                <div className="card__articles__list-item__content">
                  <div className="card__articles__list-item__content__title">
                    <p className="title">{title}</p>
                    <p className="subtitle">{date}</p>
                  </div>
                  <div className="card__articles__list-item__content__description">
                    <p className="description">{preamble}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Card;
