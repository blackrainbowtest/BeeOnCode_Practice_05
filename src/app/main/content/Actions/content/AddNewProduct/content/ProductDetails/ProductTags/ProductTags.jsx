import React, { useState } from 'react';
import { TextField, Chip, Box } from '@mui/material';
import { memo } from 'react';

function ProductTags() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      const value = inputValue.trim();
      if (value && !tags.includes(value)) {
        setTags([...tags, value]);
        setInputValue('');
      }
    } else if (event.key === 'Backspace' && !inputValue) {
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  const handleDelete = (tagToDelete) => () => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '4px',
        padding: '4px',
        '&:hover': {
          borderColor: 'rgba(0, 0, 0, 0.87)',
        },
      }}
    >
      {tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag}
          onDelete={handleDelete(tag)}
          sx={{ margin: '4px' }}
        />
      ))}
      <TextField
        variant="standard"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter tags"
        sx={{
          flex: '1 0 auto',
          minWidth: '100px',
          '& .MuiInput-underline:before': { borderBottom: 'none' },
          '& .MuiInput-underline:after': { borderBottom: 'none' },
          '& .MuiInputBase-input': { padding: '4px' },
        }}
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  );
}

export default memo(ProductTags);
