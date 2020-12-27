import {Layout, Menu, Row} from "antd";
import s from '../sidebar/sidebar.module.css'
import React, {useEffect, useState} from "react";
import '../sidebar/sidebar.css'

import {HeaderC} from "../header/header";
import {FooterC} from "../footer/footer";
import {SiderDemo} from "../sidebar/sidebar";
import MainSlider from "../slider/mainSlider";
import {store} from "../../store/store";
import {getArticleR, getNewsR, getNewsSlidesR} from "../../store/slider_reducer";
import {GoogleSocialAuth} from "../Login/GoogleLogin";
import {GetItemsR, GetSubMenuR} from "../../store/SideBar_redux";


export const {Header, Content, Footer, Sider} = Layout
export const ForGuests = (props: any) => {
    useEffect(() => {
        store.dispatch(getNewsSlidesR())
        store.dispatch(getNewsR())
        store.dispatch(getArticleR())
        store.dispatch(GetSubMenuR())
        store.dispatch(GetItemsR())
    }, [])
    const [collapse, setCollapse] = useState<boolean | undefined>(true)
    const [Theme, setTheme] = useState<"dark" | "light" | undefined>('light')
    const onCollapse = () => {
        setCollapse(!collapse)
    }
    let CurrentTheme = Theme !== "dark";
    return (
        <Layout className={(CurrentTheme ? "light" : s.dark)} style={{minHeight: "100vh"}}>
            <SiderDemo onCollapse={onCollapse} CurrentTheme={CurrentTheme} Theme={Theme} collapse={collapse}/>
            <Layout className={'site-layout'}>
                <HeaderC collapse={collapse} CurrentTheme={CurrentTheme} setTheme={setTheme} Theme={Theme}/>
                <Content style={{margin: '0, 16px'}}>
                    <MainSlider CurrentTheme={CurrentTheme} collapse={collapse}/>
                    <GoogleSocialAuth/>

                </Content>
                <FooterC CurrentTheme={CurrentTheme}/>
            </Layout>
        </Layout>
    )
}