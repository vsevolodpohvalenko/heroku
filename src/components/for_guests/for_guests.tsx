import {Layout, Menu, Row} from "antd";
import s from '../sidebar/sidebar.module.css'
import React, {useState} from "react";
import '../sidebar/sidebar.css'

import {HeaderC} from "../header/header";
import {FooterC} from "../footer/footer";
import {SiderDemo} from "../sidebar/sidebar";
import MainSlider from "../slider/mainSlider";

export const {Header, Content, Footer, Sider} = Layout
export const ForGuests = (props:any) => {
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
                    <MainSlider collapse={collapse}/>
                </Content>
                <FooterC/>
            </Layout>
        </Layout>
    )
}