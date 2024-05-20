import axios from "axios";
import React, { useEffect, useState } from "react";

const useSellerSearchedProducts = (searchText) => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  useEffect(() => {
    setIsSearchLoading(true);
    axios
      .get(
        `https://artistify-server.vercel.app/products/seller?searchText=${searchText}`
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

export default useSellerSearchedProducts;
