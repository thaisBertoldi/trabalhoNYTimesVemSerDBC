import { useEffect, useState } from "react";
import moment from "moment";
import Api from "../../Api";
import { Link } from "react-router-dom";

const Politics = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    returnPoliticsData();
  }, []);

  const returnPoliticsData = async () => {
    const { data } = await Api.get(
      "/politics.json?api-key=BkGZkAsENjFiJ9qka1Gy6GOHAmuRIxGF"
    );
    const { results } = data;

    setArticles(results);
  };


  return (
    <>
      <h1>Politics</h1>

      {articles.map((el) => (
        <div key={el.uri}>
          <Link
            to={`/details/${el.uri.split("/")[3]}`}
            className="container"
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
                  alt="alt"
                  width="150px"
                  height="150px"
                />
              ) : (
                <img src={el.multimedia[1].url} alt="" />
              )}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};


export default Politics;;