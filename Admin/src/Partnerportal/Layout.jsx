import React, { useState } from 'react';
import Home from './Layout/Home';
import Sidebar from './Layout/Sidebar';
import Navbar from './Layout/Navbar';
import { Outlet } from 'react-router-dom';

function Layout(props) {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [contentComponent, setContentComponent] = useState(<Home />);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const changeContentComponent = (component) => {
    setContentComponent(component);
  };

  return (
    <div>
      <div className='grid-container'>
        <Navbar openSidebar={openSidebar} />
        <Outlet/>
        <Sidebar open={openSidebarToggle} changeContentComponent={changeContentComponent} />
        {contentComponent}
      </div>
    </div>
  );
}

export default Layout;
