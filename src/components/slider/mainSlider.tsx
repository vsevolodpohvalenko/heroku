import React, {useEffect} from "react";
import {Slider} from "./Slider";
import {Carousel} from 'antd';
import 'antd/dist/antd.css';
import s from './slider.module.css'
import {AppStateType, store} from '../../store/store'
import {connect} from "react-redux";
import {getNewsSlidesR, getSlidesR} from "../../store/slider_reducer";

const MainSlider = ({collapse, CurrentTheme, slides, getSlidesR, newsSlides, getNewsSlidesR}: any) => {
debugger

    useEffect(() => {
        getSlidesR()
    }, [])

    return   (
        <div className={(CurrentTheme ? "default" : "active")}>

            <Carousel autoplay effect="fade">
                {slides.map((i: any) => (
                    <div><img className={s.slide} src={i.slide}/></div>))}
            </Carousel>,
            <Slider collapse={collapse} Newslides={newsSlides}/>
        </div>
    )}
const mapStateToProps = (state: AppStateType) => ({
    slides: state.Slider.slides,
    newsSlides: state.Slider.newsSlides
})

export default connect(mapStateToProps, {getSlidesR, getNewsSlidesR})(MainSlider)
