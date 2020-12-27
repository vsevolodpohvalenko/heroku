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
                <Menu.Item key={'1'} icon={<PieChartOutlined/>}>
                    Option 1
                </Menu.Item>
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
                                return(<Menu.Item key={v.url}>{v.name}</Menu.Item>)
                            })}
                        </SubMenu>
                    )
                })}

                <SubMenu key={'sub05'} icon={<CalendarOutlined/>} title={"Schedule"}>
                    <Menu.Item key={'5'}>A week</Menu.Item>
                    <Menu.Item key={'5.5'}>B week</Menu.Item>
                </SubMenu>
                <SubMenu key={"sub1"} icon={<ReadOutlined/>} title={'User'}>
                    <Menu.Item key={'3'}>Settings</Menu.Item>
                    <Menu.Item key={'4'}>Friends</Menu.Item>
                </SubMenu>
                <SubMenu key={"sub2"} title={"Інформація"} icon={<TeamOutlined/>}>
                    <Menu.Item key={'6'}>Батькам</Menu.Item>
                    <Menu.Item key={'7'}>Учням</Menu.Item>
                </SubMenu>
                <Menu.Item key={'8'} icon={<FileDoneOutlined/>}>Вступ</Menu.Item>
                <Menu.Item key={'9'} icon={<EnvironmentOutlined/>}>Місцезнаходження</Menu.Item>
            </Menu>
        </Sider>
    )
}
