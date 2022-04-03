import moment from "moment";
import { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const Science = () => {
  const { setDetailArticle, getArticlesData, articles, loading, erro, } = useContext(ArticlesContext);
  const createAlert = () => toast(`Ganhe até 50% de desconto ao assinar The Nelson's & Thais's Times. Saiba mais`);

  useEffect(() => {
    getArticlesData('technology');
    createAlert()
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
      <ToastContainer />
    </div>
  );
};

export default Science;
