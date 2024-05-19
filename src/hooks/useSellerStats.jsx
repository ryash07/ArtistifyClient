import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useSellerStats = () => {
  const { user, isAuthLoading } = useAuthContext();
  const [axiosSecure] = useAxiosSecure();
  const [totalCategories, setTotalCategories] = useState(0);
  const [topCategories, setTopCategories] = useState([]);
  const [incomeStats, setIncomeStats] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  // const [recentReviews, setRecentReviews] = useState([]);

  const { data: adminStats } = useQuery({
    enabled:
      !isAuthLoading &&
      user?.uid !== undefined &&
      localStorage.getItem("artistify-jwt-token") !== null,
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/seller-dashboard/stats");
      return res.data;
    },
  });

  // TOP SELLING CATEGORIES
  useEffect(() => {
    if (user) {
      // get categories data
      axiosSecure.get("/seller-dashboard/top-selling-categories").then((res) => {
        setTotalCategories(res.data.totalCategories);
        setTopCategories(res.data.topCategories);
      });

      // get income stats for last 5 and current month
      axiosSecure.get("/seller-dashboard/income-stats").then((res) => {
        setIncomeStats(res.data);
      });

    }
    // eslint-disable-next-line
  }, [user]);

  // BEST SELLING POPULAR PRODUCTS
  useEffect(() => {
    if (user) {
      axiosSecure
        .get("/seller-dashboard/popular-products")
        .then((res) => setPopularProducts(res.data));
    }
    // eslint-disable-next-line
  }, [user]);

  // Recent Reviews
  // useEffect(() => {
  //   if (user) {
  //     axiosSecure
  //       .get("/seller-dashboard/recent-reviews")
  //       .then((res) => setRecentReviews(res.data));
  //   }
  //   // eslint-disable-next-line
  // }, [user]);

  return {
    adminStats,
    totalCategories,
    topCategories,
    incomeStats,
    popularProducts,
    // recentReviews,
  };
};

export default useSellerStats;
