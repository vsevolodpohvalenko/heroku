import React from "react";
import { instance} from "./api";


export const googleLogin = async (accessToken: string, configForLogin: any) => {
    debugger
    return instance.post('rest-auth/google/', {access_token: accessToken}, configForLogin)
}
export const logOut = async  (configForLogin : any) => {
    debugger
    return instance.post('rest-auth/logout/', {} , configForLogin)
}
