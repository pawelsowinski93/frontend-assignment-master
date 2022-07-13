import { API_DOMAIN, languageMap } from "../helpers/cardConfig";
import { ACTION_TYPES, IActionTypes } from "./actionTypes";
import { IState } from "./initialState";

export const reducer = (state: IState, action: IActionTypes) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_TYPE: 

      return {
        ...state,
        articleTypes: state.articleTypes.includes(action.payload)
          ? state.articleTypes.filter((source) => source !== action.payload)
          : [...state.articleTypes, action.payload],
      };

    case ACTION_TYPES.UPDATE_ARTICLES:
      
      return {
        ...state,
        articles: action.payload
      }

    case ACTION_TYPES.SET_ERROR:

    return {
      ...state,
      error: action.payload
    }

    default:
      return state;
  }
};
