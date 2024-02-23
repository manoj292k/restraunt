import Logo from'../images/logo.png'

import React,{useState} from 'react';
  



function Header(){

  const [isOpen, setIsOpen] = useState(false);

  const ToggleEvent = () => {
    setIsOpen(!isOpen);
  };

  return(
<> 
<nav className="fluid-container">
    <a href='/'>
    <img src={<Logo/>} alt="logo" />
    </a>
    <ul>
      <li>About us</li>
      <li>Catering</li>
      <li>Franchise</li>
      <li>Loyalty Gift Cards</li>
    </ul>
    <div>
    <button className="Button_1">Order Now</button>
    <button className="Button_2">Book Table </button>
    </div>
   
</nav>
<div className='menubar'>
  <button onClick={ToggleEvent}>E</button>
  {isOpen && (
        <ul className='mobile-menu'>
          <a href='/'>
    <img src={<Logo/>} alt="Description" />
    </a>
    <li>About us</li>
      <li>Catering</li>
      <li>Franchise</li>
      <li>Loyalty Gift Cards</li>
        </ul>
      )}
</div>
</>
  )
}
export default Header;