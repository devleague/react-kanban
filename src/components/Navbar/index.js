import React from 'react';

const Navbar = ({ children }) => {
  console.log(children)
  return (
    <div>
      {children}
    </div>
  )
}

export default Navbar;