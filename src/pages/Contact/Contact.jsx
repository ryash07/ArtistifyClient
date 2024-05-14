import React, { useEffect, useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import CustomHelmet from "../../components/CustomHelmet/CustomHelmet";
import InputMask from 'react-input-mask';

const Contact = () => {

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  from = from?.includes("dashboard") ? "/" : from;

  // react hook form settings
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // form output
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const onSubmit = (data) => {
    setRegisterLoading(true);
    setRegisterError(false);
  };

  return (
    <div
      className="container mt-20 mb-24 px-6 md:px-0"
      style={{ fontFamily: "var(--poppins)", width: '70%' }}
    >
      <CustomHelmet title="Contact" />
      <h2
        className="text-6xl font-bold tracking-wide mb-2"
        style={{ fontFamily: "var(--italiana)" }}
      >
        {/* <AnimateText initialDelay={0.2} wordDelay={0.2} separator="">
          Contact
        </AnimateText> */}
        Get In Touch With Us
      </h2>

      <p className="text-xl font-bold tracking-wide mb-10" style={{ fontFamily: "var(--italiana)" }}>Become a Artify Partner Today!</p>

      {/* error notification */}
      {registerError && (
        <div
          role="alert"
          className="alert alert-error mb-8 rounded-lg text-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => setRegisterError(null)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error: {registerError.replace("auth/", "")}</span>
        </div>
      )}

      <form action="https://formsubmit.co/yashrajsen07@gmail.com" method="POST" className="loginRegisterForm">
        <div className="w-full auth-input-con">
          <p className="text-gray-600">Full Name</p>
          <input
            type="text"
            name="Name"
            // {...register("name", { required: true })}
            className="text-xl border-0 outline-none border-b-2 border-gray-400 w-full mt-3 pb-2"
          />
        </div>

        {/* email input */}
        <div className="w-full mt-8 auth-input-con">
          <p className="text-gray-600">Email address</p>
          <input
            type="email"
            name="Email"
            // {...register("email", { required: true })}
            className="text-xl border-0 outline-none border-b-2 border-gray-400 w-full mt-3 pb-2"
          />
        </div>

        {/* Mobile Number input */}
        <div className="w-full mt-8 auth-input-con">
            <p className="text-gray-600">Mobile number</p>
            <InputMask
              mask="99999-99999"  
              maskChar=""
              type="tel"
              name="Mobile Number"
              // placeholder="e.g., 12345-67890"
              // {...register("mobileNumber", {
              //   required: true,
              //   pattern: {
              //     value: /^[6-9]\d{4}-\d{5}$/,
              //     message: "Enter a valid Indian mobile number"
              //   }
              // })}
              className="text-xl border-0 outline-none border-b-2 border-gray-400 w-full mt-3 pb-2"
            />
        </div>

        {/* Comments text area */}
        <div className="w-full mt-8 auth-input-con">
          <p className="text-gray-600">Comments</p>
          <textarea
            name="Comments"
            // {...register("comments")}
            className="text-xl border-0 outline-none border-b-2 border-gray-400 w-full mt-3 pb-2"
          />
        </div>

        {/* register button */}
        <div className="mt-16 flex items-center gap-3">
          <button
            type="submit"
            className="uppercase text-sm text-white bg-black w-32 h-11 hover:rounded-xl transition-all duration-300"
            // disabled={registerLoading}
          >
            {registerLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Submit"
            )}
          </button>
          <p>
            Already have an Seller account?{" "}
            <Link to={"/sellerLogin"} className="underline block md:inline">
              Sign In
            </Link>
          </p>
        </div>
      </form>

    </div>
  );
};

export default Contact;
