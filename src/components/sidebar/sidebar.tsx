import {Layout, Menu, Row} from "antd";
import logo from '../../images/logo.png'
import {
    CalendarOutlined,
    PieChartOutlined,
    FileDoneOutlined,
    TeamOutlined,
    ReadOutlined,
    EnvironmentOutlined
    } from '@ant-design/icons'
import s from './sidebar.module.css'
import React, {useState} from "react";
import './sidebar.css'
export const {Header, Content, Footer, Sider} = Layout
const {SubMenu} = Menu;

export const SiderDemo = (props:{CurrentTheme:boolean, onCollapse:() => void, Theme: "dark"|"light"|undefined, collapse:boolean | undefined}) => {
    return (
                   <Sider className={[(props.CurrentTheme ? "light" : s.dark), s.sider].join(" ")} collapsible collapsed={props.collapse}
                   onCollapse={() => props.onCollapse()}>
                <div className={["logo", (props.CurrentTheme ? "light" : s.dark)].join(" ")}><img
                    className={[s.logo].join(" ")} alt={"logo"} src={logo}/></div>
                <Menu theme={props.Theme} defaultSelectedKeys={['1']} mode={'inline'}>
                    <Menu.Item key={'1'} icon={<PieChartOutlined/>}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key={'2'} icon={<CalendarOutlined />} title={'Team'}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key={"sub1"} icon={<ReadOutlined />} title={'User'}>
                        <Menu.Item key={'3'}>Bill</Menu.Item>
                        <Menu.Item key={'4'}>Nick</Menu.Item>
                        <Menu.Item key={'5'}>George</Menu.Item>W
                    </SubMenu>
                    <SubMenu key={"sub2"} title={"Інформація"} icon={<TeamOutlined/>}>
                        <Menu.Item key={'6'}>Батькам</Menu.Item>
                        <Menu.Item key={'7'}>Учням</Menu.Item>
                    </SubMenu>
                    <Menu.Item key={'8'} icon={<FileDoneOutlined />}>Вступ</Menu.Item>
                    <Menu.Item key={'9'} icon={<EnvironmentOutlined />}>Місцезнаходження</Menu.Item>
                </Menu>
            </Sider>
    )
}
