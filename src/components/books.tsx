import React, {useEffect} from "react";
import {store} from "../store/store";
import {getBooksR} from "../store/books_reducer";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "antd";

const UsefulBooks = (props: any) => {
    useEffect(() => {
        store.dispatch(getBooksR())
    })
    return(
        <div>{props.books.map((book:any, i:number) => (<div><img src={book.cover}/><a href={book.linkOnDownload}  target="_blank" download >Download</a></div>))}</div>
    )
}

const getStateToProps =(state: any) => ({
    books : state.Books.books
})

export default connect(getStateToProps, {})(UsefulBooks)