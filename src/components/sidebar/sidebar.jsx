import React, {useEffect} from 'react'
import {Layout, Menu, Row} from "antd";
import logo from '../../images/logo.png'
import {
    CalendarOutlined,
    PieChartOutlined,
    FileDoneOutlined,
    TeamOutlined,
    ReadOutlined,
    UsergroupAddOutlined,
    SolutionOutlined,
    EnvironmentOutlined
} from '@ant-design/icons'
import s from './sidebar.module.css'
import './sidebar.css'
import {store} from "../../store/store";
import {Link} from "react-router-dom";


export const {Header, Content, Footer, Sider} = Layout
const {SubMenu} = Menu;

// @ts-ignore
export const SiderDemo = (props) => {
    const SubMenU = store.getState().SideBar.subMenu
    const Sub = SubMenU.filter((e) => e.name !== 'default')
    const Items = store.getState().SideBar.items


    return (
        <Sider className={[(props.CurrentTheme ? "light" : s.dark), s.sider].join(" ")} collapsible
               collapsed={props.collapse}
               onCollapse={() => props.onCollapse()}>
            <div className={["logo", (props.CurrentTheme ? "light" : s.dark)].join(" ")}><img
                className={[s.logo].join(" ")} alt={"logo"} src={logo}/></div>
            <Menu theme={props.Theme} defaultSelectedKeys={['1']} mode={'inline'}>

                {Sub.map((e, i) => {
                    const items = Items.filter((item) => item.SubMenu === e.url)
                    const ComponentMap = {
                        CalendarOutlined,
                        PieChartOutlined,
                        FileDoneOutlined,
                        TeamOutlined,
                        ReadOutlined,
                        SolutionOutlined,
                        UsergroupAddOutlined,
                        EnvironmentOutlined
                    }
                    const DynamicMap = ComponentMap[e.icon]
                    debugger
                    return (
                        <SubMenu key={e.url} icon ={<DynamicMap/>} title={e.name}>
                            {items.map((v) => {
                                return(<Menu.Item key={v.url}><Link style={{textDecoration: "none", background:"none", }} to={v.link}>{v.name}</Link></Menu.Item>)
                            })}
                        </SubMenu>
                    )
                })}


            </Menu>
        </Sider>
    )
}
