import React,{useState} from 'react';
import { Box, Button, MenuItem, Select, TextField } from '@mui/material';


interface B2BRepairFilterProps {
  onSearchChange: (searchValue: string) => void;
}

const B2BRepairFilter: React.FC<B2BRepairFilterProps> = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };
  return (
    <Box display="flex" alignItems="center" gap={2}>
      {/* Search Product Input */}
      <TextField
        variant="outlined"
        placeholder="Search Product"
        sx={{ backgroundColor: '#f5f5f5' }}
        value={searchValue}
        onChange={handleSearchChange}
      />

      {/* Category Dropdown */}
      <Select
        displayEmpty
        variant="outlined"
        defaultValue=""
        sx={{ backgroundColor: '#f5f5f5' }}
      >
        <MenuItem value="">
          <em>Category</em>
        </MenuItem>
        <MenuItem value="category1">Category 1</MenuItem>
        <MenuItem value="category2">Category 2</MenuItem>
        <MenuItem value="category3">Category 3</MenuItem>
      </Select>

      {/* Price Dropdown */}
      <Select
        displayEmpty
        variant="outlined"
        defaultValue=""
        sx={{ backgroundColor: '#f5f5f5' }}
      >
        <MenuItem value="">
          <em>Price</em>
        </MenuItem>
        <MenuItem value="price1">Low to High</MenuItem>
        <MenuItem value="price2">High to Low</MenuItem>
      </Select>

      {/* Filter Button */}
      <Button variant="contained" color="success">
        Filter
      </Button>

      {/* Reset Button */}
      <Button variant="outlined">
        Reset
      </Button>
    </Box>
  );
};

export default B2BRepairFilter;
