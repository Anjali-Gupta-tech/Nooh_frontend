import React from "react";

const Logo = ({ className = "h-10" }) => {
  return (
    <img
      src="/image/nooh-logo-new.png"
      alt="NOOH"
      className={className}
    />
  );
};

export default Logo;