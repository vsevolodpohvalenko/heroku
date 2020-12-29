import React, {FormEvent, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import s from './suggestNews.module.css'
import {InformationApi} from "../../api/Information_api";
import {Form, Input, Button, Spin, Select, message} from 'antd';
import {MinusOutlined, InboxOutlined, YoutubeOutlined, SmileOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../Schedule/schedule.css'
import Dropzone from 'react-dropzone'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type AttachmentFile = { lastModified: number, lastModifiedDate: string, preview: string, name: string, path: string, size: number, type: string, webkitRelativePath: string }

type ArticleType = { [index: string]: string | AttachmentFile, subTitle: string, articleText: string, attachment: AttachmentFile, fontForText: string, fontForTitle: string, link: string }


export const SuggestNews = (props: any) => {
    const [title, setTitle] = useState<string>('');
    const [titleFont, setTitleFont] = useState<string>('');
    const [titleSize, setTitleSize] = useState<any>('');
    const [Date, setDate] = useState<any>('')
    const [article, setArticle] = useState<Array<ArticleType>>([{
        subTitle: "",
        articleText: "",
        attachment: {
            lastModified: 0,
            lastModifiedDate: "",
            name: "",
            path: "",
            size: 0,
            type: "",
            preview: "",
            webkitRelativePath: ""
        },

        fontForText: "Poppins",
        fontForTitle: "Poppins",
        link: ""
    }])


    const HandleSubmit = () => {
        debugger
        let form_data = new FormData();
        form_data.append('title', title);
        form_data.append('titleFont', titleFont);
        form_data.append('titleSize', titleSize)
        form_data.append('date', Date)

        InformationApi.postNews(form_data).then(r => {
                article.map((art) => {
                    debugger
                    let form_data = new FormData();
                    form_data.append('subTitle', art.subTitle);
                    form_data.append('mainText', art.articleText);

                    // @ts-ignore
                    form_data.append('attachment', art.attachment[0], art.attachment[0].name);
                    form_data.append('fontForText', art.fontForText);
                    form_data.append('fontForTitle', art.fontForTitle);
                    form_data.append('videoLink', art.link);
                    form_data.append("News", r.data.url)
                    InformationApi.postArticle(form_data)
                })
            }
        )


    };
    if (!localStorage.getItem('key')) return (<div><Spin size="large"/></div>)

    const AddArticle = () => {
        setArticle([...article, {
            subTitle: "",
            articleText: "",
            attachment: {
                lastModified: 0,
                lastModifiedDate: "",
                name: "",
                preview: "",
                path: "",
                size: 0,
                type: "",
                webkitRelativePath: ""
            },
            youtubeBackground: {
                lastModified: 0,
                lastModifiedDate: "",
                name: "",
                preview: "",
                path: "",
                size: 0,
                type: "",
                webkitRelativePath: ""
            },
            fontForText: "Poppins",
            fontForTitle: "Poppins",
            link: ""
        }])
        console.log([...article, {
            subTitle: "",
            articleText: "",
            attachment: {},
            youtubeBackground: {},
            fontForText: "Poppins",
            fontForTitle: "Poppins",
            link: ""
        }])
    }

    const OnChangeValue = (e: { target: { name: string, value: string } }, index: number) => {
        debugger
        const {name, value} = e.target
        const NewArticle = [...article]
        NewArticle[index][name] = value
        setArticle(NewArticle)
    }
    const OnChangeValueI = (e: string, index: number, name: string) => {
        debugger
        const NewArticle = [...article]
        NewArticle[index][name] = e
        setArticle(NewArticle)
    }

    const onDropCustom = (acceptedFiles: any, index: number, name: string) => {
        debugger
        const NewArticle = [...article]
        acceptedFiles.map((file: any) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }))
        NewArticle[index][name] = acceptedFiles
        setArticle(NewArticle)
    }

    const OnDelete = (index: number) => {
        setArticle(article.filter((el, i) => i != index))
        console.log(article.filter((el, i) => i != index))

    }
    const ThumbNail = (props: { index: number, name: string }) => {
        // @ts-ignore
        const preview = article[props.index][props.name][0].preview
        return (
            <img style={{width: 'auto', height: 100}} alt={"ThumbNail"} src={preview}/>
        )
    }
    return (
        <div>
            <Form layout={"horizontal"} name={"nest-message"}
                  style={{margin: 20, background: "white", borderRadius: 10, padding: 10}}
            >
                <Form.Item name={"Header"} label={"Header"} rules={[
                    {
                        required: true,
                    }
                ]}>
                    <Input value={props.title} onChange={(e) => setTitle(e.target.value)} name={"title"}/>

                </Form.Item>

                <div className={s.fonts}>
                    <Form.Item style={{width: '100px'}}  label={"Font for Title"}>
                        <Select onChange={e => setTitleFont(e)}
                                defaultValue={titleFont}>
                            <Select.Option value="Poppins">Poppins</Select.Option>
                            <Select.Option value="Montserrat">Montserrat</Select.Option>
                            <Select.Option value="Calibri">Calibri</Select.Option>
                            <Select.Option value="Arial">Arial</Select.Option>
                        </Select>
                    </Form.Item> <Form.Item style={{width: '100px'}} label={"Font for Text"}>
                    <Select onChange={e => setTitleSize(e)} defaultValue={titleSize}>
                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="2">2</Select.Option>
                        <Select.Option value="3">3</Select.Option>
                        <Select.Option value="4">4</Select.Option>
                        <Select.Option value="5">5</Select.Option>
                    </Select>
                </Form.Item>
                </div>

                <Form.Item style={{ maxWidth: '100px',  display: 'contents'}}   label={"Choose date:"}>
                    <DatePicker  className={s.date} selected={Date} onChange={date => setDate(date)}/>
                </Form.Item>
            </Form>
            {article.map((art, index) => (
                <Form style={{margin: 20, background: "white", borderRadius: 10, padding: 20}}> <Form.Item
                    label={"Subtitle"}>
                    <Input name={"subTitle"} value={art.subTitle} onChange={e => OnChangeValue(e, index)}
                           style={{width: '80%'}}/>
                </Form.Item>
                    <div className={s.fonts}>
                        <Form.Item style={{width: '100px'}} label={"Font for Title"}>
                            <Select onChange={e => OnChangeValueI(e, index, "fontForTitle")}
                                    defaultValue={art.fontForTitle}>
                                <Select.Option value="Poppins">Poppins</Select.Option>
                                <Select.Option value="Montserrat">Montserrat</Select.Option>
                                <Select.Option value="Calibri">Calibri</Select.Option>
                                <Select.Option value="Arial">Arial</Select.Option>
                            </Select>
                        </Form.Item> <Form.Item style={{width: '100px'}}  label={"Font for Text"}>
                        <Select onChange={e => OnChangeValueI(e, index, "fontForText")} defaultValue={art.fontForText}>
                            <Select.Option value="Poppins">Poppins</Select.Option>
                            <Select.Option value="Montserrat">Montserrat</Select.Option>
                            <Select.Option value="Calibri">Calibri</Select.Option>
                            <Select.Option value="Arial">Arial</Select.Option>
                        </Select>
                    </Form.Item>
                    </div>
                    <Form.Item name={"Text"} label={"Text"} rules={[
                        {
                            required: true,
                        }
                    ]}>
                        <Input.TextArea name={"articleText"} value={art.articleText}
                                        onChange={e => OnChangeValue(e, index)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name={"Attachments"} label={"Attachments"} rules={[
                            {
                                required: true,
                            }
                        ]}>
                            <div className={s.dropzone}>
                                <Dropzone onDrop={(acceptedFiles) => onDropCustom(acceptedFiles, index, 'attachment')}>
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p className={"ant-upload-drag-icon"}><InboxOutlined/></p>
                                                <p className="ant-upload-text">Drag 'n' drop some files here, or click
                                                    to select files</p>
                                            </div>
                                        </section>
                                    )}

                                </Dropzone>
                            </div>
                        </Form.Item>

                    </Form.Item>
                    <Form.Item name={"Youtube Link"} label={"Youtube Link"}>
                        <Input name={"link"} value={art.articleText}
                               onChange={e => OnChangeValue(e, index)}
                        />
                    </Form.Item>

                    <div className={s.fonts}>
                        {index == article.length - 1 && (
                            <Button type={"dashed"} onClick={AddArticle}> Add an article </Button>)}
                        {index != 0 && (
                            <Button type="primary" danger onClick={() => OnDelete(index)} icon={<MinusOutlined/>}
                            />)}
                    </div>
                </Form>))}

            <Button type={"primary"} onClick={HandleSubmit} htmlType={"submit"}>Submit!</Button>
        </div>
    )
}


const Article = (props: any) => {
    return (
        <Form layout={"horizontal"} name={"nest-message"}
              style={{margin: 20, background: "white", borderRadius: 10, padding: 10}}
              onFinish={() => props.HandleSubmit()}>
            <Form.Item name={"Header"} label={"Header"} rules={[
                {
                    required: true,
                }
            ]}>
                <Input value={props.title} onChange={(e) => props.setTitle(e.target.value)} name={"title"}/>
            </Form.Item>

        </Form>
    )
}

