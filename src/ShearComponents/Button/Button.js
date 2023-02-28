import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-[#19D3AE] px-5 py-2 text-white font-semibold rounded-md">
      {children}
    </button>
  );
};

export default Button;
