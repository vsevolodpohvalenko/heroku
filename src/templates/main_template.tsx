import {Layout, Menu, Row, Spin} from "antd";
import s from '../components/sidebar/sidebar.module.css'
import React, {useState, useEffect} from "react";
import '../components/sidebar/sidebar.css'
import {HeaderC} from "../components/header/header";
import {FooterC} from "../components/footer/footer";
import {SiderDemo} from "../components/sidebar/sidebar";
import {css} from "@emotion/core";
import {AppStateType, store} from "../store/store";
import {connect} from "react-redux";
import {ForGuests} from "../components/for_guests/for_guests";
import {getArticleR, getNewsR, getNewsSlidesR, getSlidesR} from "../store/slider_reducer";
import {GetItemsR, GetSubMenuR} from "../store/SideBar_redux";

export const {Header, Content, Footer, Sider} = Layout
export const MainTemplate = (props: any) => {
    useEffect(() => {

        store.dispatch(GetSubMenuR())
        store.dispatch(GetItemsR())
    }, [])
    const [collapse, setCollapse] = useState<boolean | undefined>(true)
    const [Theme, setTheme] = useState<"dark" | "light" | undefined>('light')
    const onCollapse = () => {
        setCollapse(!collapse)
    }
    let CurrentTheme = Theme !== "dark";
    if (props.subMenu.length < 1) return (<div><Spin size="large"/></div>)
    else
    return (
        <Layout className={(CurrentTheme ? "light" : s.dark)} style={{minHeight: "100vh"}}>
            <SiderDemo onCollapse={onCollapse} CurrentTheme={CurrentTheme} Theme={Theme} collapse={collapse}/>
            <Layout className={'site-layout'}>
                <HeaderC collapse={collapse} CurrentTheme={CurrentTheme} setTheme={setTheme} Theme={Theme}/>
                <Content>
                    {props.children}
                </Content>
                <FooterC CurrentTheme={CurrentTheme}/>
            </Layout>
        </Layout>
    )
}
const mapStateToProps = (state: AppStateType) => {
    return {
        subMenu: state.SideBar.subMenu,
        menuItems: state.SideBar.items
    }
}
export default connect(mapStateToProps, {})(MainTemplate)