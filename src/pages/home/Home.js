import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DetailsContext } from "../../contexts/DetailsContext";
import Api from "../../Api";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { setDetailArticle } = useContext(DetailsContext);

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
    <div className="container">
      {articles.map((article) => (
        <Link
          key={article.uri}
          to={`/details/${article.uri.split("/")[3]}`}
          onClick={() => {
            setDetailArticle(article);
          }}
          className="content"
        >
          <div>
            <h1>{article.title}</h1>
            <small>{moment(article.published_date).format("DD/MM/YYYY")}</small>
            <p>{article.byline}</p>
            <p>{article.abstract}</p>
          </div>
          <div>
            {article.multimedia === null ? (
              <img
                src="https://cna.com.br/Content/uploads/blogposts/os-melhores-sites-de-noticias-em-ingles-para-estudar.jpg"
                alt=""
              />
            ) : (
              <img src={article.multimedia[1].url} width="350px" alt="" />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
