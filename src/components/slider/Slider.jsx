import React, {useEffect, useState} from 'react'
import {css, jsx} from '@emotion/core'
import styled from '@emotion/styled'
import leftArrow from '../../images/back.svg'
import rightArrow from '../../images/next.svg'
import s from './slider.module.css'
import {Link} from 'react-router-dom'


export const Slider = (props) => {

    let container = 0

    window.onmousemove = function (e) {

        container = document.getElementById(`container`) && (document.getElementById(`container`).offsetWidth)/3;
    }


    useEffect(() => {
        container = document.getElementById(`container`) && (document.getElementById(`container`).offsetWidth)/3
    },)
    const getWidth = () => container;
    const [state, setState] = useState({
        translate: 0,
        transition: 0.80,
        activeIndex: 0,
    })
    window.addEventListener('resize', function(event){
    container = (document.getElementById(`container`).offsetWidth)/3;
            setState({
            translate: 0,
            transition: 0.80,
            activeIndex: 0
        });
        container = 0
});
    let {transition, translate, activeIndex} = state
    useEffect(() => {
        setState({
            translate: 0,
            transition: 0.80,
            activeIndex: 0
        });
        container = 0
    }, [props.collapse])


    const nextSlide = () => {
        if (activeIndex === (props.Newslides.length-3)) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }


        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (props.Newslides.length-3) * getWidth(),
                activeIndex: (props.Newslides.length-3)
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
    }
    return (
        <div id={'container'} css={SliderCSS}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * props.Newslides.length}
            >
                {props.Newslides.map((slide, i) => {

                    const wrapper = props.Articles.filter((e) => e.News === slide.url)
                    return (<Slide getWidth={getWidth} key={slide.title + i} wrapper={wrapper[0]} content={slide} i={i}/>)
                })}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide}/>
            <Arrow direction="right" handleClick={nextSlide}/>

            {/*<Dots container={container} slides={props.slides} activeIndex={activeIndex}/>*/}
        </div>
    )
};
const SliderCSS = css`  
  position: relative;
  height: 60vh;
  width:;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 768px) {
        height: 30vh;
}
`

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width = ${props => props.width}px;
    display: flex;
`;

const Slide = ({content, wrapper, i, getWidth}) => (
    <div
        css={css`
    height: 100%;
    color: white;
    border-radius: 10px;
    text-align: center;
    min-width: 31%;
    max-width: 32%;
    margin: 1%;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${wrapper.attachment}');
     background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    `}
    ><div className={s.news_title}><Link className={s.link} to={`/news/${i+1}`}><h5>{content.title}</h5>
        <p>{wrapper.mainText.slice(1,72).toLowerCase() + "..."}</p></Link></div></div>
)


const Arrow = ({direction, handleClick}) => (
    <div
        onClick={handleClick}
        css={css`
      display: flex;    
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 40px;
      width: 40px;
      justify-content: center;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        height: 30px;
        width: 30px;
        &:focus {
          outline: 0;
          
        }
      }
    `}
    >
        {direction === 'right' ? <img src={rightArrow}/> : <img src={leftArrow}/>}
    </div>
)

const Dot = ({active}) => (
    <span  css={css`
    padding: 5px;
    margin-right: 5px;
    border-radius: 50%;
    cursor: pointer;
    background: ${active ? 'white' : '#4f4f4f'}
    `}/>
);
const Dots = ({slides, activeIndex, container}) => (
    <div className={[].join(" ")} css={css`
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `}>
        {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i}/>
        ))}
    </div>
);

