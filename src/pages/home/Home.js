import { useEffect, useState } from "react";
import Api from "../../Api";

const Home = () => {
  const [articles, setArticles] = useState([]);

  const getSection = async () => {
    const { data } = await Api.get(
      "/home.json?api-key=k0YgedAIFDuVd5qUgwTlLhp4Z56aTnGd"
    );
    const { results } = data;
    setArticles(results);
  };

  useEffect(() => {
    getSection();
  }, []);

  return (
    <>
      {articles.map((article) => (
        <div key={article.uri}>
          <h1>{article.title}</h1>
          {article.multimedia === null ? (
            <img src="https://cna.com.br/Content/uploads/blogposts/os-melhores-sites-de-noticias-em-ingles-para-estudar.jpg" alt="" />
          ) : (
            <img src={article.multimedia[2].url} width="150px" height="150px" alt="" />
          )}
        </div>
      ))}
    </>
  );
};

export default Home;
