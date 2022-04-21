import React from "react";
import { Card, Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faHouse, faAddressCard, faCalendar, faRegistered, faList  } from '@fortawesome/free-solid-svg-icons'
import './siderUser.css'

export default function SiderUser () {
    return (
        <>
            <Space direction="vertical" style={{ gap: '0px' }}>
                <Card className="sider__navbar-wrapper" title="MENU" bordered={false}>
                    <p className="sider__nav-content">
                        <FontAwesomeIcon className="sider__nav-icon" icon={faHouse} />
                        Dashboard
                    </p>
                    <p className="sider__nav-content">
                        <FontAwesomeIcon className="sider__nav-icon" icon={faAddressCard} />
                        Profile
                    </p>
                </Card> 
                <Card className="sider__navbar" title="LAB MANAGEMENT" bordered={false}>
                    <p className="sider__nav-content">
                        <FontAwesomeIcon className="sider__nav-icon" icon={faCalendar} />
                        Lab schedule
                    </p>
                    <p className="sider__nav-content">
                        <FontAwesomeIcon className="sider__nav-icon" icon={faRegistered} />
                        Register to use
                    </p>
                </Card> 
                <Card className="sider__navbar" title="DEVICE MANAGEMENT" bordered={false}>
                    <p className="sider__nav-content">
                        <FontAwesomeIcon className="sider__nav-icon" icon={faList} />
                        List of devices
                    </p>
                    <p className="sider__nav-content">
                        <FontAwesomeIcon className="sider__nav-icon" icon={faRegistered} />
                        Register to borrow
                    </p>
                </Card>
            </Space> 
        </>
    )
}
