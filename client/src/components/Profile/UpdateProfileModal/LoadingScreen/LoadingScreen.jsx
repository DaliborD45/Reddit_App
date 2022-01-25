import React from "react";

const LoadingScreen = () => {
  return (
    <span
      class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
      style="
  top: 50%;
"
    >
      <i class="fas fa-circle-notch fa-spin fa-5x"></i>
    </span>
  );
};

export default LoadingScreen;
