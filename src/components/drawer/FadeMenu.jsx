import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <svg width="24" height="24" class="BOTrp" viewBox="0 0 24 24" version="1.1" aria-hidden="false"><path d="M3 16h18v2H3v-2ZM3 6v2h18V6H3Zm0 7h18v-2H3v2Z"></path></svg>
      </Button>
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
        


        <MenuItem onClick={handleClose}>   Explores  </MenuItem>
        <MenuItem onClick={handleClose}>   Advertise    </MenuItem>
        <MenuItem onClick={handleClose}>   Unsplash+   </MenuItem>
        <MenuItem onClick={handleClose}>  Log In     </MenuItem>
        <MenuItem onClick={handleClose}>  Sign Up   </MenuItem>
      </Menu>
    </div>
  );
}