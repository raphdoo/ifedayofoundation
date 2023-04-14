import React from 'react';

const Button = ({ styles, text }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white rounded-[10px] outline-none bg-tertiary ${styles}`}
    onClick={() => window.open('https://eyowo.me/EYW_EIkTTkhzi7G5B8L')}
  >
    {text}
  </button>
);

export default Button;
