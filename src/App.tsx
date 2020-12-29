// @ts-ignore
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import {SuggestNews} from "./components/suggestNews/suggestNews";
import MainTemplate from "./templates/main_template";
import ForGuests from "./components/for_guests/for_guests";
import {GoogleSocialAuth} from "./components/Login/GoogleLogin";
import {store} from "./store/store";
import {Provider} from "react-redux";
import TestPDF from "./components/Schedule/schedule";
import UsefulBooks from "./components/books";
import {NewsCatalog} from "./components/AcceptNews/AcceptNews";
import {NewsWithRouter} from "./components/News/NewsContainer";


class App extends React.Component {

    render() {
        return (
            <div className="App">
            <BrowserRouter>
                <Provider store = {store}>
                <Switch>
                    <Route exact path={"/suggest"}  render={() =><MainTemplate><SuggestNews/></MainTemplate>}/>
                    <Route exact path={"/login"} render={() => <MainTemplate><GoogleSocialAuth/></MainTemplate>}/>
                    <Route exact path={"/timetable"} render={() => <MainTemplate><TestPDF/></MainTemplate>}/>
                    <Route exact path={"/books"} render={() => <MainTemplate><UsefulBooks/></MainTemplate>}/>
                    <Route exact path={'/catalog'} render={() => <MainTemplate><NewsCatalog/></MainTemplate>}/>
                    <Route exact path={"/news/:id"} component={NewsWithRouter}/>
                    <Route exact path={"/"} render={() =><ForGuests/>}/>
                </Switch>
                </Provider>
            </BrowserRouter>
            </div>
        )
    }
}

export default App;
