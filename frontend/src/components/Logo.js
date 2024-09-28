import React from 'react'
import logo from '../assest/logo/logo.png'
const Logo = ({w,h}) => {
  return (
    <div className="p-4">
        <img src={logo} className="h-14 w-14 rounded-full" />
      </div>
  );
};

export default Logo