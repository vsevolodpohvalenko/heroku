import React, {useEffect, useState} from 'react';
import {AppStateType, store} from "../../store/store";
import {getScheduleR} from "../../store/schedule_reducer";
import {connect} from "react-redux";
import {Document, Page, pdfjs} from 'react-pdf';
import  {Button, Tooltip} from 'antd';
import {Slider} from 'antd'
import s from './schedule.module.css'
import './schedule.css'
import {css} from "@emotion/core";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
const url =
    "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"



function TestPDF(props) {
    const marks = {
        1: "8 grades",
        2: '9th grades',
        4: "10th grades",
        5: "11th grades"
    }
    let container = 0

    window.onmousemove = function (e) {
        debugger
        container = (document.getElementById(`container`).offsetWidth);
    }

    useEffect(() => {
        container = (document.getElementById(`container`).offsetWidth)
    })
    window.addEventListener('resize', function(event){
    container = (document.getElementById(`container`).offsetWidth);

        container = 0
});
    useEffect(() => {
        store.dispatch(getScheduleR())
    }, [])


    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);

    /*To Prevent right click on screen*/
    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    /*When document gets loaded successfully*/
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }
    const PDF_doc =  css`
   .react-pdf__Page__canvas{
       display: inline-flex !important;
 `

    console.log(container)
    return (
        <>
            <div  id={"container"} className={["main"].join(" ")}>
                <Slider marks={marks} defaultValue={1} max={7} onChange={(e) => {
                    setPageNumber(e)
                }}/>
                <div css={PDF_doc}>
                    <Document

                        file={props.schedule && props.schedule[0].time_tableA}
                        onLoadSuccess={onDocumentLoadSuccess}

                    >
                        <Page pageNumber={pageNumber}/>
                    </Document>
                </div>
                <div>
                    <div className="pagec">
                        Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                    </div>
                    <div className="Previous">
                        <Tooltip title="Next">
                        <Button
                            icon={<LeftOutlined/>}
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                            className="Pre"
                            type={"primary"}
                        />
                        </Tooltip>
                        <Tooltip title="Next">
                        <Button
                            type={"primary"}
                            icon={<RightOutlined />}
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                            className="Pre"
                        /></Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
}




const mapStateToProps = (state) => ({
    schedule: state.TimeTable.schedule
})

export default connect(mapStateToProps, {})(TestPDF)