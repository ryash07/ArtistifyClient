import React from "react";
import "./OtherFeatures.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Line } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const OtherFeatures = () => {
  return (
    <div
      className="bg-[var(--pink-gold)] grid grid-cols-2 md:grid-cols-4 gap-y-0 gap-x-1 md:gap-x-3 px-1 md:px-16 py-8 mt-32 rounded-t-3xl text-center md:text-left features-container"
      style={{ fontFamily: "var(--poppins)" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:border-r-2 border-black">
        <LiaShippingFastSolid className="text-6xl" />
        <div>
          <h4 className="text-xl font-bold mb-2 text-black">Free Shipping</h4>
          <p className="text-gray-900">
            Free Shipping worldwide for orders over $1130
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:border-r-2 border-black">
        <BiSupport className="text-6xl" />
        <div>
          <h4 className="text-xl font-bold mb-2 text-black">Online Support</h4>
          <p className="text-gray-900">
            24 hours a day, 7 days a week continuous support
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:border-r-2 border-black">
        <RiRefund2Line className="text-6xl" />
        <div>
          <h4 className="text-xl font-bold mb-2 text-black">Money Guarentee</h4>
          <p className="text-gray-900">
            Replacement within 30 days without any questions
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 ">
        <MdOutlinePayment className="text-6xl" />
        <div>
          <h4 className="text-xl font-bold mb-2 text-black">
            Flexible Payment
          </h4>
          <p className="text-gray-900">
            Pay with multiple credit cards without any problems
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherFeatures;
