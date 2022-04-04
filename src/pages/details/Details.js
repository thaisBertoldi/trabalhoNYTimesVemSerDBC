import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import Api from "../../Api";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

import "./Details.css";

const Details = () => {
  const { detailArticle, setDetailArticle } = useContext(ArticlesContext);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);
  
  const getArticlesData = async () => {
    try {
      const { data } = await Api.get(
        "/home.json?api-key=k0YgedAIFDuVd5qUgwTlLhp4Z56aTnGd"
      );
      const { results } = data;
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
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (erro) {
    return <Error />;
  }

  return (
    <div className="container">
      <div className="detailsTitle">
        <h1>{detailArticle.title}</h1>
        {detailArticle.multimedia === null ? (
          <img
            src="https://cna.com.br/Content/uploads/blogposts/os-melhores-sites-de-noticias-em-ingles-para-estudar.jpg"
            width="650px"
            alt="alt"
          />
        ) : (
          <img src={detailArticle.multimedia[0].url} width="800px" alt="" />
        )}
      </div>
      <div className="detailDetailsPublish">
        <small>
          {moment(detailArticle.published_date).startOf("day").fromNow()}
        </small>
        <p>{detailArticle.byline}</p>
        <h3>{detailArticle.abstract}</h3>
        <div className="detailsContent">
          <div className="detailsInternContent">
            <p className="detailsP">
              As Russia pulls its forces back from areas around Ukraine's
              capital Kyiv, the BBC has seen evidence of potential war crimes on
              the outskirts of the city. Our correspondent Jeremy Bowen counted
              13 bodies on one small stretch of highway where, just hours
              earlier, Russian forces had been in control.
            </p>
            <p className="detailsP">
              We know who two of the dead were: a Ukrainian father and mother
              who had been fleeing to the capital with their daughter and an
              elderly woman. We know this because their deaths - as he put his
              hands up in surrender, trying desperately to stop Russian forces
              firing on the car they were travelling in - were caught on camera
              by a drone.
            </p>
          </div>
          <div className="detailsInternContent">
            <p className="detailsP">
              In other places along the road, attempts had been made to cover up
              the bodies. Our correspondent says we don't know what happened to
              these people, but a credible working assumption for any
              investigation must be that the other dead people were killed by
              either the tank crew seen in the drone video, or other Russian
              soldiers.
            </p>
            <p className="detailsP">
              The drone footage has been handed to the authorities for
              investigation. There have been numerous allegations of war crimes
              made since the start of the invasion in February, and both the UN
              and the International Criminal Court are looking into them.
            </p>
          </div>
        </div>

        <h4>What's happening in the east?</h4>
        <div>
          <p className="detailsP">
            As Russia pulls its forces back from areas around Ukraine's capital
            Kyiv, the BBC has seen evidence of potential war crimes on the
            outskirts of the city. Our correspondent Jeremy Bowen counted 13
            bodies on one small stretch of highway where, just hours earlier,
            Russian forces had been in control.
          </p>
        </div>
        <div>
          <p className="detailsP">
            Moscow has begun shifting its attention from the capital and the
            north in general, trying instead to encircle Ukraine's forces in the
            east of the country.
          </p>
        </div>
        <div>
          <p className="detailsP">
            Its army is moving south, taking control of the city of Izyum and
            bombarding a succession of towns to the east. Eventually, it hopes
            to move further south still, to the town of Slovyansk.
          </p>
        </div>
        <div>
          <p className="detailsP">
            But what is it that Russia wants with this region, known as the
            Donbas? On paper at least, the aim is to "liberate" its
            Russian-speaking majority.
          </p>
        </div>
      </div>

      <div className="detailsOtherNewsTitle">
        <h3>Other News:</h3>
      </div>
      <div className="detailsMoreNews">
        {articles.map((el) => (

          <Link
            key={el.uri}
            to={`/details/${el.uri.split("/")[3]}`}
            onClick={() => {
              setDetailArticle(el);
            }}
            className="detailLink"
          >
            <div className="contentImg">
              {el.multimedia === null ? (
                <img
                  src="https://cna.com.br/Content/uploads/blogposts/os-melhores-sites-de-noticias-em-ingles-para-estudar.jpg"
                  alt=""
                />
              ) : (
                <img src={el.multimedia[2].url} alt="" />
              )}
            </div>
            <div className="detailText">
              <div>
                <h4>{el.title}</h4>
              </div>
              <small>
                {moment(el.published_date).startOf("day").fromNow()}
              </small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Details;
