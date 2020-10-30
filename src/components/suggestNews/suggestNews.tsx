import React, {FormEvent, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import s from './suggestNews.module.css'
import {SuggestNewsApi} from "../api/SuggestNews_api";
import {Form, Input, Button} from 'antd';


export const SuggestNews = (props:any) => {
    const [title, setTitle] = useState<string>('');
    const [mainText, setMainText] = useState<string>('');
    const [Attachment, setAttachment] = useState<any>('');
    const onDrop = useCallback(acceptedFiles => {
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

    return (
        <div>
            <Form layout={"horizontal"} name={"nest-message"}
                  style={{margin: 20, background: "white", borderRadius: 10, padding: 20}}
                  onFinish={() => HandleSubmit()}>
                <Form.Item name={"Title"} label={"Title"} rules={[
                    {
                        required: true,
                    }
                ]}>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} name={"title"}/>
                </Form.Item>
                <Form.Item name={"Text"} label={"Text"} rules={[
                    {
                        required: true,
                    }
                ]}>
                    <Input value={mainText} onChange={e => setMainText(e.target.value)} name={"mainText"}/>
                </Form.Item>
                <Form.Item name={"Attachments"} label={"Attachments"} rules={[
                    {
                        required: true,
                    }
                ]}>
                    <div className={s.dropzone} {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ? <p>Drop the file here ...</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>
                        }
                    </div>
                </Form.Item>
                <Button type={"primary"} htmlType={"submit"}>Submit!</Button>
            </Form>
        </div>
    )
}
