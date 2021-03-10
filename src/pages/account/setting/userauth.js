import React,{useState} from 'react';
import { Breadcrumb,YcImage } from '../../../components';
import{  Button/*,message,Checkbox,Radio,Input*/ }  from 'antd';
import { useForm } from "react-hook-form";
// import { ServicesModel } from '../../../common';
import { Card } from '../components';
// import { tap/*, map */} from "rxjs/operators";
import { UserAuthForm } from './UserAuthForm';
import { UserAuthSteps } from './UserAuthSteps';
import successimg from 'aliasimgurl/img_auth_success.png';
import failimg from 'aliasimgurl/img_auth_fail.png';
import classNames from 'classnames';
import css from './userauth.module.less';

export const UserAuth = ()=>{

    const methods = useForm({mode: "onChange"});

    const [step,setStep] = useState(0);
    const [authRes,setAuthRes] = useState(false);

    const onSubmit = (v)=>{
        console.log(v)
        setStep(1);
    }

    const handleAuthRes = ()=>{
        setAuthRes(!authRes);
    }

    return (
        <div className={ css.formBody }>
            <Breadcrumb list={[{name:'基本信息',path:'/account/setting'},{name:'用户认证'}]} />
            <Card>
                <h3>用户认证</h3>
                    <UserAuthSteps currentStep={ step } setStep={ setStep }>
                        <div className={ css.editForm }>
                            <UserAuthForm methods={ methods } onSubmit={ onSubmit } />
                        </div>
                        <div>
                            <div className={ css.tips }>请耐心等待，工作人员会在5个工作日内审核！</div>
                            <div className={ css.verifyInfo }>
                                <div className={ css.item }>
                                    <div className={ css.label }>注册类别：</div>
                                    <div className={ css.content }>个人</div>
                                </div>
                                <div className={ css.item }>
                                    <div className={ css.label }>公司名称：</div>
                                    <div className={ css.content }>北京第一医疗机构</div>
                                </div>
                                <div className={ css.item }>
                                    <div className={ css.label }>注册资金：</div>
                                    <div className={ css.content }>1000万元</div>
                                </div>

                                <div className={ css.item }>
                                    <div className={ css.label }>行业分类：</div>
                                    <div className={ css.content }>林业</div>
                                </div>
                                <div className={ css.item }>
                                    <div className={ css.label }>注册身份：</div>
                                    <div className={ css.content }>供应商</div>
                                </div>
                                <div className={ css.item }>
                                    <div className={ css.label }>邮箱：</div>
                                    <div className={ css.content }>592223@qq.com</div>
                                </div>
                                <div className={ css.item }>
                                    <div className={ css.label }>企业工商营业执照：</div>
                                    <div className={ css.content }>592223@qq.com</div>
                                </div>
                            </div>
                        </div>
                        <div className={ css.authRes }>
                            <div className={ css.authResImg } onClick={ handleAuthRes }>
                                <YcImage imgUrl={ authRes?successimg:failimg } />
                            </div>
                            <div className={ classNames(css.authResTips,{[css.success]:authRes}) }>
                                {authRes?'恭喜您认证成功！':'非常抱歉，您的认证没通过！'}
                            </div>
                            {
                                !authRes &&
                                <div className={ css.toDoBtn }>
                                    <Button onClick={()=>setStep(0) } size="large">点击完善信息</Button>
                                </div>
                            }
                        </div>
                    </UserAuthSteps>
            </Card>
        </div>
    );
}