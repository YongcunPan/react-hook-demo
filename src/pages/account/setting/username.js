import React,{ useEffect } from 'react';
import { Breadcrumb,ActiveForm,FormItem,ImgVerifyCode } from '../../../components';
import{ Input, Button/*,message*/ }  from 'antd';
import { useForm } from "react-hook-form";
import { ServicesModel } from '../../../common';
import { useUserInfo } from '../../../hook';
import { useHistory } from "react-router-dom";
import { Card } from '../components';
// import { tap/*, map */} from "rxjs/operators";
import css from './index.module.less';

export const UserName = ()=>{
    let { replace } = useHistory();
    const [data] = useUserInfo();
    const methods = useForm({mode: "onChange"});
    const { setValue  } = methods;
    useEffect(()=>{
        setValue('originalUsername',data.nickname);
    },[data,setValue]);

    const onSubmit = v=>{
        const { nickname,captcha } = v;
        ServicesModel.doUpdateProfile({nickname,captcha,type:2}).subscribe({
            next:res=>{
                replace('/account/setting');
            }
        })
    }


    return (
        <div className={ css.formBody }>
            <Breadcrumb list={[{name:'基本信息',path:'/account/setting'},{name:'修改用户名'}]} />
            <Card>
                <div className={ css.editForm }>
                    <h3>修改用户名</h3>
                    <ActiveForm onSubmit={ (v)=>onSubmit(v) } methods={ methods } className={ css.form }>
                        <FormItem
                            placeholder="请输入用户名"
                            name="originalUsername">
                            <Input size="large" disabled style={{width:'100%'}} />
                        </FormItem>
                        <FormItem
                            placeholder="请输入用户名"
                            name="nickname">
                            <Input size="large" style={{width:'100%'}} />
                        </FormItem>
                        <div className={ css.itemWithBtn }>
                            <FormItem
                                className={ css.codeWrap }
                                placeholder="请输入图像验证码"
                                name="captcha">
                                <Input size="large" style={{width:'100%'}} />
                            </FormItem>
                            <ImgVerifyCode className={ css.btn } />
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