/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
/* eslint-enable @typescript-eslint/no-unused-vars */

interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <div className="lg:py-16 lg:px-10 py-10 px-6 mx-auto flex flex-col overflow-hidden w-full md:max-w-7xl">
        {children}
      </div>
    </>
  );
};

export default Wrapper;
