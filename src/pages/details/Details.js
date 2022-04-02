import { useContext } from "react";
import { DetailsContext } from "../../contexts/DetailsContext";

const Details = () => {
  const { detailArticle } = useContext(DetailsContext);

  return (
    <div className="container">
      <h1>{detailArticle.title}</h1>
    </div>
  );
};

export default Details;
