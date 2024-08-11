import React from 'react';
import './DropdownMenu.css';

function DropdownMenu({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="dropdown-menu">
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;

