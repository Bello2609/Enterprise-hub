// import React from "react";

const FormInput = ({
   label,
   type,
   register,
   name,
   error,
   placeholder,
   onChange,
   value,
}) => {
   return (
      <div className="flex flex-col gap-4 mt-3">
         <div className="flex">
            <label className="font-medium text-[#252524]">{label}</label>
         </div>

         <div className="border-solid border border-[#DFDFDF] rounded-lg px-2 h-11">
            <input
               className="w-full h-full border-0 outline-0"
               placeholder={placeholder}
               type={type}
               {...(register && {
                  ...register(name, {
                     required: `This field is required`,
                     // Add other validation rules as needed
                  }),
               })}
               onChange={onChange}
               value={value}
            />
         </div>
         {/* {error && error[name] && (
            <p className="error text-danger m-0">{error[name].message}</p>
         )} */}
      </div>
   );
};

export default FormInput;
