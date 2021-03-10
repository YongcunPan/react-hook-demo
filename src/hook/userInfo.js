import {store} from '../helps';
import {/*useCallback,*/useState,useEffect} from 'react';
import { useIsLogin } from './isLogin';
import { ServicesModel } from '../common';
import { aesEncrypt,aesDecrypt } from '../helps';

export const useUserInfo = ()=>{

    const [isLogin] = useIsLogin();
    const [data,setData] = useState({});
    const [loading,setLoadig] = useState(true);
    useEffect(()=>{
        if (isLogin) {
            let userInfo = store.get('userInfo');
            if (userInfo) {
                setData(aesDecrypt(userInfo));
                setLoadig(false);
            }else{
                ServicesModel.getUserInfo().subscribe({
                    next:(res)=>{
                        if (res && res.userInfo) {
                            store.set('userInfo',aesEncrypt(res.userInfo),new Date().getTime() + 1000*60*60*24);
                            setData(res.userInfo);
                            setLoadig(false);
                        }
                    }
                });
            };
        }else{
            setData({});
            setLoadig(false);
        }
    },[isLogin]);

    return [data,loading];
}