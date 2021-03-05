import React from "react";
import { Bars } from "react-loading-icons";
import Delay from "react-delay";

function LoadingIcon() {
  return (
    <Delay wait={1000}>
      <div className="loadingIcon">
        <Bars height="100px" />
      </div>
    </Delay>
  );
}

export default LoadingIcon;
