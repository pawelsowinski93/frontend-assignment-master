const languageMap = {
  januar: "january",
  februar: "february",
  mars: "march",
  april: "april",
  mai: "may",
  juni: "june",
  juli: "july",
  august: "august",
  september: "september",
  oktober: "october",
  november: "november",
  desember: "december",
};

export const monthsMap = (table) => {
  return table
    .map((article) => {
      return {
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
      };
    })
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
};
