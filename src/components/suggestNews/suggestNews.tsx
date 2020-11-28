import React, {FormEvent, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import s from './suggestNews.module.css'
import {SuggestNewsApi} from "../api/SuggestNews_api";
import {Form, Input, Button, Spin, Select, message} from 'antd';
import {MinusOutlined, InboxOutlined, YoutubeOutlined} from '@ant-design/icons';
import '../Schedule/schedule.css'
import Dropzone from 'react-dropzone'

export const SuggestNews = (props: any) => {
    const [title, setTitle] = useState<string>('');
    const [mainText, setMainText] = useState<string>('');
    const [Attachment, setAttachment] = useState<any>('');
    const [article, setArticle] = useState([{
        index: 0,
        subTitle: "",
        articleText: "",
        attachment: "",
        fontForText: "Poppins",
        fontForTitle: "Poppins",
        link: ""
    }])
    const onDrop = useCallback(acceptedFiles => {
        debugger
        setAttachment(acceptedFiles.map((file: any) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))
        )

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const HandleSubmit = () => {
        let form_data = new FormData();
        form_data.append('title', title);
        form_data.append('mainText', mainText);
        form_data.append('attachments', Attachment[0], Attachment[0].name);
        SuggestNewsApi.postNews(form_data)
        props.history.push('/')

    };
    if (!localStorage.getItem('key')) return (<div><Spin size="large"/></div>)

    const AddArticle = () => {
        setArticle([...article, {
            index: article[article.length - 1].index + 1,
            subTitle: "",
            articleText: "",
            attachment: "",
            fontForText: "Poppins",
            fontForTitle: "Poppins",
            link: ""
        }])
        console.log([...article, {
            index: article[article.length - 1].index + 1,
            subTitle: "",
            articleText: "",
            attachment: "",
            youtubeBackground: "",
            fontForText: "Poppins",
            fontForTitle: "Poppins",
            link: ""
        }])
    }

    const OnChangeValue = (e: { target: { name: string, value: string } }, index: number) => {
        debugger
        const {name, value} = e.target
        const NewArticle = [...article]
        // @ts-ignore
        NewArticle[index][name] = value
        setArticle(NewArticle)
    }
    const OnChangeValueI = (e: string, index: number, name: string) => {
        debugger
        const NewArticle = [...article]
        // @ts-ignore
        NewArticle[index][name] = e
        setArticle(NewArticle)
    }

    const onDropCustom = (acceptedFiles: any, index: number, name: string) => {
        debugger
        const NewArticle = [...article]
        // @ts-ignore
        NewArticle[index][name] = acceptedFiles[0]
    }

    const OnDelete = (index: number) => {
        setArticle(article.filter((i) => i.index != index))
        console.log(article.filter((i) => i.index != index))

    }

    return (
        <div>
            <Article HandleSubmit={HandleSubmit} title={title} setTitle={setTitle} isDragActive={isDragActive}
                     getRootProps={getRootProps} mainText={mainText} setMainText={setMainText}
                     getInputProps={getInputProps}/>
            {article.map((art, index) => (
                <Form style={{margin: 20, background: "white", borderRadius: 10, padding: 20}}> <Form.Item
                    label={"Subtitle"}>
                    <Input name={"subTitle"} value={art.subTitle} onChange={e => OnChangeValue(e, index)}
                           style={{width: '80%'}}/>
                </Form.Item>
                    <div className={s.fonts}>
                        <Form.Item style={{width: '10%'}} label={"Font for Title"}>
                            <Select onChange={e => OnChangeValueI(e, index, "fontForTitle")}
                                    defaultValue={art.fontForTitle}>
                                <Select.Option value="Poppins">Poppins</Select.Option>
                                <Select.Option value="Montserrat">Montserrat</Select.Option>
                                <Select.Option value="Calibri">Calibri</Select.Option>
                                <Select.Option value="Arial">Arial</Select.Option>
                            </Select>
                        </Form.Item> <Form.Item style={{width: '10%'}} label={"Font for Text"}>
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
                    <Form.Item>
                        <Form.Item name={"Youtube Background"} label={"Youtube Back"}>
                            <div className={s.dropzone}>
                                <Dropzone
                                    onDrop={(acceptedFiles) => onDropCustom(acceptedFiles, index, 'youtubeBackground')}>
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p className={"ant-upload-drag-icon"}><YoutubeOutlined/></p>
                                                <p className="ant-upload-text">Drag 'n' drop some files here, or click
                                                    to select files</p>
                                            </div>
                                        </section>
                                    )}

                                </Dropzone>
                            </div>
                        </Form.Item>
                    </Form.Item>

                    <div className={s.fonts}>
                        {index == article.length - 1 && (
                            <Button type={"dashed"} onClick={AddArticle}> Add an article </Button>)}
                        {index != 0 && (
                            <Button type="primary" danger onClick={() => OnDelete(art.index)} icon={<MinusOutlined/>}
                            />)}
                    </div>
                </Form>))}

            <Button type={"primary"} htmlType={"submit"}>Submit!</Button>
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

