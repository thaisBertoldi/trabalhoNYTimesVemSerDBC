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
    const { data } = await Api.get(
      "/health.json?api-key=BkGZkAsENjFiJ9qka1Gy6GOHAmuRIxGF"
    );
    const { results } = data;

    setArticles(results);
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
          <div>
            <h1>{el.title}</h1>
            <small>{moment(el.published_date).format("DD/MM/YYYY")}</small>
            <p>{el.byline}</p>
            <p>{el.abstract}</p>
          </div>

          <div>
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
