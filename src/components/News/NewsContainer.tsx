import React, {useEffect} from 'react'
import {AppStateType} from "../../store/store";

import {connect, useDispatch} from "react-redux";
import {withRouter} from "react-router";
import s from "../AcceptNews/AcceptedFiles.module.css";
import { Typography} from "antd";

import {GetArticleR, GetNewsR} from "../../store/news_reducer";
import {YoutubeClass} from "../AcceptNews/AcceptNews";

export const NewsContainer = (props: any) => {
    debugger
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetArticleR())
        dispatch(GetNewsR())
    }, [])
      const actualNews = props.news.filter((e: any, i:number) => i+1 == props.match.params.id)
        let CurrentArticles = (news: string) => {
        return props.articles.filter((e: { News: string }) => e.News === news)
    };
    return(
        <div>
            {actualNews.length > 0 && actualNews.map((el: { title: string, url: string, titleFont: string, titleSize: 2 | 1 | 5 | 3 | 4 | undefined, date: string, active: boolean }) => (
                <div>
                    <p className={s.date}>{el.date && el.date.slice(0, 10)}</p>
                    <Typography.Title level={el.titleSize}
                                      css={{fontFamily: `${el.titleFont}`}}>{el.title}</Typography.Title>
                    {
                        CurrentArticles(el.url).map((article: any) => (
                            <div className={s.Video}>
                                <section className={s.channel}>

                                    <div>
                                        <h2>{article.subTitle}</h2>
                                        <div className={[s.circle, s.circle1].join(" ")}>
                                        <img src={article.attachment} alt={'image'}/>
                                    </div>
                                        <p>{article.mainText}</p>
                                    </div>
                                </section>
                                {article.videoLink && <div >

                                    <YoutubeClass videoId={article.videoLink}/></div>}

                            </div>))
                    }

                </div>

            ))}

        </div>
    )

}

const mapStateToProps = (state: AppStateType) => {
    return{
        news : state.News.news,
        articles : state.News.articles
    }
}

export const NewsWithRouter = withRouter(connect(mapStateToProps, {})(NewsContainer));