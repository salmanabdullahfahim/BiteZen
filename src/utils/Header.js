import React from "react";

const Header = ({ subHeader, mainHeader }) => {
  return (
    <div className="text-center">
      <h3 className="uppercase font-semibold text-gray-100">{subHeader}</h3>
      <h2 className="text-primary text-4xl italic font-bold pb-3">
        {mainHeader}
      </h2>
    </div>
  );
};

export default Header;
