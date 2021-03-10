import React from 'react';
import { Breadcrumb,ActiveForm,FormItem } from '../../../components';
import{ Input, Button,message }  from 'antd';
import { useForm } from "react-hook-form";
import { ServicesModel } from '../../../common';
import { useHistory } from "react-router-dom";
import { Card } from '../components';
// import { tap/*, map */} from "rxjs/operators";
import css from './index.module.less';

export const Password = ()=>{

    const { replace } = useHistory();
    const methods = useForm({mode: "onChange"});

    const onSubmit = v=>{
        const { newpassword,renewpassword } = v;
        if (!newpassword || newpassword !==renewpassword) {
            return message.error('密码设置不正确！');
        };
        ServicesModel.doResetpwd(v).subscribe({
            next:res=>{
                replace('/account/setting');
            }
        })
    }

    return (
        <div className={ css.formBody }>
            <Breadcrumb list={[{name:'基本信息',path:'/account/setting'},{name:'修改密码'}]} />
            <Card>
                <div className={ css.editForm }>
                    <h3>修改密码</h3>
                    <ActiveForm onSubmit={ (v)=>onSubmit(v) } methods={ methods } className={ css.form }>
                        <FormItem
                            placeholder="请输入原密码"
                            name="oldpassword">
                            <Input.Password size="large" style={{width:'100%'}} />
                        </FormItem>
                        <FormItem
                            placeholder="请输入新密码"
                            name="newpassword">
                            <Input.Password size="large" style={{width:'100%'}} />
                        </FormItem>
                        <FormItem
                            placeholder="请确认新密码"
                            name="renewpassword">
                            <Input.Password size="large" style={{width:'100%'}} />
                        </FormItem>
                        <FormItem className={ css.btnWrap }>
                            <Button size="large" type="primary" htmlType="submit">提交修改</Button>
                        </FormItem>
                    </ActiveForm>
                </div>
            </Card>
        </div>
    );
}