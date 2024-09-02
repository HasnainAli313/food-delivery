import icon from "../assets/icons8-pizza-32.png"

function Navbar() {
  return (
    <nav className='nav-bar'>
        <div  className=' flex gap-2'>
            <img src={icon} alt="" />
            <h6>Pizza Delivery</h6>
        </div>
        <ul className='flex gap-3  p-3 '>
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
  )
}

export default Navbar