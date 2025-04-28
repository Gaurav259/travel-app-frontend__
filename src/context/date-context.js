import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducer";

const initialState = {
  checkinDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
};

const DateContext = createContext(initialState);

const DateProvider = ({ Children }) => {
  const [{ checkinDate, checkOutDate, isSearchModalOpen }, dateDispatch] =
    useReducer(dateReducer, initialState);

  return (
    <DateContext.Provider
      value={{ checkinDate, checkOutDate, isSearchModalOpen, dateDispatch }}
    >
      
      {Children}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };
