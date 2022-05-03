import { Layout } from "antd";
import React from "react";
import Head from "./header/header";
import SideBar from "./sider/sider";
import './index.css'
import { Route, Routes } from "react-router-dom";
import LabSchedule from "../pages/general/Lab schedule";
import ListDevices from "../pages/general/List devices";
import CreateSchedule from "../pages/user/create schedule";

const { Sider, Header, Content } = Layout
export default function Main() {
    return (
        <Layout>
            <Sider className="sider">
                <SideBar />
            </Sider>
            <Layout>
                <Header>
                    <Head />
                </Header>
                <Content>
                    <Routes>
                        <Route path="/lab-schedule" element={ <LabSchedule/> } />
                        <Route path="/register-to-use" element={ <CreateSchedule /> } />
                        <Route path="/list-devices" element={ <ListDevices/> } />
                    </Routes>
                </Content> 
            </Layout>
        </Layout>
    )
}