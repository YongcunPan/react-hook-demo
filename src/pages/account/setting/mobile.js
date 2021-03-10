import React from 'react';
import { Breadcrumb,ActiveForm,FormItem,ImgVerifyCode } from '../../../components';
import{ Input, Button,message }  from 'antd';
import { useForm } from "react-hook-form";
import { ServicesModel } from '../../../common';
import { Card } from '../components';
import { tap/*, map */} from "rxjs/operators";
import css from './index.module.less';

export const Mobile = ()=>{

    const methods = useForm({mode: "onChange"});
    const { getValues } = methods;
    const getVerifyCode = () => {
        const { mobile } = getValues();
        if (!mobile) {
            return message.error('请填写正确的手机号码！');
        };
        ServicesModel.getSendCode({mobile,event:'changemobile'}).pipe(
            tap(res=>console.log(res))
            ).subscribe({
                next(res){
                    // window.location.href = '/';
                }
            });
    }

    const onSubmit = (v)=>{
        // doChangeMobile
        ServicesModel.doChangeMobile(v).subscribe({
            next(res){
                // TODO 修改成功之后，页面跳转
                window.location.href ='/account/setting'
            }
        })
    }

    return (
        <div className={ css.formBody }>
            <Breadcrumb list={[{name:'基本信息',path:'/account/setting'},{name:'修改手机号'}]} />
            <Card>
                <div className={ css.editForm }>
                    <h3>修改手机号</h3>
                    <ActiveForm onSubmit={ (v)=>onSubmit(v) } methods={ methods } className={ css.form }>
                        <FormItem
                            placeholder="请输入手机号码"
                            rules={ [{ required: true, message: '请输入手机号码' },
                                    { pattern: new RegExp(/^[1]{1}\d{10}$/) , message: '请输入11位手机号码' }
                                ] }
                            name="mobile">
                            <Input size="large"  />
                        </FormItem>
                        <div className={ css.itemWithBtn }>
                            <FormItem
                                className={ css.codeWrap }
                                placeholder="请输入图像验证码"
                                name="captcha">
                                <Input size="large"  />
                            </FormItem>
                            <ImgVerifyCode className={ css.btn } />
                        </div>
                        <div className={ css.itemWithBtn }>
                            <FormItem
                                className={ css.codeWrap }
                                placeholder="请输入手机验证码"
                                name="code">
                                <Input size="large"  />
                            </FormItem>
                            <div className={ css.btn }>
                                <Button size="large" onClick={ getVerifyCode }>获取短信</Button>
                            </div>
                        </div>
                        <FormItem className={ css.btnWrap }>
                            <Button size="large" type="primary" htmlType="submit">提交修改</Button>
                        </FormItem>
                    </ActiveForm>
                </div>
            </Card>
        </div>
    );
}



