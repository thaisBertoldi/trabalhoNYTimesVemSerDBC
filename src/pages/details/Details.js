import { useContext } from "react";
import { DetailsContext } from "../../contexts/DetailsContext";

const Details = () => {
  const { detailArticle } = useContext(DetailsContext);

  return (
    <>
      <h1>{detailArticle.title}</h1>
    </>
  );
};

export default Details;
