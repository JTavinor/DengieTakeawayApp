import React from "react";

function ApiError({ error }) {
  if (error === "Network Error") {
    return (
      <div className="errorContainer flexColCenter">
        <h1>{error}</h1>
        <p>
          Unfortunately we can't connect to the server right now. Either refresh
          the page or try again later.
        </p>
      </div>
    );
  }
  return (
    <div className="errorContainer flexColCenter">
      <h1>404 Error</h1>
      <p>
        Unfortunately we can't find the resources you are looking for right now.
        Either refresh the page or try again later.
      </p>
    </div>
  );
}

export default ApiError;
