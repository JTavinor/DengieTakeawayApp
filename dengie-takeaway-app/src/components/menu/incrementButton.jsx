import React from "react";
import { useDispatch } from "react-redux";

// Button for incrementing/decrementing the quantity of an item
// Used in the basket and MenuModal when adding an item to the basket
function IncrementButton({
  disabled,
  handler,
  itemName,
  price,
  styles,
  title,
}) {
  const dispatch = useDispatch();
  return (
    <button
      className={styles}
      disabled={disabled}
      onClick={() => dispatch(handler({ itemName, price }))}
      onMouseDown={(e) => e.preventDefault()}
    >
      {title}
    </button>
  );
}

export default IncrementButton;
