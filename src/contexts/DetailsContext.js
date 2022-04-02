import { createContext, useState } from "react";

export const DetailsContext = createContext();

const DetailsProvider = ({ children }) => {
  const [detailArticle, setDetailArticle] = useState({});

  return (
    <DetailsContext.Provider value={{ 
      detailArticle, 
      setDetailArticle 
    }}>
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
