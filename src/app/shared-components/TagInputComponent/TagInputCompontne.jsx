import React, { memo } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const AutocompleteContainer = styled(Autocomplete)(() => ({
  minWidth: "220px!important",
  maxWidth: "220px!important",
  minHeight: "48px!important",
  maxHeight: "170px!important",
  overflowY: "auto!important",
  overflowX: "hidden!important",
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
  marginRight: "5px!important",
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
  const handleAddTag = (_, tagToAdd) => {
    if (typeof tagToAdd === "string") {
      if (tagToAdd.trim() && !value.includes(tagToAdd.trim())) {
        callback([...value, tagToAdd.trim()]);
      }
    } else if (tagToAdd && tagToAdd.length > value.length) {
      callback(tagToAdd);
    }
  };

  const handleDeleteTag = (tagToDelete) => {
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
        <TextFieldContainer
          {...params}
          label={label}
          variant={variant}
          InputProps={{
            ...params.InputProps,
            endAdornment: null,
          }}
        />
      )}
    />
  );
}

export default memo(TagInputComponent);
