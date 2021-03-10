import React, { useState,Fragment,/*useEffect*/ } from 'react';
import { LoginLayout } from '../common/login-layout';
import bgImg from 'aliasimgurl/img_bg_reg.png';
import { useForm, Controller } from "react-hook-form";
import { Input, Button,  message } from 'antd';
import { NavLink } from 'react-router-dom';
import { tap/*, map */} from "rxjs/operators";
import { ServicesModel } from '../../common';
import { ImgVerifyCode } from '../../components';
import classNames from 'classnames';
import css from './index.module.less';

export const RecoverPage = () => {

    const [currentTap,setCurrentTap] = useState(1);

    const changeTap =(v)=>{
        if(currentTap===v){return;};
        reset({mobile:'',captcha:'',emali:'',imgcode:''});
        setCurrentTap(v);
    }

    const { handleSubmit, control, getValues,reset /*,setValue*/ } = useForm(); // initialise the hook

    const onSubmit = data => {
        let _data  = data ||{};
        _data.type = currentTap===1?'mobile':'emali';
        ServicesModel.doRetrievepwd(_data).pipe(
            tap(res=>console.log(res))
            ).subscribe({
                next:(res)=>{
                    window.location.href = '/login';
                }
            });
    };
    const getVerifyCode = () => {
        const { mobile } = getValues();
        if (!mobile) {
            return message.error('请填写正确的手机号码！');
        };
        ServicesModel.getSendCode({mobile,event:'resetpwd'}).pipe(
            tap(res=>console.log(res))
            ).subscribe({
                next(res){
                    // window.location.href = '/';
                }
            });
    }




    return (
        <LoginLayout style={ {background:`url(${ bgImg }) center bottom no-repeat`, backgroundSize: 'cover'} } >
            <div className={ css.iPage }>
                <div className={ css.iForm }>
                    <div className={ css.recoverWrap }>
                        <h3>找回密码</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className={ css.formWrap }>
                            <div className={ css.formItem }>
                                <div className={ css.formItemLabel }></div>
                                <div className={ classNames(css.formItemCon,css.tapsWrap)  }>
                                    <div className={ classNames(css.tap,currentTap===1?css.active:'') }
                                        onClick={ ()=>changeTap(1) }>手机验证找回</div>
                                    <div className={ classNames(css.tap,currentTap===2?css.active:'') }
                                        onClick={ ()=>changeTap(2) }>邮箱验证找回</div>
                                </div>
                            </div>
                            {
                                currentTap===1?
                                <Fragment>
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
                                                value="" />
                                        </div>
                                    </div>
                                    <div className={ css.formItem } >
                                        <div className={ css.formItemLabel }>
                                            验证码：
                                        </div>
                                        <div className={ css.formItemCon }>
                                            <Controller
                                                as={<Input size="large" placeholder="请输入图形验证码" />}
                                                name="captcha"
                                                control={control}
                                                />
                                        </div>
                                        <ImgVerifyCode className={ css.imgcode } />
                                    </div>
                                    <div className={ css.formItem } >
                                        <div className={ css.formItemLabel }>
                                            验证码：
                                        </div>
                                        <div className={ css.formItemCon }>
                                            <Controller
                                                as={<Input size="large" placeholder="请输入短信验证码" />}
                                                name="code"
                                                control={control}
                                                />
                                        </div>
                                        <Button size="large"
                                            style={{ marginLeft:8 }}
                                            onClick={()=>getVerifyCode()}
                                            type="primary"  >获取验证码</Button>
                                    </div>
                                    <div className={ css.formItem }>
                                        <div className={ css.formItemLabel }>
                                            设置密码：
                                        </div>
                                        <div className={ css.formItemCon }>
                                            <Controller
                                                as={<Input size="large" style={{width:'100%'}} />}
                                                name="newpassword"
                                                control={control}
                                                placeholder="请输入密码"
                                                defaultValue="" />
                                        </div>
                                    </div>
                                </Fragment>:
                                <Fragment>
                                    <div className={ css.formItem }>
                                        <div className={ css.formItemLabel }>
                                            邮箱地址：
                                        </div>
                                        <div className={ css.formItemCon }>
                                            <Controller
                                                as={<Input size="large" style={{width:'100%'}} />}
                                                name="emali"
                                                control={control}
                                                placeholder="请输入邮箱地址"
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
                                                name="imgcode"
                                                control={control}
                                                />
                                        </div>
                                        <ImgVerifyCode className={ css.imgcode } />
                                    </div>
                                </Fragment>
                            }

                            <div className={ css.formItem }>
                                <div className={ css.formItemLabel }> </div>
                                <div className={ css.formItemCon }>
                                    <div className={ css.btnWrap }>
                                        <div className={ css.btnInner }>
                                            <Button size="large"
                                                type="primary"
                                                htmlType="submit">{currentTap===1?'重置密码':'发送验证链接'}</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={ css.formItem } >
                                <div className={ css.formItemLabel }> </div>
                                <div className={ css.formItemCon }>
                                    <div>已有平台会员账号？</div>
                                    <NavLink to="/login">去登录</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LoginLayout>

    )
}