import React from "react";

const IconMobileNavbar = (props) => {
  return (
    <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
      {props.icon}
    </div>
  );
};

export default IconMobileNavbar;
