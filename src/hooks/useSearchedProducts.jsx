import axios from "axios";
import React, { useEffect, useState } from "react";

const useSearchedProducts = (searchText) => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  useEffect(() => {
    setIsSearchLoading(true);
    axios
      .get(
        `https://ub-jewellers-server-production.up.railway.app/products?searchText=${searchText}`
      )
      .then((res) => {
        setSearchedProducts(res.data);
        setIsSearchLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsSearchLoading(false);
      });
  }, [searchText]);

  return [searchedProducts, isSearchLoading];
};

export default useSearchedProducts;
