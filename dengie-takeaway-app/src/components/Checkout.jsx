import React from "react";

function Checkout(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="cuisineContainer">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address1">Address 1:</label>
        <br />
        <input
          autoFocus
          style={{ width: "70%" }}
          type="text"
          id="address1"
          name="address1"
          placeholder="Address 1"
        />
        <br />
        <label htmlFor="address2">Address 2:</label>
        <br />

        <input
          style={{ width: "70%" }}
          type="text"
          id="address2"
          name="address2"
          placeholder="Address 2"
        />
        <br />
        <label htmlFor="town">Town/City:</label>
        <br />

        <input
          style={{ width: "70%" }}
          type="text"
          id="town"
          name="town"
          placeholder="Town/City"
        />
        <br />
        <label htmlFor="postcode">Postcode:</label>
        <br />

        <input
          style={{ width: "70%" }}
          type="text"
          id="postcode"
          name="postcode"
          placeholder="Postcode"
        />
        <button className="addToBasketButton" style={{ width: "50%" }}>
          Continue
        </button>
      </form>
    </div>
  );
}

export default Checkout;
