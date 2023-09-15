import Switch from '@mui/material/Switch';
import { useState } from 'react';


function SwitchComponent() {
    const [checked, setChecked] = useState(false);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
      <div className='switchContainer'>
        <span>Show totals:</span>
        <Switch
          checked={checked}
          onChange={handleChange}
          color="primary" // You can change the color to 'secondary' or 'default'
        />
      </div>
    );
  }
  
  export default SwitchComponent;
  