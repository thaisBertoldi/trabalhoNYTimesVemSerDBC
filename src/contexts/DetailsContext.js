import { createContext } from "react";

export const DetailsContext = createContext();

const DetailsProvider = ({ children }) => {
  return(
    <DetailsContext.Provider value={{}}>
      { children }
    </DetailsContext.Provider>
  );
}

export default DetailsProvider;