export interface IActionTypes {
  type: string;
  payload?: any;
}

export const ACTION_TYPES = {
  UPDATE_TYPE: "UPDATE_TYPE",
  UPDATE_ARTICLES: "UPDATE_ARTICLES",
  SET_ERROR: "SET_ERROR"
};
