import { useContext } from "react";
import moment from "moment";
import './Details.css'
import { DetailsContext } from "../../contexts/DetailsContext";

const Details = () => {
  const { detailArticle } = useContext(DetailsContext);

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
      <div>
        
        <small>
          {moment(detailArticle.published_date).startOf("day").fromNow()}
        </small>
        <p>{detailArticle.byline}</p>
        <p>{detailArticle.abstract}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit est ex unde, molestias officia ducimus error ipsa
          veritatis similique, voluptatem velit ut repudiandae aliquid, quas id
          nam quisquam consequatur rem provident nemo architecto eveniet
          voluptatibus! Voluptas, molestiae. Labore dolorum blanditiis, nisi
          expedita rerum temporibus officia non cumque pariatur sint. Porro?
        </p>
      </div>
    </div>
  );
};

export default Details;
