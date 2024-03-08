import React, { useState } from 'react';
import Sidebar from '../Layout/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Info from './Info';



function Infolayout(props) {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [contentComponent, setContentComponent] = useState(<Info />);
  
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

export default Infolayout;
