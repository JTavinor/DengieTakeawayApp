import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Delay from "react-delay";

// Loading Icon - Used when waiting for data from an API call.
// Rendering is delayed for 1 second from API call start to prevent flickering
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
