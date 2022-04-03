import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import Loading from "../../components/loading/Loading";
import Api from "../../Api";
import Error from "../../components/error/Error";

const World = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);
  const { setDetailArticle, sortArticles } = useContext(ArticlesContext);

  const getArticlesData = async () => {
    try {
      const { data } = await Api.get(
        "/technology.json?api-key=BkGZkAsENjFiJ9qka1Gy6GOHAmuRIxGF"
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

  useEffect(() => {
    getArticlesData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (erro) {
    return <Error />;
  }

  return (
    <div className="container">
      <h1 className="contentTitleH1">Technology</h1>
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
                  width="350px"
                  alt="alt"
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

export default World;
