import { createContext, useState } from "react";
import Api from "../Api";

export const ArticlesContext = createContext();

const ArticlesProvider = ({ children }) => {
  const [detailArticle, setDetailArticle] = useState({});
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  const getArticlesData = async (section) => {
    try {
      const { data } = await Api.get(
        `/${section}.json?api-key=BkGZkAsENjFiJ9qka1Gy6GOHAmuRIxGF`
      );
      const { results } = data;
      sortArticles(results);
      setArticles(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErro(true);
    }
  };

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
        getArticlesData,
        articles,
        loading,
        erro,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
