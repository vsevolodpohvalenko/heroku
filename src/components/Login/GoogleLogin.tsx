import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import {googleLogin, logOut} from "../api/Google_api";
import {message} from "antd";
import Button from "antd/es/button";
import { LogoutOutlined } from '@ant-design/icons';

export const GoogleSocialAuth = () => {
    const googleResponse = (response: any) => {
        debugger
        console.log("all right")
        console.log(response)
      googleLogin(response.accessToken).then(r => localStorage.setItem('key', r.data.key), message.success('Connected with Google!', 10))

    }


    function handleSubmit() {
        debugger
        logOut().then(r => message.info("You're logged out", 3))
    }

    function responseGoogle(response: any) {
        console.log("smth bad")
        console.log(response)
    }

    return (
      <div className="App">

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


