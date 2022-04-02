import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DetailsContext } from "../../contexts/DetailsContext";
import Api from "../../Api";

const Health = () => {
  const [articles, setArticles] = useState([]);
  const { setDetailArticle } = useContext(DetailsContext);

  useEffect(() => {
    returnHealthData();
  }, []);

  const returnHealthData = async () => {
    try {
      const { data } = await Api.get(
        "/health.json?api-key=BkGZkAsENjFiJ9qka1Gy6GOHAmuRIxGF"
      );
      const { results } = data;
      sortArticles(results);
      setArticles(results);
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
  };

  return (
    <div className="container">
      <h1>Health</h1>
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

export default Health;
