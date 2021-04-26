import React, { createContext, useState } from "react";

async function fetchElectronicItem(query) {
  const url = query
    ? "https://localhost:5001/api/electronicitems/search?" + query
    : "https://localhost:5001/api/electronicitems/search?";
  const res = fetch(url, {
    method: "GET",
    headers: {},
  });
  return (await res).json();
}

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [queryObject, setQueryObject] = useState({});
  const fetchProducts = (object) => {
    var query = "";
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        query += `${key}=${element}&`;
      }
    }
    fetchElectronicItem(query).then((json) => {
      setProducts(json);
      setQueryObject(object);
    });
  };

  const contextValues = {
    products,
    fetchProducts,
    queryObject,
  };

  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

// export const useSearch = () => {
//   const [products, setProducts] = useState([]);
//   const fetchProducts = (query) => {
//     fetchElectronicItem(query).then((json) => {
//       console.log(json);
//       setProducts(json);
//     });
//   };

//   return { products, fetchProducts };
// };
