import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ openSidebar, username }) { // Receive username as a prop
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const buttonStyle = {
    backgroundColor: '#191B30',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#EF7F1A';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#191B30';
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={openSidebar} />
      </div>
      <div className='header-left'>
        Welcome {username}
      </div>
      <div className='header-right'>
        <button
          style={buttonStyle}
          onClick={handleLogout}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          LOGOUT
        </button>
      </div>
    </header>
  );
}

export default Header;
