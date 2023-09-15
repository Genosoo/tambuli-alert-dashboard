import React from 'react'
import styles from './exportButton.module.css'
import { BsDownload } from 'react-icons/bs'
import Menu from '@mui/material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

export default function ExportButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };





  return (
    <div className={styles.container}>
        <button className={styles.button } id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
            Export <BsDownload />
        </button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className='exportMenuBox'>
           <div className="exportMenuHeader">
               <h4>Export as</h4>
               <CancelIcon onClick={handleClose} />
           </div>

           <div className='exportSelect'>
            <span>Choose file format</span>
              <select>
                <option value="">Select</option>
                <option value="pdf">PDF</option>
                <option value="msword">MSWord</option>
              </select>
              <button>Export</button>
           </div>

        </div>
       
      </Menu>
    </div>
  )
}
