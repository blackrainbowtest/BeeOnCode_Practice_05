import { memo } from "react";
import TextField from "@mui/material/TextField";

function NameComponent({ categoryName, setCategoryName }) {
  return (
    <TextField
      id='standard-basic'
      label='Category'
      variant='standard'
      value={categoryName}
      onChange={(e) => setCategoryName(e.target.value)}
    />
  );
}

export default memo(NameComponent);
