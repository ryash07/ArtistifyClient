import React, { useState } from "react";
// import logo from "/logo.png";
import "./SellerNavigation.css";
import {
  FaAngleRight,
  FaArrowLeft,
  FaGift,
  FaList,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import useAuthContext from "../../../hooks/useAuthContext";
import useUserInfo from "../../../hooks/useUserInfo";
import { FaDropbox, FaHouse } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const SellerNavigation = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const { user, logOut } = useAuthContext();
  const [userFromDB] = useUserInfo();
  const [productSubmenuCollapsed, setProductSubmenuCollapsed] = useState(true);

  const collapseSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // handle logout user
  const handleLogout = () => {
    logOut()
      .then(() => {
        // logout successful
      })
      .catch((e) => console.error(e?.code));
  };

  return (
    <div>
      <header className="min-h-16 bg-white top-0 w-full fixed shadow z-[9999]">
        <div className="flex justify-between items-center h-16 gap-10 md:gap-0">
          <div className="flex justify-between items-center gap-x-3 w-[50%] md:w-[19.8%] border">
            <div className="flex-grow flex flex-col md:flex-row items-center justify-around bg-[var(--pink-gold)] px-2 py-7 h-16">
              <Link to={"/"} className="block w-[90%] md:w-[65%]">
                {/* <img src={logo} alt="logo" className="w-full" /> */}
              </Link>
            </div>
          </div>

          <details className="dropdown dropdown-end bg-white shadow-none h-16 m-0 w-[16%] md:w-[5%] border-none">
            <summary className="btn p-0 ml-auto flex gap-x-3 justify-center items-center w-full bg-white shadow-none rounded-none h-full hover:bg-base-200 border-none md:px-2">
              <div className="w-full px-2 md:px-0">
                <img
                  src={user?.photoURL}
                  alt={userFromDB?.name}
                  className="w-full h-11 rounded-full border border-[var(--pink-gold)]"
                />
              </div>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 w-[300%] rounded-none border">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <HashLink to="/#categories" smooth>
                  Categories
                </HashLink>
              </li>
              <li>
                <HashLink to="/#products" smooth>
                  Products
                </HashLink>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <HashLink to="/#reviews" smooth>
                  Reviews
                </HashLink>
              </li>

              <li>
                <button
                  className="border block text-center rounded-none"
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </details>
        </div>
      </header>

      <aside
        className={`${
          !sidebarCollapsed ? "w-[92vw] md:w-[19.72%]" : "w-[55px]"
        } h-[calc(100vh-64px)] whitespace-nowrap fixed shadow overflow-x-visible transition-all duration-500 ease-in-out top-16 bg-black z-[9999]`}
      >
        <div className="sidebar-menu-con flex flex-col justify-between h-full">
          <ul className="flex flex-col gap-2 mt-2 overflow-x-hidden overflow-y-auto flex-grow">
            <li className="text-white">
              {/* ------- ADMIN HOME --------- */}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? `active` : ""
                }
                to="/dashboard/sellerDashboard"
              >
                <div className="px-4">
                  <FaHouse className="text-xl block" />
                </div>
                <p className={`whitespace-nowrap pt-1 pl-1`}>Dashboard</p>
              </NavLink>
            </li>
            {/* ------------ CATEGORIES ------------ */}
            {/* <li className="text-white">
              <NavLink
                to="/dashboard/sellerCategories"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? `active` : ""
                }
              >
                <div className="px-4">
                  <FaList className="text-xl block" />
                </div>
                <p className={`whitespace-nowrap pt-1 pl-1`}>Categories</p>
              </NavLink>
            </li> */}
            {/* ------------ PRODUCTS ------------ */}
            <li className="text-white">
              <button
                onClick={function () {
                  setProductSubmenuCollapsed(!productSubmenuCollapsed);
                  setSidebarCollapsed(false);
                }}
                className={`product-collapse-link ${
                  !productSubmenuCollapsed && "active"
                }`}
              >
                <div className="px-4">
                  <FaGift className="text-xl block" />
                </div>
                <p className={`whitespace-nowrap pt-1 pl-1`}>Products</p>
                <div
                  className={`ml-auto transition-all duration-200 ease-in-out ${
                    !productSubmenuCollapsed ? "-rotate-90 mr-2" : "mr-2 mt-1"
                  }`}
                >
                  <FaAngleRight />
                </div>
              </button>
              <div
                className={`submenu ${
                  productSubmenuCollapsed ? "hidden" : "flex"
                } flex-col w-full space-y-3`}
              >
                <NavLink
                  to="/dashboard/sellerProducts"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? `active` : ""
                  }
                >
                  Manage Products
                </NavLink>
                <NavLink
                  to="/dashboard/sellerAddProducts"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? `active` : ""
                  }
                >
                  Add Product
                </NavLink>
              </div>
            </li>
            {/* ------------ ORDERS ------------ */}
            <li className="text-white">
              <NavLink
                to="/dashboard/sellerOrders"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? `active` : ""
                }
              >
                <div className="px-4">
                  <FaDropbox className="text-xl block" />
                </div>
                <p className={`whitespace-nowrap pt-1 pl-1`}>Orders</p>
              </NavLink>
            </li>
            {/* ------------ USERS ------------ */}
            {/* <li className="text-white">
              <NavLink
                to="/dashboard/adminUsers"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? `active` : ""
                }
              >
                <div className="px-4">
                  <FaUsers className="text-xl block" />
                </div>
                <p className={`whitespace-nowrap pt-1 pl-1`}>Users</p>
              </NavLink>
            </li> */}
            {/* ------------------------ */}
          </ul>

          <ul className="flex flex-col gap-1 mt-2 border-t border-gray-500">
            <li className="text-white" onClick={handleLogout}>
              <button className="logout-btn">
                <div className="px-4">
                  <FaSignOutAlt className="text-xl block" />
                </div>
                <p className={`whitespace-nowrap block pt-1 pl-1`}>Logout</p>
              </button>
            </li>
          </ul>
        </div>

        <button
          className="absolute top-1 -right-4 bg-slate-100 rounded-full p-2 opacity-70 hover:opacity-100"
          onClick={collapseSidebar}
        >
          <FaArrowLeft
            className={` block mx-auto transition-all duration-700 ease-in-out ${
              sidebarCollapsed && "rotate-180"
            }`}
          />
        </button>
      </aside>
    </div>
  );
};

export default SellerNavigation;
