// import React from 'react'

const SignUpLayout = ({ children }) => {
   return (
      <div className="w-screen h-screen m-0 p-0 overflow-x-hidden flex">
         <div className="signup-layout-container w-[543px] h-[900px]"></div>

         <div className="form-container flex justify-center items-center">
            {children}
         </div>
      </div>
   );
};

export default SignUpLayout;
