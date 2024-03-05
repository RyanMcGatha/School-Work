import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className="bg-tan-100 w-16 h-16 border border-tan-700 text-tan-700"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
