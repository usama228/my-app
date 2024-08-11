import React from 'react';

import './InputComponents.css'


export function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search products..." />
    </div>
  );
}

export function NameInput() {
  return (
    <div>
      <input type="text" placeholder="Enter your name" />
    </div>
  );
}

