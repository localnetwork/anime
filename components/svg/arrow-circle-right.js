import React from "react";

const ArrowCircleRight = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      className={props.className}
    >
      <path
        stroke={props.color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
        d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
      />
    </svg>
  );
};

export default ArrowCircleRight;
