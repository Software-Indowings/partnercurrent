import React, { useState } from 'react';
import Sidebar from '../Layout/Sidebar';
import Target from './Target';
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux'; 
import { setUsername } from '/src/redux/actions';


function Targetlayout(props) {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [contentComponent, setContentComponent] = useState(<Target />);
  
    const openSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const changeContentComponent = (component) => {
      setContentComponent(component);
    };
  
    return (
      <div>
        <div className='grid-container'>
          <Navbar openSidebar={openSidebar}  username={props.username} />
          <Outlet/>
          <Sidebar open={openSidebarToggle} changeContentComponent={changeContentComponent} />
          {contentComponent}
        </div>
      </div>
    );
}
 
const mapStateToProps = (state) => ({
  username: state.username,
});

const mapDispatchToProps = {
  setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(Targetlayout);

