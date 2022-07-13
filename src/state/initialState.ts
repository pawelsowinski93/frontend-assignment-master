import { articleTypes, IArticles } from "../types";

export interface IState {
  articles: IArticles[];
  articleTypes: articleTypes;
  error: string;
}

export const initialState: IState = {
  articles: [],
  articleTypes: ["Fashion"],
  error: "",
};
