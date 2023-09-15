import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwitchComponent from '../SwitchComponent/SwitchComponent';
import { useState } from 'react';

export default function InputComponent() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="reportInputWrapper">
          <div className="inputBox">
            <span>Report of:</span>
            <FormControl sx={{minWidth: 200}}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={ExpandMoreIcon}
                >
              <MenuItem value="">
                Select
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>

            <span>Grouped by:</span>
            <FormControl sx={{minWidth: 200}}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={ExpandMoreIcon}
                >
              <MenuItem value="">
                Select
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>

            <span>and</span>
            <FormControl sx={{minWidth: 200}}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={ExpandMoreIcon}
                >
              <MenuItem value="">
                Select
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
          </div>

          <SwitchComponent />

        </div>
  )
}
