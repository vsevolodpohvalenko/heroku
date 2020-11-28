import {Layout, Menu, Row} from "antd";
import s from '../components/sidebar/sidebar.module.css'
import React, {useState} from "react";
import '../components/sidebar/sidebar.css'
import {HeaderC} from "../components/header/header";
import {FooterC} from "../components/footer/footer";
import {SiderDemo} from "../components/sidebar/sidebar";
import {css} from "@emotion/core";

export const {Header, Content, Footer, Sider} = Layout
export const MainTemplate = (props: any) => {
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
                <Content>
                    {props.children}
                </Content>
                <FooterC CurrentTheme={CurrentTheme}/>
            </Layout>
        </Layout>
    )
}
