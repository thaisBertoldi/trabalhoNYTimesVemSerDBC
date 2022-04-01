import { useEffect, useState } from "react";
import Api from "../../Api";

const Science = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    returnScienceData();
  }, []);

  const returnScienceData = async () => {
    const { data } = await Api.get(
      "/science.json?api-key=BkGZkAsENjFiJ9qka1Gy6GOHAmuRIxGF"
    );
    const { results } = data;

    setArticles(results);
  };

  return (
    <>
      <h1>Science</h1>

      {articles.map((el) => (
        <div key={el.uri}>
          <h1>{el.title}</h1>
          <small>{el.published_date}</small>
          <p>{el.byline}</p>
          {el.multimedia === null ? (
            <img
              src="https://cna.com.br/Content/uploads/blogposts/os-melhores-sites-de-noticias-em-ingles-para-estudar.jpg"
              alt="alt"
              width="150px"
              height="150px"
            />
          ) : (
            <img src={el.multimedia[2].url} alt="" />
          )}
        </div>
      ))}
    </>
  );
};

export default Science;
