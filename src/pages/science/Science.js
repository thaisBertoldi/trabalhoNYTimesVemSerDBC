import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DetailsContext } from "../../contexts/DetailsContext";
import Loading from "../../components/loading/Loading";
import Api from "../../Api";

const World = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setDetailArticle } = useContext(DetailsContext);

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
    }
  };

  const sortArticles = (data) => {
    data.sort((a, b) => {
      let da = new Date(a.published_date),
          db = new Date(b.published_date);
      return db - da;
    });
  }

  useEffect(() => {
    getArticlesData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1>Technology</h1>
      {articles.map((el) => (
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
            <small>{moment(el.published_date).startOf("day").fromNow()}</small>
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
              <img src={el.multimedia[1].url} width="350px" alt="" />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default World;
