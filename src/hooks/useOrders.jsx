import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = () => {
  const { user, isAuthLoading } = useAuthContext();
  const [axiosSecure] = useAxiosSecure();

  // get all orders by email
  const {
    data: orders,
    isLoading: isOrdersLoading,
    refetch,
  } = useQuery({
    enabled: !isAuthLoading && user?.uid !== undefined,
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user?.email}`);
      return res.data;
    },
  });

  // get total amount spent on the orders
  const [totalSpent, setTotalSpent] = useState(0);
  useEffect(() => {
    if (orders && user?.uid !== undefined) {
      const sum = orders.reduce((totalAmount, item) => {
        return totalAmount + parseFloat(item.total);
      }, 0);

      setTotalSpent(sum.toFixed(2));
    }
  }, [orders, user]);

  return { orders, isOrdersLoading, refetch, totalSpent };
};

export default useOrders;
