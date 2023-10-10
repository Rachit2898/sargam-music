import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const RadioInput = ({
  name,
  handleInputState,
  label,
  options,
  required,
  ...rest
}) => {
  const handleChange = ({ currentTarget: input }) => {
    handleInputState(input.name, input.value);
  };

  return (
    <div className="relative flex flex-col w-full">
      <p className="mb-2 font-semibold text-lg">{label}</p>
      <RadioGroup {...rest} row name={name} onChange={handleChange}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={
              <Radio
                disableRipple
                style={{ color: "#15883e", transform: "scale(1.2)" }}
                required={required}
              />
            }
            label={option}
            className="text-green-600 form-radio focus:ring-green-500"
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioInput;
