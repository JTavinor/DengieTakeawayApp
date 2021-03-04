import React, { useState } from "react";
import FormField from "../common/FormField";

function isValidPostcode(postcode) {
  var postcodeRegEx = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  return postcodeRegEx.test(postcode);
}

function PostcodeChecker({ postcode, setPostcode }) {
  const [validPostcode, setValidPostcode] = useState(true);

  return (
    <div className="postcodeContainer">
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
    </div>
  );
}

export default PostcodeChecker;
