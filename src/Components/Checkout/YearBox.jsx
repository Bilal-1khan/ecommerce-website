import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function YearBox() {
    const [month, setMonth] = React.useState('');
  
    const handleChange = (event) => {
        setMonth(event.target.value);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">YY</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={month}
          label="YY"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>2024</MenuItem>
          <MenuItem value={20}>2025</MenuItem>
          <MenuItem value={30}>2026</MenuItem>
          <MenuItem value={40}>2027</MenuItem>
          <MenuItem value={50}>2028</MenuItem>
          <MenuItem value={60}>2029</MenuItem>
          <MenuItem value={70}>2030</MenuItem>
          <MenuItem value={80}>2031</MenuItem>
          <MenuItem value={90}>20232</MenuItem>
          <MenuItem value={100}>2034</MenuItem>
          <MenuItem value={110}>2035</MenuItem>
          <MenuItem value={120}>2036</MenuItem>
        </Select>
      </FormControl>
    );
  }