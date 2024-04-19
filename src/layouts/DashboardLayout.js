import React, { useState } from "react";
import DashboardNav from "../pages/Dashboard/DashboardNav/DashboardNav";
import { Outlet } from "react-router-dom";
import CustomHelmet from "../components/CustomHelmet/CustomHelmet";
import useUserInfo from "../hooks/useUserInfo";
import AdminNavigation from "../pages/Dashboard/AdminNavigation/AdminNavigation";
import useAuthContext from "../hooks/useAuthContext";
// import AnimateText from "@moxy/react-animate-text";

const DashboardLayout = () => {
  const [userFromDB, isUserLoading] = useUserInfo();
  const { user, isAuthLoading } = useAuthContext();

  // amdin dashboard side-navbar control
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div style={{ fontFamily: "var(--poppins)" }} className="max-w-screen-2xl">
      <CustomHelmet title={"Dashboard"} />

      <>
        {!isAuthLoading && user?.uid !== undefined && (
          <>
            {!isUserLoading && userFromDB?.admin ? (
              <div>
                <AdminNavigation
                  sidebarCollapsed={sidebarCollapsed}
                  setSidebarCollapsed={setSidebarCollapsed}
                />
                <div className="mt-20 mb-24">
                  <div
                    className={`w-[100vw-100px] ml-[60px] ${
                      !sidebarCollapsed
                        ? "md:w-[calc(100vw-330px)] md:ml-[300px]"
                        : "md:ml-[75px] md:w-[calc(100vw-100px)]"
                    } py-5 transition-all duration-500 ease-in-out md:px-6`}
                  >
                    <Outlet />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full p-4 md:container mt-10 mb-10 text-left">
                <h1
                  className="text-4xl font-bold text-black tracking-wide"
                  style={{ fontFamily: "var(--italiana)" }}
                >
                  {/* <AnimateText initialDelay={0.2} wordDelay={0.2}> */}
                    {`Welcome, ${userFromDB?.name}`}
                  {/* </AnimateText> */}
                </h1>

                <div className="flex flex-col md:flex-row items-start mt-16">
                  <div className="w-full md:w-[25%] md:border-none overflow-auto">
                    <DashboardNav />
                  </div>
                  <div className="md:divider md:divider-horizontal"></div>
                  <div className="md:w-[75%] md:pl-8 mt-10 md:mt-0">
                    <Outlet />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default DashboardLayout;
