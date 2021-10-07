import React from "react";

import { LoaderWrapper } from "./styles";

export const Loader = () => {
  return (
    <LoaderWrapper type="ellipsis">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};

export const LoaderCircle = () => {
  return (
    <LoaderWrapper type="roller">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};
