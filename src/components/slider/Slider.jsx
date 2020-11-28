import React, {useEffect, useState} from 'react'
import {css, jsx} from '@emotion/core'
import styled from '@emotion/styled'
import leftArrow from '../../images/back.svg'
import rightArrow from '../../images/next.svg'
import s from './slider.module.css'



export const Slider = (props) => {
    debugger
    let container = 0

    window.onmousemove = function (e) {

        container = (document.getElementById(`container`).offsetWidth)/3;
    }


    useEffect(() => {
        container = (document.getElementById(`container`).offsetWidth)/3
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
                {props.Newslides.map((slide, i) => (
                    <Slide key={slide.title + i} content={slide}/>
                ))}
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
  width:100%;
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

const Slide = ({content}) => (
    <div
        css={css`
      height: 100%;
      color: white;
      border-radius: 10px;
      text-align: center;
      min-width: 31%;
      margin: 1%;
      border-radius: 2  %;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${content.photo}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
    ><div className={s.news_title}><h5>{content.title}</h5>
        <p>{content.text}(</p></div></div>
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

