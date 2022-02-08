import { LineStyle, Timeline, TrendingUp,Person, Report, WorkOutline, AttachMoney, InvertColorsOutlined, Mail, Feedback, Message, } from '@material-ui/icons';
import React from 'react';
import './sidebar.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h2 style={{fontSize:"25px"}}>Dashboard</h2>
                <ul className="sidebarList">
                   <Link to="/" className="link">
                    <li className="sidebarItems">
                        <LineStyle/>
                        <h5>Home</h5>
                    </li>
                    </Link>
                    <li className="sidebarItems">
                        <Timeline/>
                        <h5>Analytics</h5>
                    </li>
                    <li className="sidebarItems">
                        <TrendingUp/>
                        <h5>Sales</h5>
                      
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h2 className='sidebarTitle'>Quick Menu</h2>
                <ul className="sidebarList">
                    <Link to="/user" className='link'>
                    <li className="sidebarItems">
                        <Person/>
                        <h5>Users</h5>
                    </li>
                    </Link>
                  
                    <li className="sidebarItems">
                        <InvertColorsOutlined/>
                        <h5>Products</h5>
                    </li>
                   
                   
                    <li className="sidebarItems">
                        <AttachMoney/>
                        <h5>Transactions</h5>
                      
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h2 className='sidebarTitle'>Notifications</h2>
                <ul className="sidebarList">
                    <li className="sidebarItems">
                        <Mail/>
                        <h5>Mail</h5>
                    </li>
                    <li className="sidebarItems">
                        <Feedback/>
                        <h5>FeedBack</h5>
                    </li>
                    <li className="sidebarItems">
                        <Message/>
                        <h5>Messages</h5>
                      
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h2 className='sidebarTitle'>Staffs</h2>
                <ul className="sidebarList">
                    <li className="sidebarItems">
                        <WorkOutline/>
                        <h5>Manage</h5>
                    </li>
                    <li className="sidebarItems">
                        <Timeline/>
                        <h5>Analytics</h5>
                    </li>
                    <li className="sidebarItems">
                        <Report/>
                        <h5>Reports</h5>
                      
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
};

export default Sidebar;
