import React from "react";

import "../../css/error.css";

function ApiError({ error }) {
  const formatErrorMessage = (error) => {
    if (error === "Network Error") {
      return (
        <>
          <h1 className="errorHeader">{error}</h1>
          <p>
            Unfortunately we can't connect to the server right now. Either
            refresh the page or try again later.
          </p>
        </>
      );
    } else if (error === "Request failed with status code 404") {
      return (
        <>
          <h1 className="errorHeader">404 Error</h1>
          <p>
            Unfortunately we can't find the resources you are looking for right
            now. Either refresh the page or try again later.
          </p>
        </>
      );
    }
  };

  return <div className="errorContainer">{formatErrorMessage(error)}</div>;
}

export default ApiError;
