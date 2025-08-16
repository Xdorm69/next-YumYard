import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="w-16 h-16 rounded-full bg-white/30 animate-pulse"></div>
    </div>
  );
};

export default Loader;
