import React, {Dispatch, SetStateAction} from 'react';
import {Layout, Row} from "antd";
import s from './footer.module.css'
import {GoogleSocialAuth} from "../Login/GoogleLogin";

const {Footer} = Layout

export const FooterC = (props: any) => {
    console.log(props)
    console.log(props.CurrentTheme)
    return (
        <Footer className={(props.CurrentTheme ? s.default : s.active)}
                style={{textAlign: 'center', verticalAlign: "middle", fontSize: "8px"}}>
            <GoogleSocialAuth/>
        </Footer>)
}