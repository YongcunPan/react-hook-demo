import { Observable } from "rxjs";
import axios from 'axios';
import { Modal, notification } from 'antd';
import {store} from '../helps';
import { curry, /*isNil,*/contains } from "ramda";
import qs from "qs";

const openNotificationWithIcon = (type, title, message ) => {
    notification[type]({
        message: title,
        description: message,
    });
};

class HTTPMethod {
    static GET = "GET";
    static POST = "POST";
    static PUT = "PUT";
    static DELETE = "DELETE";
    static UPLOAD = "UPLOAD";
}
const errorStatus = [2010, 401, 403, 40301];
const http = curry(({method=HTTPMethod.GET,tokenName='token',filePath=''},url, data = {}, headers = {}) => {
    const token = store.get(tokenName) || '';
    let _request = axios;
    let _data= qs.stringify(data);
    let options = {
        url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'apptype':'pc',
            [tokenName]: token,
            ...headers,
        },
        data:_data,
        method
    };
    return new Observable(subscriber => {
        /*const request = */_request(options).then(function(res) {
            if(res.status && contains(res.status, errorStatus)) {
                // window.location.reload();
                return void 0;
            }

            if( (res.status && res.status !== 200) || res.data.code !==200) {
                // if(!unThrow) {
                    let msg= res.data.msg || '未知的状态码或其它错误！';
                    if (res.data.code===-1) {
                        Modal.error({
                            title:'错误信息',
                            content:msg
                        });
                    }else{
                        openNotificationWithIcon('error','错误信息',msg);
                    };
                // }
                subscriber.error(msg);
                subscriber.complete();
                return void 0;
            }

            subscriber.next(res.data.data);
            subscriber.complete()
        }).catch(function(err) {
            console.log(err)
            if(_request.isCancel(err)) {
                console.warn(err.message);
                subscriber.complete();
                return void 0;
            }

            if(err && err.response && contains(err.response.status, errorStatus)) {
                // window.location.reload();
                return void 0
            }

            // if( process.env.NODE_ENV === 'production' ) {
                openNotificationWithIcon('error','错误信息',"服务器开小差~~，请刷新页面重试！");
                // const msg = Director.t("服务器开小差~~，请刷新页面重试！")
                // if(!unThrow) {
                    // throwError(msg);
                // }
                subscriber.error("服务器开小差~~，请刷新页面重试！");
            // }

            subscriber.complete();
        });
    });
})


export class CService {
    baseUrl = "";
    domain = ""
    version = "";
    devUrl = "";
    env = "dev";
    tokenName="token";

    getBaseUrl(url, ignoreDomain = false) {
        if(ignoreDomain) {
            return `${this.env === "dev" ? this.devUrl : this.baseUrl}/api/${url}`;
        }
        return `${this.env === "dev" ? this.devUrl : this.baseUrl}/api/${this.domain}/${this.version ? this.version + "/" : ""}${url}`;
    }

    getData(data1, data2) {
        return {
            ...data1,
            ...data2
        }
    }

    GET(url, data = {}, headers = {}, ignoreDomain = true) {
        return http({method:HTTPMethod.GET,tokenName:this.tokenName}, this.getBaseUrl(url, ignoreDomain), data, headers);
    }

    POST(url, data = {}, headers = {}, ignoreDomain = true) {
        return http({method:HTTPMethod.POST,tokenName:this.tokenName}, this.getBaseUrl(url, ignoreDomain), data, headers);
    }

    PUT(url, data = {}, headers = {}) {
        return http({method:HTTPMethod.PUT,tokenName:this.tokenName}, this.getBaseUrl(url), data, headers);
    }

    DELETE(url, data = {}, headers = {}) {
        return http({method:HTTPMethod.DELETE,tokenName:this.tokenName}, this.getBaseUrl(url), data, headers);
    }

    UPLOAD(url, data, filePath) {
        return http({method:HTTPMethod.UPLOAD,tokenName:this.tokenName,filePath}, this.getBaseUrl(url), data);
    }
}