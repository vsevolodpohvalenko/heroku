import React, {useState} from 'react'
import {DatePicker} from "antd";


export const DatePickerC = () => {
    const [date, setDate] = useState()
    return (
        <DatePicker size={"large"} />
    )
}