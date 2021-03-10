import React,{ useState,Fragment } from 'react';
import { Breadcrumb,ActiveForm,FormItem } from '../../../components';
import{  Button/*,message*/,Input }  from 'antd';
import { useForm } from "react-hook-form";
// import { ServicesModel } from '../../../common';
import { Card } from '../components';
// import { tap/*, map */} from "rxjs/operators";
import { autoOpenEmail } from '../../../helps';
import css from './index.module.less';

export const Email = ()=>{

    const methods = useForm({mode: "onChange"});

    const [isSubmit,setIsSubmit] = useState(false);

    const onSubmit = (v)=>{
        setIsSubmit(true);

    }

    return (
        <div className={ css.formBody }>
            <Breadcrumb list={[{name:'基本信息',path:'/account/setting'},{name:'修改邮箱'}]} />
            <Card>
                <div className={ css.editForm }>
                    {
                        isSubmit?
                        <Fragment>
                            <h3>登录邮箱激活</h3>
                            <div className={ css.desc }>确认邮件已发送至您的 <span>592******@qq.com</span> 邮箱中，请按照邮件中的内容提示进行操作！</div>
                            <div className={ css.btnWrap }>
                                <Button size="large"
                                    onClick={ ()=>autoOpenEmail('abc@qq.com') }
                                    style={{ width:300 }}
                                    type="primary"  >登录邮箱</Button>
                            </div>
                            <h3>您无法收取到确认邮件吗？</h3>
                            <div className={ css.desc }>确认邮件可能需要长达5分钟的时间送达？</div>
                            <div className={ css.btnWrap }>
                                <Button size="large"
                                    onClick={ ()=>setIsSubmit(false) }
                                    style={{ width:300 }}
                                    type="primary"  >重新发送邮件</Button>
                            </div>
                        </Fragment>:
                        <Fragment>
                            <h3>修改邮箱</h3>
                            <div className={ css.desc }>请确保您输入的邮箱能正常接收认证邮件。</div>
                            <ActiveForm onSubmit={ onSubmit } methods={ methods } className={ css.form }>
                                <FormItem
                                    placeholder="请输入邮箱"
                                    name="email">
                                    <Input size="large" />
                                </FormItem>
                                <FormItem className={ css.btnWrap }>
                                    <Button size="large"
                                        type="primary" htmlType="submit">提交修改</Button>
                                </FormItem>
                            </ActiveForm>
                        </Fragment>
                    }
                </div>
            </Card>
        </div>
    );
}