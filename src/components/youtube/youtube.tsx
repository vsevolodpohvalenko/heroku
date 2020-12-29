import React, {useEffect} from 'react'
import s from "../sidebar/sidebar.module.css";
import {AppStateType} from "../../store/store";
import {connect} from "react-redux";
import {YoutubeAPI} from "../../api/api";


const Youtube = (props: any) => {
    useEffect(() => {
        YoutubeAPI()
    })
    return(
        <div className={s.container}>
                        {props.items.map((item: any) => {
                            const {id, snippet = {}} = item
                            const {title, thumbnails = {}, resourceId} = snippet
                            const {medium = {}} = thumbnails

                            return (

                                        <a key={id} target={'_blank'} href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                                        <div className={s.card}>
                                            <div className={s.imgBx}>
                                                <img  width={medium.width} height={medium.height}
                                                     src={medium.url} alt={''}/>
                                            </div>
                                            <div className={s.content}>
                                                {title}
                                            </div>
                                        </div>
                                            </a>
                            )})}
                            </div>
    )
}

const mapStateToProps = (state: AppStateType) =>{
    return{
        items: state.News.items
    }
}

export default connect(mapStateToProps, {})(Youtube)