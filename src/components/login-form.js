import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { NavLink,useHistory } from 'react-router-dom';
import { tap/*, map */} from "rxjs/operators";
import { ServicesModel } from '../common';
import { Input, Button, Icon,Checkbox,message,Modal } from 'antd';
import css from './login-form.module.less';

export const LoginForm =()=>{

    let { push } = useHistory();

    const { handleSubmit, control/*,getValues,setValue*/ } = useForm(); // initialise the hook
    const onSubmit = data => {
        const {username,password} =data;
        if(!username || !password){
            return message.error('请输入用户名和密码！');
        };
        ServicesModel.doLogin({username,password}).pipe(
            tap(res=>console.log(res))
            ).subscribe({
                next:res=>{
                    Modal.success({
                        title:'登录成功！'
                    });
                    window.location.href = '/';
                },
                error:err=>{},
                complete:()=>{}
            });
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={ css.formWrap }>
            <div className={ css.formItem }>
                <div className={ css.formItemCon }>
                    <Controller
                        as={<Input prefix={ <Icon type="user" /> } style={{width:'100%'}} />}
                        name="username"
                        control={control}
                        placeholder="请输入用户名"
                        defaultValue="" />
                </div>
            </div>
            <div className={ css.formItem }>
                <div className={ css.formItemCon }>
                    <Controller
                        as={<Input.Password prefix={ <Icon type="lock" /> } style={{width:'100%'}} />}
                        name="password"
                        control={control}
                        placeholder="请输入密码"
                        defaultValue="" />
                </div>
            </div>
            <div className={ css.formItem }>
                <div className={ css.btnWrap }>
                    <div className={ css.btnInner }>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </div>
                </div>
            </div>
            <div className={ css.formItem } >
                <div className={ css.formItemCon }>
                    <Controller
                        as={  <Checkbox.Group>
                                <Checkbox value="remember">自动登录</Checkbox>
                            </Checkbox.Group>
                        }
                        name="remember"
                        control={control}
                        />
                    <NavLink className={ css['forget-password'] } to="/recover">忘记密码？</NavLink>
                </div>
            </div>
            <div className={ css.formItem } >
                <span style={ {fontSize:12} }>您还不是平台的一员？</span>
                <Button size="small"
                    onClick={ ()=>push('/reg') }
                    className={ css.regBtn }>立即注册</Button>
            </div>
        </form>
    )
}