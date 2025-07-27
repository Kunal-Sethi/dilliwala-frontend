/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function InlineLoader({ color = "white" }) {
  return (
    <span
      className={`ml-2 w-4 h-4 border-2 border-${color} border-t-transparent rounded-full animate-spin`}
    ></span>
  );
}

export default InlineLoader;
