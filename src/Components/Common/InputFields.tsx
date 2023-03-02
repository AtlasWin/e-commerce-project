import { TextField } from "@mui/material";

function InputFields({ register, errors, name, type, label }) {
  return (
    <TextField
      {...register(name)}
      label={label}
      variant="outlined"
      type={type}
      required
      autoComplete="off"
      error={!!errors[name]?.message}
      helperText={errors[name]?.message}
      sx={{ width: ["250px", "345px", "400px"], marginBottom: "20px" }}
    />
  );
}

export default InputFields;
