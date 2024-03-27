// import React from 'react'

const SignUpLayout = ({ children }) => {
   return (
      <div className="flex justify-between w-full sm:w-screen h-fit">
         <div className="basis-1/4  w-full signup-layout-container  sm:hidden"></div>

         <div className="basis-3/4 flex justify-center items-center">
            {children}
         </div>
      </div>
   );
};

export default SignUpLayout;
