// import React from 'react'

const CustomButton = ({
   children,
   handleClick,
   isSignInWithGoogle,
   isSignInBtn,
}) => {
   const buttonClassName = `
      w-full rounded-lg px-5 py-3 my-3
      ${
         isSignInWithGoogle
            ? "border-solid border border-[#DFDFDF] rounded-lg text-start flex items-center gap-3"
            : "border-0"
      }
      ${isSignInBtn ? "bg-[#81C167] text-[#fff]" : ""}
   `;

   return (
      <button className={buttonClassName} onClick={handleClick}>
         {children}
      </button>
   );
};

export default CustomButton;
