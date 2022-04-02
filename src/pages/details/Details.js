import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();

  return(
    <>
      {console.log(params.id)}
    </>
  );
}

export default Details;
