import axios from "axios";
import { useQuery } from "react-query";

const useSellerProducts = () => {
  const {
    data: products,
    isLoading: isProductsLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        "http://localhost:5000/products/seller"
      );
      return res.data;
    },
  });

  return [products, isProductsLoading, refetch];
};

export default useSellerProducts;
