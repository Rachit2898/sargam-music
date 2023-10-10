const Select = ({ label, options, handleInputState, placeholder, ...rest }) => {
  const handleChange = ({ currentTarget: input }) => {
    handleInputState(input.name, input.value);
  };

  return (
    <div className="relative flex flex-col w-full">
      <p className="mb-2 font-semibold text-lg">{label}</p>
      <select
        onChange={handleChange}
        {...rest}
        className="h-12 text-base font-normal border border-black rounded-md px-4 focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black"
      >
        <option style={{ display: "none" }} value="">
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
