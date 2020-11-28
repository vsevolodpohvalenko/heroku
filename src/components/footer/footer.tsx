import React, {Dispatch, SetStateAction} from 'react';
import {Layout, Row} from "antd";
import s from './footer.module.css'
const {Footer} = Layout

export const FooterC = (props: any) => {
    console.log(props)
    console.log(props.CurrentTheme)
        return (
            <Footer  className={(props.CurrentTheme ? s.default : s.active)} style={{textAlign: 'center', verticalAlign: "middle", fontSize: "8px"}}>Design 2020 by Pokhvalenko
                Vsevolod</Footer>)
    }