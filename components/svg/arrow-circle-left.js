import React from "react";

const ArrowCircleLeft = ({ ...props }) => {
  return (
    <svg
      width={props.width}
      className={props.className}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
      />
    </svg>
  );
};

export default ArrowCircleLeft;
