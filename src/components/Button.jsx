import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white rounded-[10px] outline-none bg-tertiary ${styles}`}>
    Join Us
  </button>
);

export default Button;