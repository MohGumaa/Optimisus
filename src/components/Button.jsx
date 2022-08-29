import React from "react";

const Button = ({ styles, text, destinations }) => (
  <a
    href={destinations}
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none ${styles}`}
  >
    {text}
  </a>
);

export default Button;
