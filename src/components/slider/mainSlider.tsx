import React, {useEffect} from "react";
import {Slider} from "./Slider";
import {Carousel} from 'antd';
import 'antd/dist/antd.css';
import s from './slider.module.css'
import {AppStateType, store} from '../../store/store'
import {connect} from "react-redux";
import {getArticleR, getNewsR,} from "../../store/slider_reducer";
import {getArticle} from "../../api/Slider_api";

const MainSlider = ({collapse, CurrentTheme, slides, ArticleSlides, newsSlides}: any) => {

    return   (
        <div className={(CurrentTheme ? "default" : "active")}>

            <Carousel autoplay effect="fade">
                {slides.map((i: any) => (
                    <div><img className={s.slide} src={i.slide}/></div>))}
            </Carousel>
            { ArticleSlides.length > 0  && newsSlides.length > 0 && <Slider collapse={collapse} Articles={ArticleSlides} Newslides={newsSlides}/>}
        </div>
    )}
const mapStateToProps = (state: AppStateType) => ({
    slides: state.Slider.slides,
    newsSlides: state.Slider.news.filter((e:any) => e.active === true),
    ArticleSlides: state.Slider.articles
})

export default connect(mapStateToProps, {getArticleR, getNewsR})(MainSlider)
