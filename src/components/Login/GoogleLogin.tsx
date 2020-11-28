import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {googleLogin, logOut} from "../api/Google_api";
import {message} from "antd";
import Button from "antd/es/button";
import s from './Google.module.css'

export const GoogleSocialAuth = () => {
        function getCookie(name: any) {
        debugger
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const csrftoken = getCookie('csrftoken');

    const configForLogin = {
        headers: {
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json'
        }
    }



    const googleResponse = (response: any) => {
        debugger
        console.log("all right")
        console.log(csrftoken)
        console.log(response)
        googleLogin(response.accessToken, configForLogin).then(r => localStorage.setItem('key', r.data.key), message.success('Connected with Google!', 10))

    }


    function handleSubmit() {
        debugger
        logOut(configForLogin).then(r => message.info("You're logged out", 3))
        localStorage.removeItem("key")
        console.log(localStorage.getItem("key"))
    }


    function responseGoogle(response: any) {
        console.log("smth bad")
        console.log(response)
    }

    return (
        <div className={s.main}>

            <GoogleLogin
                clientId="383178123345-iirqu0274iepnsnp9bt39hhvmt5ej19l.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={googleResponse}
                onFailure={responseGoogle}
            />
            <Button onClick={handleSubmit}
                    type="primary"
            >
                Log out!
            </Button>
        </div>
    );
}





