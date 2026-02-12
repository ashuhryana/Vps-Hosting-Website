import React from "react";
import logo from "./assets/logo.png"; 

interface LogoProps {
  className?: string;
  isSidebar?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-12",
  isSidebar = false,
}) => {
  const imgClass = `${className} w-auto object-contain select-none`;

  return (
    <div className={`flex items-center gap-3 transition-transform hover:scale-105 duration-300`}>
      <div
        className={`relative flex items-center justify-center ${
          isSidebar
            ? "bg-white/95 dark:bg-white p-2 rounded-2xl shadow-lg"
            : ""
        }`}
      >
        <img
          src={logo}
          alt="VPSBazaar Logo"
          className={imgClass}
          draggable={false}
        />
      </div>
    </div>
  );
};
