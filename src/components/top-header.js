import React,{Fragment,useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import {  Icon,Modal } from 'antd';
import { useIsLogin } from '../hook';
import { ServicesModel } from '../common';
import {store} from '../helps';
import css from './top-header.module.less';

export const TopHeader = (props)=>{

    const [isLogin] = useIsLogin();
    const [city,setCity] = useState('加载中...');
    const [timer,setTimer] = useState(null);
    const handleLogout = ()=>{
        ServicesModel.doLogout().subscribe({
            next:res=>{
                Modal.success({
                    title:'退出成功！'
                });
                window.location.href = '/';
            },
            error:err=>{},
            complete:()=>{
                console.log('doLogout')
                store.clearAll();
            }
        });
    }
    useEffectOnce(()=>{
        function updateCity() {
            let _city = window.currentCity;
            setCity(_city||'加载中...');
            if (!_city) {
                let _timer = setTimeout(()=>{
                    updateCity();
                },1000);
                setTimer(_timer);
            };
        };
        updateCity();
        return ()=>{
            if (timer) {
                clearInterval(timer);
            }
        }
    });

    return (
        <div className={ css['top-header'] }>
            <div className="container">
                <div className={ css.wraper }>
                    <div className={ css.welcome }>
                        <div>
                            <Icon type="environment" /> {city}
                        </div>
                        <div>
                            <Icon type="phone" /> 131-2477-0057
                        </div>
                    </div>
                    <div className={ css.ext }>
                        {
                            isLogin?
                            <Fragment>
                                <NavLink to="/account">我的账户</NavLink>
                                <i></i>
                                <a href="###" onClick={ handleLogout }>退出</a>
                            </Fragment>:
                            <Fragment>
                                <NavLink to="/login">请登录</NavLink>
                                <i></i>
                                <NavLink to="/reg">免费注册</NavLink>
                            </Fragment>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}