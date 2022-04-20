import React from "react";
import { Card, Image, Layout, Space } from 'antd'
import './index.css'

const { Sider } = Layout
export default function SideBar () {
    return (
        <>
            <Sider className="sider">
                <Space>
                    <Image 
                        className="sider__img" 
                        src="https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/278055269_281210144214484_4118554936736370072_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=TWTuNCGDbzwAX8EOuXu&_nc_ht=scontent.fhph1-1.fna&oh=03_AVL1lFNrQkMAeI_yRR6vSGGD_BMIBWclWDgWIuXU_Poapg&oe=628354AD"
                        preview={false}
                    />
                </Space>
                <Space className="sider__nav"> 
                    <Card title="MENU" bordered={false}>
                        <p className="sider__nav-content">Dashboard</p>
                        <p className="sider__nav-content">Profile</p>
                    </Card>
                </Space>
                <Space className="sider__nav"> 
                    <Card className="long-title" title="LAB MANAGEMENT" bordered={false}>
                        <p className="sider__nav-content">Lab schedule</p>
                        <p className="sider__nav-content">Register to use</p>
                    </Card>
                </Space>
                <Space className="sider__nav"> 
                    <Card className="long-title" title="DEVICE MANAGEMENT" bordered={false}>
                        <p className="sider__nav-content">List of devices</p>
                        <p className="sider__nav-content">Register to borrow</p>
                    </Card>
                </Space>
            </Sider>
        </>
    )
}
