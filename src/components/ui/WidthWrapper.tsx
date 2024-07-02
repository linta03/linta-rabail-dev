import React from "react";

interface WidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const WidthWrapper: React.FC<WidthWrapperProps> = ({ children, className = "" }) => {
  return (
    <div className="w-full flex justify-center">
      <div className={`max-w-[1300px] w-full flex justify-center items-center ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default WidthWrapper;
