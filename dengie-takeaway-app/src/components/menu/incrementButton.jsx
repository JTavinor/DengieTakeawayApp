import React from "react";
import { useDispatch } from "react-redux";

function IncrementButton({ handler, title, itemName, price, styles }) {
  const dispatch = useDispatch();
  return (
    <button
      className={`counterButton ${styles}`}
      onClick={() => dispatch(handler({ itemName, price }))}
    >
      {title}
    </button>
  );
}

export default IncrementButton;
