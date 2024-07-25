import { memo } from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

function TextInputComponent({
  value,
  callback,
  id,
  label = "Text",
  variant = "standard",
  adornment = "",
  error,
  helperText = "error",
}) {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      value={value}
      onChange={(e) => callback(e.target.value)}
      error={error}
      helperText={error ? helperText : ""}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>{adornment}</InputAdornment>
        ),
      }}
    />
  );
}

export default memo(TextInputComponent);
