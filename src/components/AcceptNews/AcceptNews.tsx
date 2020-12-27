import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetArticleR, GetNewsR} from "../../store/news_reducer";
import {RecArticles, RecNews} from "../../store/Selector/News_Selectors";
import {Skeleton, Switch, Typography} from "antd";
import {CheckOutlined, CloseOutlined} from '@ant-design/icons'
import s from './AcceptedFiles.module.css'
import YouTube from 'react-youtube';
import {SuggestNewsApi} from "../../api/SuggestNews_api";
import {store} from "../../store/store";

export const NewsCatalog = () => {
    const dispatch = useDispatch()
    const news = useSelector(RecNews)
    const articles = useSelector(RecArticles)
    let CurrentArticles = (news: string) => {
        return articles.filter((e: { News: string }) => e.News === news)
    };
    useEffect(() => {
        dispatch(GetArticleR())
        dispatch(GetNewsR())
    }, [])
    const OnClick = (id: number) => {
        
        let ChangedNews = news[id]
        ChangedNews.active = !ChangedNews.active
        SuggestNewsApi.putNews(id + 1, ChangedNews).then(r => store.dispatch(GetNewsR()))
    }
    return (
        <div>
            {news.map((el: { title: string, url: string, titleFont: string, titleSize: 2 | 1 | 5 | 3 | 4 | undefined, date: string, active: boolean }, i: number) => (
                <div>
                    <p className={s.date}>{el.date && el.date.slice(0, 10)}</p>
                    <Switch style={{float: 'left', margin: '20px'}} size={'default'}
                            checkedChildren={<CheckOutlined/>}
                            unCheckedChildren={<CloseOutlined/>}
                            defaultChecked={el.active}
                            onClick={() => OnClick(i)}
                    />
                    <Typography.Title level={el.titleSize}
                                      css={{fontFamily: `${el.titleFont}`}}>{el.title}</Typography.Title>
                    {
                        CurrentArticles(el.url).map((article: any) => (
                            <div className={s.Video}>
                                <section className={s.channel}>

                                    <div>
                                        <h2>{article.subTitle}</h2>
                                        <div className={[s.circle, s.circle1].join(" ")}>
                                        <img src={article.attachment}/>
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


export const YoutubeClass = (props: any) => {
    const onReady = (event: any) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    debugger
    const videoId = props.videoId
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    // @ts-ignore
    return <div style={{display: "block"}}><YouTube videoId={videoId} opts={opts} onReady={onReady}/></div>;

}
