import React from "react";
import { Card } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faCalendar, faRegistered, faList  } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";
import './siderUser.css'

export default function SiderUser () {
    return (
        <>
            <Card className="sider__navbar-wrapper" title="MAIN" bordered={false}>
                <NavLink
                    className={({isActive}) => (isActive ? "sider__nav-content-active" : "sider__nav-content")}
                    to='dashboard'
                >
                    <FontAwesomeIcon className="sider__nav-icon" icon={faHouse} />
                    Dashboard
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? "sider__nav-content-active" : "sider__nav-content")}
                    to='profile'
                >
                    <FontAwesomeIcon className="sider__nav-icon" icon={faAddressCard} />
                    Profile
                </NavLink>
            </Card> 
            <Card className="sider__navbar-wrapper" title="LAB MANAGEMENT" bordered={false}>
                <NavLink
                    className={({isActive}) => (isActive ? "sider__nav-content-active" : "sider__nav-content")}
                    to="lab-schedule"
                >
                    <FontAwesomeIcon className="sider__nav-icon" icon={faCalendar} />
                    Lab schedule
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? "sider__nav-content-active" : "sider__nav-content")}
                    to="register-to-use"
                >
                    <FontAwesomeIcon className="sider__nav-icon" icon={faRegistered} />
                    Register to use
                </NavLink>
            </Card> 
            <Card className="sider__navbar-wrapper" title="DEVICE MANAGEMENT" bordered={false}>
                <NavLink
                    className={({isActive}) => (isActive ? "sider__nav-content-active" : "sider__nav-content")}
                    to="list-devices"
                >
                    <FontAwesomeIcon className="sider__nav-icon" icon={faList} />
                    List of devices
                </NavLink>
                <NavLink
                    className={({isActive}) => (isActive ? "sider__nav-content-active" : "sider__nav-content")}
                    to='register-to-borrow'
                >
                    <FontAwesomeIcon className="sider__nav-icon" icon={faRegistered} />
                    Register to borrow
                </NavLink>
            </Card>
        </> 
    )
}
    
