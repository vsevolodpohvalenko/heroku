import {Divider, Layout, Spin, Typography} from "antd";
import s from '../sidebar/sidebar.module.css'
import React, {useEffect, useState} from "react";
import '../sidebar/sidebar.css'
import {HeaderC} from "../header/header";
import {FooterC} from "../footer/footer";
import {SiderDemo} from "../sidebar/sidebar";
import MainSlider from "../slider/mainSlider";
import {AppStateType, store} from "../../store/store";
import {getArticleR, getNewsR, getSlidesR} from "../../store/slider_reducer";
import {GetItemsR, GetSubMenuR} from "../../store/SideBar_redux";
import {connect} from "react-redux";
import {GetLinkedText, GetYoutube} from "../../store/news_reducer";
import Youtube from "../youtube/youtube";
import {StarOutlined} from "@ant-design/icons"


export const {Header, Content, Footer, Sider} = Layout


export const ForGuests = (props: any) => {
    useEffect(() => {
        store.dispatch(getSlidesR())
        store.dispatch(getNewsR())
        store.dispatch(getArticleR())
        store.dispatch(GetSubMenuR())
        store.dispatch(GetItemsR())
        store.dispatch(GetLinkedText())
        store.dispatch(GetYoutube())

    }, [])
    const [collapse, setCollapse] = useState<boolean | undefined>(true)
    const [Theme, setTheme] = useState<"dark" | "light" | undefined>('light')
    const onCollapse = () => {
        setCollapse(!collapse)
    }
    let CurrentTheme = Theme !== "dark";
    debugger
    const CurrentLinkText = props.linkedText.filter((e: any) => e.page === "http://127.0.0.1:8000/rest/Page/1/")
    return (
        <Layout className={(CurrentTheme ? "light" : s.dark)} style={{minHeight: "100vh"}}>
            <SiderDemo onCollapse={onCollapse} CurrentTheme={CurrentTheme} Theme={Theme} collapse={collapse}/>
            <Layout className={'site-layout'}>
                <HeaderC collapse={collapse} CurrentTheme={CurrentTheme} setTheme={setTheme} Theme={Theme}/>
                <Content style={{margin: '0, 16px'}}>
                    <MainSlider CurrentTheme={CurrentTheme} collapse={collapse}/>
                    <Divider plain><Typography.Title level={5}>Важливо!</Typography.Title></Divider>
                    {CurrentLinkText.map((text: any) => (
                        <div style={{height: '50px'}}>

                           <StarOutlined style={{color: "gold"}} /> <a className={s.link} href={text.link} target={'_blank'}>{text.title}</a><StarOutlined style={{color: "gold"}} />
                        </div>
                    ))}
                    <Divider plain><Typography.Title level={5}>Важливо!</Typography.Title></Divider>

                    <Youtube/>

                </Content>
                <FooterC CurrentTheme={CurrentTheme}/>
            </Layout>
        </Layout>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        subMenu: state.SideBar.subMenu,
        menuItems: state.SideBar.items,
        linkedText: state.News.linkedText,
        items: state.News.items,
        articles: state.Slider.articles,
        news: state.Slider.news
    }
}
export default connect(mapStateToProps, {})(ForGuests)