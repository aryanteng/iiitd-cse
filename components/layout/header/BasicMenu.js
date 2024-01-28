'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function BasicMenu({ name, menuItems }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(event);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="body-small font-medium hover:text-primary-main"
        onClick={handleClick}
        aria-haspopup="true"
        aria-controls="basic-menu"
        aria-expanded={open ? 'true' : undefined}>
        {name}
        <KeyboardArrowDownIcon className="body-normal" />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {menuItems.map((item) => (
          <MenuItem
            className="body-xsmall hover:text-primary-main hover:cursor-pointer"
            key={item.link}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

BasicMenu.propTypes = {
  name: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
