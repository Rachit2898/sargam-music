import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckboxInput = ({ label, ...rest }) => {
  return (
    <FormControlLabel
      className="checkbox_container"
      control={
        <Checkbox {...rest} sx={{ color: "#15883e" }} className="checkbox" />
      }
      label={label}
    />
  );
};

export default CheckboxInput;
