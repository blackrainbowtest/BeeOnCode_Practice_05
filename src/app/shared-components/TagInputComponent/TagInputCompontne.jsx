import React, { memo } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const AutocompleteContainer = styled(Autocomplete)(() => ({
  minWidth: "220px!important",
  maxWidth: "220px!important",
  minHeight: "48px!important",
}));
const TextFieldContainer = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    maxHeight: "32px",
    overflow: "hidden",
  },
}));

const CustomChip = styled(Chip)(({ theme }) => ({
  maxHeight: `31px!important`,
  borderRadius: "5px!important",
  margin: "2px",
  backgroundColor: `${theme.palette.background.button}!important`,
  color: `${theme.palette.common.white}!important`,
  "& .MuiChip-deleteIcon": {
    color: `${theme.palette.error.text}!important`,
    maxHeight: "60%",
  },
  "& .MuiChip-deleteIcon:hover": {
    color: `${theme.palette.error.hover}!important`,
  },
  "&:hover": {
    backgroundColor: theme.palette.background.buttonTransparent,
  },
}));

function TagInputComponent({
  value = [],
  callback,
  id,
  label = "Tags",
  variant = "standard",
}) {
  const handleAddTag = (event, newValue) => {
    if (typeof newValue === "string") {
      if (newValue.trim() && !value.includes(newValue.trim())) {
        callback([...value, newValue.trim()]);
      }
    } else if (newValue && newValue.length > value.length) {
      callback(newValue);
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    console.log("Deleting tag:", tagToDelete);
    callback(value.filter((tag) => tag !== tagToDelete));
  };

  return (
    <AutocompleteContainer
      multiple
      id={id}
      options={[]}
      value={value}
      freeSolo
      onChange={handleAddTag}
      renderTags={(value) =>
        value.map((option, index) => {
          return (
            <CustomChip
              key={index}
              variant='outlined'
              label={option}
              onDelete={() => handleDeleteTag(option)}
              deleteIcon={<CloseIcon className='custom-delete-icon' />}
            />
          );
        })
      }
      renderInput={(params) => (
        <TextFieldContainer {...params} label={label} variant={variant} />
      )}
    />
  );
}

export default memo(TagInputComponent);
