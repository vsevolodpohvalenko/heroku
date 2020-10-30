import React, {useEffect} from "react";
import {Slider} from "./Slider";
import {Carousel} from 'antd';
import 'antd/dist/antd.css';
import s from './slider.module.css'
import {AppStateType, store} from '../../store/store'
import {css} from "@emotion/core";
import {connect} from "react-redux";
import {getSlidesR} from "../../store/slider_reducer";

const MainSlider = ({collapse, slides, getSlidesR}: any) => {
    const images = [
        'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg',
        'https://cosmosmagazine.com/wp-content/uploads/2020/02/190624_sea_otters_full-1440x863.jpg',
        'https://www.hakaimagazine.com/wp-content/uploads/header-sea-otter-reintroduction-1.jpg',
        'https://cms.qz.com/wp-content/uploads/2020/09/otter-e1600802221972.jpg?quality=75&strip=all&w=1600&h=900&crop=1',

    ]
    useEffect(() => {
        getSlidesR()
    }, [])
    return (
        <div>
            <Carousel  autoplay effect="fade">
                {slides.map((i:any) => (
                    <div><img className={s.slide} src={i.slide}/></div>))}



            </Carousel>,
            <Slider collapse={collapse} slides={images}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    slides: state.Slider.slides
})

export default connect(mapStateToProps, {getSlidesR})(MainSlider)
