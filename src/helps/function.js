import * as R from 'ramda';
import qs from 'qs';
const CryptoJS = require("crypto-js");
const engine = require('store/src/store-engine')
const storages = [
    require('store/storages/localStorage'),
    require('store/storages/cookieStorage')
];
const plugins = [
    require('store/plugins/defaults'),
    require('store/plugins/expire')
];


export const store = engine.createStore(storages, plugins);

export const aesEncrypt =(value,key='rc4')=> CryptoJS.AES.encrypt(JSON.stringify(value), key).toString();
export const aesDecrypt =(value,key='rc4')=> JSON.parse(CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8));

export const getSearch = function(search) {
    let _search = search.replace(/^\?/, '');
    _search = qs.parse(_search);
    return _search;
};


const __get_props__ = (key, data) => {
    if (!R.is(Object, data) && !R.is(Array, data)) {
        throw new Error(`data is not Object or Array, data: ${ data }`);
    }

    if (data.length) {
        return data[parseInt(key, 10)];
    }

    return R.prop(key, data);
};

export const getDeepProp = R.curry(function(key, data) {
    const _keys = key.split('.');
    let _data = R.clone(data);
    for (let i = 0; i < _keys.length; i++) {
        if (R.isNil(_data)) {
            return null;
        }

        _data = __get_props__(_keys[i], _data);
    }

    return _data;
});


export function autoOpenEmail(mailUrl="") {
    let uurl = getEmail(mailUrl);
    if (uurl !== "") {
        window.open("http://" + uurl,'_blank');
    } else {
        alert("抱歉!未找到对应的邮箱登录地址，请自己登录邮箱查看邮件");
    }
}

//功能：根据用户输入的Email跳转到相应的电子邮箱首页
function getEmail(mailUrl) {
    if (!mailUrl) {
        return '';
    };
    let _url = mailUrl.split('@')[1];
    _url = _url.toLowerCase();
    if (_url === '163.com') {
        return 'mail.163.com';
    } else if (_url === 'vip.163.com') {
        return 'vip.163.com';
    } else if (_url === '126.com') {
        return 'mail.126.com';
    } else if (_url === 'qq.com' || _url === 'vip.qq.com' || _url === 'foxmail.com') {
        return 'mail.qq.com';
    } else if (_url === 'gmail.com') {
        return 'mail.google.com';
    } else if (_url === 'sohu.com') {
        return 'mail.sohu.com';
    } else if (_url === 'tom.com') {
        return 'mail.tom.com';
    } else if (_url === 'vip.sina.com') {
        return 'vip.sina.com';
    } else if (_url === 'sina.com.cn' || _url === 'sina.com') {
        return 'mail.sina.com.cn';
    } else if (_url === 'tom.com') {
        return 'mail.tom.com';
    } else if (_url === 'yahoo.com.cn' || _url === 'yahoo.cn') {
        return 'mail.cn.yahoo.com';
    } else if (_url === 'tom.com') {
        return 'mail.tom.com';
    } else if (_url === 'yeah.net') {
        return 'www.yeah.net';
    } else if (_url === '21cn.com') {
        return 'mail.21cn.com';
    } else if (_url === 'hotmail.com') {
        return 'www.hotmail.com';
    } else if (_url === 'sogou.com') {
        return 'mail.sogou.com';
    } else if (_url === '188.com') {
        return 'www.188.com';
    } else if (_url === '139.com') {
        return 'mail.10086.cn';
    } else if (_url === '189.cn') {
        return 'webmail15.189.cn/webmail';
    } else if (_url === 'wo.com.cn') {
        return 'mail.wo.com.cn/smsmail';
    } else if (_url === '139.com') {
        return 'mail.10086.cn';
    } else {
        return '';
    }
};