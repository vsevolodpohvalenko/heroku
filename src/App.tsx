// @ts-ignore
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import {SuggestNews} from "./components/suggestNews/suggestNews";
import {MainTemplate} from "./templates/main_template";
import {ForGuests} from "./components/for_guests/for_guests";
import {GoogleSocialAuth} from "./components/Login/GoogleLogin";
import {store} from "./store/store";
import {Provider} from "react-redux";


class App extends React.Component {
    render() {
        return (
            <div className="App">
            <BrowserRouter>
                <Provider store = {store}>
                <Switch>
                    <Route exact path={"/suggest"} render={() =><MainTemplate><SuggestNews/></MainTemplate>}/>
                    <Route exact path={"/login"} render={() => <MainTemplate><GoogleSocialAuth/></MainTemplate>}/>
                    <Route exact path={"/"} render={() =><ForGuests />}/>
                </Switch>
                </Provider>
            </BrowserRouter>
            </div>
        )
    }
}

export default App;
