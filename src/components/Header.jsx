import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div
      className="flex justify-between items-center p-4 font-roobert font-bold"
    >
      <div className="flex gap-3">
        <p>Male</p>
        <p>Female</p>
        <p>Brand</p>
        <p>Summer Sale</p>
      </div>
      <img src={logo} width={100} alt="" />
      <div className="flex gap-3">
        <p>
          EUR <span>€</span> <img src="" alt="" />
        </p>
        <p>Account</p>
        <p>Search</p>
        <p>
          Bag (<span>0</span>)
        </p>
      </div>
    </div>
  );
};

export default Header;
