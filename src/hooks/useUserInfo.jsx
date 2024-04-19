import React, { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {
  const { user, isAuthLoading } = useAuthContext();
  const [axiosSecure] = useAxiosSecure();
  const [totalSpentArray, setTotalSpentArray] = useState([]);

  const {
    data: userFromDB,
    isLoading: isUserLoading,
    refetch,
  } = useQuery({
    enabled:
      !isAuthLoading &&
      user?.uid !== undefined &&
      localStorage.getItem("artistify-jwt-token") !== null,
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user?email=${user?.email}`);
      return res.data;
    },
  });

  // fetch total spent amount by users
  useEffect(() => {
    if (
      !isAuthLoading &&
      user?.uid !== undefined &&
      localStorage.getItem("artistify-jwt-token") !== null &&
      userFromDB?.admin
    ) {
      axiosSecure.get("/admin/total-spent").then((res) => {
        setTotalSpentArray(res.data);
      });
    }
  }, [userFromDB]);

  return [userFromDB, isUserLoading, refetch, totalSpentArray];
};

export default useUserInfo;
