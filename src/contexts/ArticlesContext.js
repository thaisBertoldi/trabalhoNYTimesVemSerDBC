import { createContext, useState } from "react";

export const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {
  const [detailArticle, setDetailArticle] = useState({});

  const sortArticles = (data) => {
    data.sort((a, b) => {
      let da = new Date(a.published_date),
        db = new Date(b.published_date);
      return db - da;
    });
  };

  return (
    <ArticlesContext.Provider
      value={{
        detailArticle,
        setDetailArticle,
        sortArticles,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
