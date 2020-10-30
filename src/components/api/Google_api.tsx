import React from "react";
import {config, instance} from "./api";


export const googleLogin = async (accessToken: string) => {
    return instance.post('rest-auth/google/', {access_token: accessToken}, config)
}
export const logOut = async  () => {
    return instance.post('rest-auth/logout/')
}
