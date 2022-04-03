import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import Api from "../../Api";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { setDetailArticle, sortArticles } = useContext(ArticlesContext);

  const getArticlesData = async () => {
    try {
      const { data } = await Api.get(
        "/home.json?api-key=k0YgedAIFDuVd5qUgwTlLhp4Z56aTnGd"
      );
      const { results } = data;
      sortArticles(results);
      setArticles(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticlesData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      {articles.map((el) =>
        el.title !== "" && (
          <Link
            key={el.uri}
            to={`/details/${el.uri.split("/")[3]}`}
            onClick={() => {
              setDetailArticle(el);
            }}
            className="content"
          >
            <div className="contentText">
              <h2>{el.title}</h2>
              <small>
                {moment(el.published_date).startOf("day").fromNow()}
              </small>
              <p>{el.byline}</p>
              <p>{el.abstract}</p>
            </div>
            <div className="contentImg">
              {el.multimedia === null ? (
                <img
                  src="https://cna.com.br/Content/uploads/blogposts/os-melhores-sites-de-noticias-em-ingles-para-estudar.jpg"
                  alt=""
                />
              ) : (
                <>
                  <img src={el.multimedia[1].url} width="350px" alt="" />
                  <span>{el.multimedia[1].copyright}</span>
                </>
              )}
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Home;
