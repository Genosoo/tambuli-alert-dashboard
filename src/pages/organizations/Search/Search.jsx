import React from 'react'
import { BsSearch} from 'react-icons/bs'
import Filter from './filter/Filter'

export default function Search() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='orgSearchContainer'>
        <input type="search" placeholder='Search organizations...'/>
        <div className="orgBtn">
          <Filter open={open} handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} />
          <button className='find'>Find <BsSearch /></button>
        </div>
    </div>
  )
}
