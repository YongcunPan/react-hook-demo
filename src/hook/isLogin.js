import {store} from '../helps';
import {/*useCallback,*/useState,useEffect} from 'react';

export const useIsLogin = ()=>{

    const [isLogin,setIsLogin] = useState(false);
    useEffect(()=>{
        let _isLogin = store.get('isLogin');
        setIsLogin(!!_isLogin);
    },[isLogin]);

    return [isLogin];
}