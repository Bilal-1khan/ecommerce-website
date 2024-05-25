import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MonthBox() {
    const [month, setMonth] = React.useState('');
  
    const handleChange = (event) => {
        setMonth(event.target.value);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">MM</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={month}
          label="MM"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>January</MenuItem>
          <MenuItem value={20}>February</MenuItem>
          <MenuItem value={30}>March</MenuItem>
          <MenuItem value={40}>April</MenuItem>
          <MenuItem value={50}>May</MenuItem>
          <MenuItem value={60}>June</MenuItem>
          <MenuItem value={70}>July</MenuItem>
          <MenuItem value={80}>August</MenuItem>
          <MenuItem value={90}>September</MenuItem>
          <MenuItem value={100}>October</MenuItem>
          <MenuItem value={110}>November</MenuItem>
          <MenuItem value={120}>December</MenuItem>
        </Select>
      </FormControl>
    );
  }