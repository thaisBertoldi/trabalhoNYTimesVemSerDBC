import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DetailsContext } from "../../contexts/DetailsContext";
import Api from "../../Api";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { setDetailArticle } = useContext(DetailsContext);

  const getArticlesData = async () => {
    try {
      const { data } = await Api.get(
        "/home.json?api-key=k0YgedAIFDuVd5qUgwTlLhp4Z56aTnGd"
      );
      const { results } = data;
      setArticles(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticlesData();
  }, []);

  return (
    <div className="container">
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
            {/* <small>{moment(el.published_date).format("DD/MM/YYYY")}</small> */}
            <small>{moment(el.published_date).startOf("day").fromNow()}</small>
            <p>{el.byline}</p>
            <p>{el.abstract}</p>
          </div>
          <div>
            {el.multimedia === null ? (
              <img
                src="https://cna.com.br/Content/uploads/blogposts/os-melhores-sites-de-noticias-em-ingles-para-estudar.jpg"
                alt=""
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

export default Home;
