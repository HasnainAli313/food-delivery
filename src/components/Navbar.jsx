// import icon from "../assets/icons8-pizza-32.png"

// function Navbar() {
//   return (
//     <nav className='nav-bar'>
//         <div  className=' flex gap-2'>
//             <img src={icon} alt="" />
//             <h1 className="text-xl font-semibold">Pizza Delivery</h1>
//         </div>
//         <ul className='text-xl font-semibold flex gap-3  p-3 '>
//             <li>
//                 <a className='navlink' href='#'>Home</a>
//             </li>
//             <li>
//                 <a className='navlink' href='#about'>About</a>
//             </li>
//             <li>
//                 <a className='navlink' href='#foods'>Foods</a>
//             </li>
//             <li>
//                 <a className='navlink' href='#contact'>Contact</a>
//             </li>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import icon from "../assets/icons8-pizza-32.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav-bar'>
      <div className='flex gap-2'>
        <img src={icon} alt="" />
        <h1 className="text-xl font-semibold">Pizza Delivery</h1>
        <button className='hamburger' onClick={handleToggle}>
          &#9776;
        </button>
      </div>
      <ul className={`text-xl font-semibold flex gap-3 p-3 ${isOpen ? 'open' : ''}`}>
        <li>
          <a className='navlink' href='#'>Home</a>
        </li>
        <li>
          <a className='navlink' href='#about'>About</a>
        </li>
        <li>
          <a className='navlink' href='#foods'>Foods</a>
        </li>
        <li>
          <a className='navlink' href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
