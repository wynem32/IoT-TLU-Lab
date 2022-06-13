import React from "react";
import { Menu } from 'antd' 
import './siderUser.css'
import { Link } from "react-router-dom";
import Icon, { HomeFilled, CalendarFilled, FileAddFilled, SmileFilled, ProfileFilled } from "@ant-design/icons";

export default function SiderUser () {
    return (
        <Menu
            className='sider-menu'
            mode='inline'
            // theme='dark'
        >
            <Menu.ItemGroup className='sider-menu-group' key='main' title='MAIN' >
                <Menu.Item className='sider-menu-item' key='dashboard'>
                    <Link to='lab-schedule'>
                        <Icon component={HomeFilled} />
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item className='sider-menu-item' key='profile'>
                    <Link to="lab-schedule">
                        <Icon component={SmileFilled} />
                        <span>Profile</span>
                    </Link>
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup className='sider-menu-group' key='labManagement' title='LAB MANAGEMENT'>
                <Menu.Item className='sider-menu-item' key='labSchedule'>
                    <Link to="lab-schedule">
                        <Icon component={CalendarFilled} />
                        <span>Lab Schedule</span>
                    </Link>   
                </Menu.Item>
                <Menu.Item className='sider-menu-item' key='registerToUse'>
                    <Link to="register-to-use">
                        <Icon component={FileAddFilled} />
                        <span>Register to use</span>
                    </Link> 
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup className='sider-menu-group' key='deviceManagement' title='DEVICE MANAGEMENT'>
                <Menu.Item className='sider-menu-item' key='listDevice'>
                    <Link to="list-devices">
                        <Icon component={ProfileFilled} />
                        <span>List of devices</span>
                    </Link>
                </Menu.Item>
                <Menu.Item className='sider-menu-item' key='registerToBorrow'>
                    <Link to='register-to-borrow'>
                        <Icon component={FileAddFilled} />
                        <span>Register to borrow</span>
                    </Link>
                </Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    )
}
    // <Space direction="vertical" style={{ gap: '0px' }}>
    //     <Card className="sider__navbar-wrapper" title="MAIN" bordered={false}>
    //         <p className="sider__nav-content">
    //             <FontAwesomeIcon className="sider__nav-icon" icon={faHouse} />
    //             Dashboard
    //         </p>
    //         <p className="sider__nav-content">
    //             <FontAwesomeIcon className="sider__nav-icon" icon={faAddressCard} />
    //             Profile
    //         </p>
    //     </Card> 
    //     <Card className="sider__navbar" title="LAB MANAGEMENT" bordered={false}>
    //         <Link className="sider__nav-content" to="lab-schedule">
    //             <FontAwesomeIcon className="sider__nav-icon" icon={faCalendar} />
    //             Lab schedule
    //         </Link>
    //         <Link className="sider__nav-content" to="register-to-use">
    //             <FontAwesomeIcon className="sider__nav-icon" icon={faRegistered} />
    //             Register to use
    //         </Link>
    //     </Card> 
    //     <Card className="sider__navbar" title="DEVICE MANAGEMENT" bordered={false}>
    //         <Link className="sider__nav-content" to="list-devices">
    //             <FontAwesomeIcon className="sider__nav-icon" icon={faList} />
    //             List of devices
    //         </Link>
    //         <p className="sider__nav-content">
    //             <FontAwesomeIcon className="sider__nav-icon" icon={faRegistered} />
    //             Register to borrow
    //         </p>
    //     </Card>
    // </Space> 
