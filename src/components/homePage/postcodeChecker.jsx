import React, { useState } from "react";

import { isValidPostcode } from "../../helpers/homePage";

import FormField from "../common/formField";

// Allows user to check their postcode to see which restaurants deliver to them
// Passes the postcode to the parent (Homepage) to filter the restaurants
// Checks if the user has entered a valid postcode and renders an error message accordingly
function PostcodeChecker({ postcode, setPostcode }) {
  const [validPostcode, setValidPostcode] = useState(true);

  return (
    <div className="postcodeContainer flexCol borderRound shadow">
      <FormField
        className="input"
        errorMessage="Enter a valid postcode"
        fieldError={postcode.length > 6 && !validPostcode}
        label="Enter your postcode to see which restaurants deliver to you"
        name="postcode"
        onChange={(e) => {
          setPostcode(e.target.value);
          setValidPostcode(isValidPostcode(e.target.value));
        }}
        placeholder="Postcode"
      />
      <p className="mb-0" style={{ textAlign: "center" }}>
        Note: Restaurants only deliver to CM0, CM1, CM2, CM3
      </p>
    </div>
  );
}

export default PostcodeChecker;
