import React, { /*useState,useEffect*/ } from 'react';
import { LoginLayout } from '../common/login-layout';
import bgImg from 'aliasimgurl/img_bg_reg.png';
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Checkbox, message,Modal } from 'antd';
import { NavLink } from 'react-router-dom';
// import { useDataApi } from '../../hook/dataApi';
import { tap/*, map */} from "rxjs/operators";
import { ServicesModel } from '../../common';
import css from './index.module.less';

export const RegPage = () => {

    const { handleSubmit, control, watch, getValues /*,setValue*/ } = useForm(); // initialise the hook
    const isremember = watch('remember', []);



    const onSubmit = data => {
        let _data  = data ||{};
        const { password,repassword } = data;
        if(!password || (password && password!==repassword)){
            return message.error("密码不正确！")
        };
        if (_data.remember.length>0) {
            _data.remember=1;
        };
        _data.remember = void 0;
        ServicesModel.doRegister(_data).pipe(
            tap(res=>console.log(res))
            ).subscribe({
                next:res=>{
                    Modal.success({
                        title:'注册成功！'
                    });
                    window.location.href = '/';
                },
                error:err=>{},
                complete:()=>{}
            });
    };
    const getVerifyCode = () => {
        const { mobile } = getValues();
        if (!mobile) {
            return message.error('请填写正确的手机号码！');
        };
        ServicesModel.getSendCode({mobile,event:'register'}).pipe(
            tap(res=>{
                console.log(res)
            })
        ).subscribe({
            next(res){
                // console.log(res)
            }
        })
    }

    return (
        <LoginLayout style={ {background:`url(${ bgImg }) center bottom no-repeat`, backgroundSize: 'cover'} } >
            <div className={ css.iPage }>
                <div className={ css.iForm }>
                    <div className={ css.regWrap }>
                        <h3>免费注册</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className={ css.formWrap }>
                            <div className={ css.formItem }>
                                <div className={ css.formItemLabel }>
                                    用户名：
                                </div>
                                <div className={ css.formItemCon }>
                                    <Controller
                                        as={<Input size="large" style={{width:'100%'}} />}
                                        name="nickname"
                                        control={control}
                                        placeholder="请输入用户名"
                                        defaultValue="" />
                                </div>
                            </div>
                            <div className={ css.formItem }>
                                <div className={ css.formItemLabel }>
                                    手机号码：
                                </div>
                                <div className={ css.formItemCon }>
                                    <Controller
                                        as={<Input size="large" style={{width:'100%'}} />}
                                        name="mobile"
                                        control={control}
                                        placeholder="请输入手机号码"
                                        defaultValue="" />
                                </div>
                            </div>
                            <div className={ css.formItem } >
                                <div className={ css.formItemLabel }>
                                    验证码：
                                </div>
                                <div className={ css.formItemCon }>
                                    <Controller
                                        as={<Input size="large" placeholder="请输入验证码" />}
                                        name="code"
                                        control={control}
                                        />
                                    <Button size="large"
                                        style={{ marginLeft:8,width:112 }}
                                        onClick={()=>getVerifyCode()}
                                        type="primary"  >获取验证码</Button>
                                </div>
                            </div>
                            <div className={ css.formItem }>
                                <div className={ css.formItemLabel }>
                                    设置密码：
                                </div>
                                <div className={ css.formItemCon }>
                                    <Controller
                                        as={<Input.Password size="large" style={{width:'100%'}} />}
                                        name="password"
                                        control={control}
                                        placeholder="请输入密码"
                                        defaultValue="" />
                                </div>
                            </div>
                            <div className={ css.formItem }>
                                <div className={ css.formItemLabel }>
                                    确认密码：
                                </div>
                                <div className={ css.formItemCon }>
                                    <Controller
                                        as={<Input.Password size="large" style={{width:'100%'}} />}
                                        name="repassword"
                                        control={control}
                                        placeholder="请再次确认密码"
                                        defaultValue="" />
                                </div>
                            </div>
                            <div className={ css.formItem } >
                                <div className={ css.formItemLabel }>
                                </div>
                                <div className={ css.formItemCon }>
                                    <Controller
                                        as={  <Checkbox.Group>
                                                <Checkbox size="large" value="remember">我已阅读并同意《网站服务协议》</Checkbox>
                                            </Checkbox.Group>
                                        }
                                        name="remember"
                                        control={control}
                                        />
                                </div>
                            </div>
                            <div className={ css.formItem }>
                                <div className={ css.formItemLabel }> </div>
                                <div className={ css.formItemCon }>
                                    <div className={ css.btnWrap }>
                                        <div className={ css.btnInner }>
                                            <Button size="large"
                                                disabled={!isremember.length>0}
                                                title={ !isremember.length>0?'请先勾选同意按钮':'' }
                                                type="primary" htmlType="submit">立即注册</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={ css.formItem } >
                                <div className={ css.formItemLabel }> </div>
                                <div className={ css.formItemCon }>
                                    <div>已有平台会员账号？<NavLink to="/login">去登录</NavLink></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LoginLayout>

    )
}