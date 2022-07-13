import { IArticles } from "../types";
import { languageMap } from "./cardConfig";

export const sortArticles = (articles: IArticles[]): IArticles[] | [] => {
    if (articles && articles.length > 0) {
      return articles
        .map((article) => ({
          ...article,
          date: article.date
            .split(" ")
            .map((el, index) => {
              if (index === 1) {
                return languageMap[el];
              }

              return el;
            })
            .join(" "),
        }))
        .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }

    return []
  };