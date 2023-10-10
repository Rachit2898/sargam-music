import React, { useState } from "react";
import { MdOutlineClear } from "react-icons/md";

const TextField = ({
  label,
  error,
  handleInputState,
  handleErrorState,
  validationFunction,
  ...rest
}) => {
  const validateProperty = ({ name, value }) => {
    if (validationFunction) {
      const errorMessage = validationFunction(value);
      if (handleErrorState) handleErrorState(name, errorMessage);
      return errorMessage;
    }
    return "";
  };

  console.log(rest);

  const handleChange = ({ currentTarget: input }) => {
    const errorMessage = validateProperty(input);
    handleInputState(input.name, input.value);
  };

  return (
    <div className="relative flex flex-col w-full">
      <p className="mb-2 font-semibold text-base">{label}</p>
      <input
        {...rest}
        onChange={handleChange}
        className={
          error
            ? "h-12 text-base font-normal rounded-md border-1 border-red-500 px-4 hover:outline-red-500 focus:border-red-500"
            : "h-12 text-base text-black font-normal rounded-md border-1 border-black px-4 hover:outline-black focus:border-black"
        }
      />
      {error && (
        <p className="text-red-500 mt-1 flex items-center">
          <MdOutlineClear className="mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;
