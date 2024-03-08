import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { TbTargetArrow } from "react-icons/tb";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { IoDocuments } from "react-icons/io5";
import { MdDocumentScanner } from "react-icons/md";
import { TbDrone } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import logo from "../../images/logo.png";

import { Link } from 'react-router-dom';


const Sidebar = ({ open, openSidebar }) => { 
    const handleLinkClick = (event) => {
        event.preventDefault(); 
        openSidebar(); 
    };
    return (
        <aside id="sidebar" className={open ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <a href="https://www.indowings.com/" target="_blank">
                <img src={logo} alt="Logo" className="icon_header" />
            </a>
        </div>


        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/layout">  Partner Portal </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/layout">
                    <TbLayoutDashboard  className='icon'/> Dashboard
                </a>
            </li>
                <li className='sidebar-list-item'>
                    <a href="/targetlayout">
                        <TbTargetArrow className='icon'/> Targets
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/storelayout">
                        <FaFileInvoiceDollar className='icon'/> Partner Store
                    </a>
                </li>
                
                <li className='sidebar-list-item'>
                    <a href="/orderlayout">
                        <LiaLuggageCartSolid className='icon'/>  Orders
                    </a>
                </li>
                
                <li className='sidebar-list-item'>
                    <a href="/profilelayout">
                        <TbDrone  className='icon'/> Company Profile
                    </a>
                </li>
                
                <li className='sidebar-list-item'>
                    <a href="/Infolayout">
                        <MdDocumentScanner  className='icon'/> Legal Information
                    </a>
                </li>

                <li className='sidebar-list-item'>
                    <a href="https://drive.google.com/drive/folders/1GQgcj2BKy7VlgpGt9GbdkmG1PWEj02PI?usp=sharing" target='_blank'>
                        <FaBagShopping  className='icon'/> Marketing
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/docslayout">
                        <IoDocuments  className='icon'/> Documents
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/announcelayout">
                        <TfiAnnouncement  className='icon'/> Announcements
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/supportlayout">
                        <IoPersonSharp  className='icon'/> Support
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
