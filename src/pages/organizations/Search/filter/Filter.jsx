import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {  BsSliders2 } from 'react-icons/bs'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

export default function FadeMenu({open, handleClick, handleClose, anchorEl}) {
    const [personName, setPersonName] = useState([]);
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setAge(event.target.value);
    };
  

  return (
    <>
        <button 
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='filter'>Filter <BsSliders2/></button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
       <div className='flex flex-col'>
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
            >
            {names.map((name) => (
                <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
                </MenuItem>
            ))}
            </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Age"
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
        </FormControl>
       </div>

        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </>
  );
}

FadeMenu.propTypes = {
    open: PropTypes.bool.isRequired, // Assuming 'open' is a required boolean prop
    handleClick: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    anchorEl: PropTypes.object, // You can adjust the PropTypes for anchorEl based on its actual type
  };