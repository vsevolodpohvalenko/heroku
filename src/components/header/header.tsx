import React, {Dispatch, SetStateAction} from 'react';
import s from '../sidebar/sidebar.module.css'


import {Layout} from "antd";
import {Switch} from "antd/es";

export const {Header} = Layout
export const HeaderC = (props: { CurrentTheme: boolean, collapse: boolean | undefined, setTheme: Dispatch<SetStateAction<"dark" | "light" | undefined>>, Theme: "dark" | "light" | undefined }) => {
    const Switcher = () => {
        return (
            <Switch
                checked={props.Theme === "dark"}
                onChange={() => {
                    props.setTheme(props.Theme === "dark" ? "light" : "dark")
                }}
                checkedChildren={"Dark"}
                unCheckedChildren={"Light"}
            />
        )
    }
    return (
        <Header className={['site-layout-background', (props.CurrentTheme ? "light" : s.dark)].join(" ")}
                style={{padding: 0}}>
            <div className={s.name} css={{textAlign: "start"}}>
                    <li className={s.li}>
                        Kherson Academic Lyceum
                    </li>
                <div className={[s.switcher, (!props.collapse && s.active)].join(" ")}>
                <Switcher/>
                </div>
            </div>

        </Header>
)
}