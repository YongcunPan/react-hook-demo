import React from 'react';
import { LoginLayout } from '../common/login-layout';
import bgImg from 'aliasimgurl/img_bg_login.png';
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Icon,Checkbox,message,Modal } from 'antd';
import { NavLink,useHistory } from 'react-router-dom';
import { ServicesModel } from '../../common';
import { tap/*, map */} from "rxjs/operators";
import classNames from 'classnames';
import css from './index.module.less';

export const  LoginPage = ()=>{

    let { push } = useHistory();
    const { handleSubmit, control/*,getValues,setValue*/ } = useForm(); // initialise the hook


    const onSubmit = data => {
        const {username,password} =data;
        if(!username || !password){
            return message.error('请输入用户名和密码！');
        };
        ServicesModel.doLogin({username,password}).pipe(
            tap(res=>console.log(res,'pipe'))
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
        <LoginLayout style={ {background:`url(${ bgImg }) center bottom no-repeat`, backgroundSize: 'cover'} } >
            <div className={ css.iPage }>
                <div className={ css.iForm }>
                    <div className={ css.iWrap } style={{width:480}}>
                        <h3>欢迎登录</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className={ css.formWrap }>
                            <div className={ css.formItem }>
                                <div className={ css.formItemCon }>
                                    <Controller
                                        as={<Input size="large" prefix={ <Icon type="user" /> } style={{width:'100%'}} />}
                                        name="username"
                                        control={control}
                                        placeholder="请输入用户名"
                                        defaultValue="" />
                                </div>
                            </div>
                            <div className={ css.formItem }>
                                <div className={ css.formItemCon }>
                                    <Controller
                                        as={<Input.Password size="large" prefix={ <Icon type="lock" /> } style={{width:'100%'}} />}
                                        name="password"
                                        control={control}
                                        placeholder="请输入密码"
                                        defaultValue="" />
                                </div>
                            </div>

                            <div className={ css.formItem } >
                                <div className={ css.formItemCon }>
                                    <Controller
                                        as={  <Checkbox.Group>
                                                <Checkbox size="large" value="remember">自动登录</Checkbox>
                                            </Checkbox.Group>
                                        }
                                        name="remember"
                                        control={control}
                                        />
                                </div>
                                <NavLink className={ css['forget-password'] } to="/recover">忘记密码？</NavLink>
                            </div>
                            <div className={ css.formItem }>
                                <div className={ css.btnWrap }>
                                    <div className={ css.btnInner }>
                                        <Button size="large" type="primary" htmlType="submit">立即登录</Button>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(css.formItem,css.toRegWrap) } >
                                <span style={ {fontSize:12} }>您还没有账号？</span>
                                <Button size="default"
                                    onClick={ ()=>push("/reg") }
                                    className={ css.regBtn }>立即注册</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LoginLayout>

    )
}