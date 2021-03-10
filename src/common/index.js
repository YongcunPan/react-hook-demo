import config from "./config";
import {store} from '../helps';
import { /*map,*/tap } from "rxjs/operators";
// import { is } from "ramda";

export class ServicesModel {

    static doLogin(data){
        return config.doLogin(data).pipe(
            tap(res=>{
                if (res && res.userinfo && res.userinfo.token) {
                    store.set('token',res.userinfo.token, new Date().getTime() + 1000*60*60*24);// 设置过期时间
                    store.set('isLogin',true, new Date().getTime() + 1000*60*60*24);// 设置过期时间
                };
            }),
        );
    }

    static doLogout(data){
        return config.doLogout(data).pipe(
            tap(res=>{
                store.clearAll();
            }),
        );
    }

    // doRegister
    static doRegister(data){
        return config.doRegister(data).pipe(
            tap(res=>{
                if (res && res.userinfo && res.userinfo.token) {
                    store.set('token',res.userinfo.token, new Date().getTime() + 1000*60*60*24);// 设置过期时间
                    store.set('isLogin',true, new Date().getTime() + 1000*60*60*24);// 设置过期时间
                };
            }),
        );
    }

    static getSendCode(data) {
        return config.getSendCode(data);
    }

    static doResetpwd(data){
        return config.doResetpwd(data);
    }

    static getSigns(data){
        return config.getSigns(data).pipe(
            tap(res=>{
                if (res && res.token) {
                    store.set('token',res.token);
                }
            })
        );
    }

    static getCityData(data){
        return config.getCityData(data);
    }

    static getUserInfo(data){
        return config.getUserInfo(data);
    }

    static doChangeMobile(data){
        return config.doChangeMobile(data).pipe(
            tap(res=>{
                store.remove('userInfo');
            })
        );
    }

    static doUpdateProfile(data){
        return config.doUpdateProfile(data).pipe(
            tap(res=>{
                store.remove('userInfo');
            })
        );
    }

    static doRetrievepwd(data){
        return config.doRetrievepwd(data);
    }

    static getNoticeNum(data){
        return config.getNoticeNum(data);
    }

}