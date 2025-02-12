import React from "react";
import "./buyer.css";
import ReusableButton from "./ReusableButton";
import TransparentReusableBtn from "./TransparentReusableBtn";

function BuyerAgentSignup({ title }) {
  return (
    <div className=" buyer-page h-[15rem] w-[13rem] md:h-[28rem] md:w-[25rem] text-center">
      <h2 className=" font-extrabold md:text-lg text-white items-center pt-5 md:mt-20">
        {title}
      </h2>
      <p className=" p-4 text-xs md:text-base md:font-bold text-white md:mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin quis
        auctor sit consectetur dolor nisi volutpat elit.
      </p>
      <div className=" flex flex-row justify-around md:mt-10">
        {" "}
        <TransparentReusableBtn btn_txt="Log in" />
        <ReusableButton btn_txt="Sign up" />
      </div>
    </div>
  );
}

export default BuyerAgentSignup;
