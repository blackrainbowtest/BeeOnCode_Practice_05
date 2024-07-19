import { memo } from "react";
import TextField from "@mui/material/TextField";

function TextInputComponent({
  value,
  callback,
  id,
  label = "Text",
  variant = "standard",
}) {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      value={value}
      onChange={(e) => callback(e.target.value)}
    />
  );
}

export default memo(TextInputComponent);
