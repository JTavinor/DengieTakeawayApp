import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Delay from "react-delay";

function LoadingIcon() {
  return (
    <Delay wait={1000}>
      <div className="loadingIcon flexRowCenter">
        <ClipLoader color="red" loading={true} size={150} />
      </div>
    </Delay>
  );
}

export default LoadingIcon;
