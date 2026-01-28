import React from "react";

const Button = ({ content }) => {
  return (
    <button
      className="bg-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:bg-orange-600 transition"
    >
      {content}
    </button>
  );
};

export default Button;