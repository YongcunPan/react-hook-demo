import { CService } from "./services";
// import { parse, stringify } from "qs/qs";

export class Service extends CService {
    baseUrl = "";
    devUrl = "";
    domain = "";
    openidName = "token";
    version = "";
    env = "dev";

    doLogin(data){
        return this.POST('login',data);
    }

    doLogout(data){
        return this.POST('logout',data);
    }

    doRegister(data){
        return this.POST('register',data);
    }

    getSendCode(data){
        return this.POST('sendCode',data);
    }

    /**
    *重置密码
    */
    doResetpwd(data){
        return this.POST('resetpwd',data);
    }

    getSigns(data){
        return this.POST('getsigns',data);
    }

    getCityData(data){
        return this.POST('getCity',data);
    }

    getUserInfo(data){
        return this.POST('userIndex',data);
    }

    doChangeMobile(data){
        return this.POST('changemobile',data);
    }

    doUpdateProfile(data){
        return this.POST('profile',data);
    }

    /**
    *找回密码
    */
    doRetrievepwd(data){
        return this.POST('retrievepwd',data);
    }

    getNoticeNum(data){
        return this.POST('allNoticeNum',data);
    }

}

export default new Service();
// Service.model = new Service()