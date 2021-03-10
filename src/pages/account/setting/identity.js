import React,{ useState,useEffect } from 'react';
import { Breadcrumb,ActiveForm,FormItem } from '../../../components';
import{  Button/*,message*/,Radio }  from 'antd';
import { useForm } from "react-hook-form";
import { ServicesModel } from '../../../common';
import { Card } from '../components';
import { IdentityType } from '../../../helps';
import { useHistory } from "react-router-dom";
import { useUserInfo } from '../../../hook';
// import { tap/*, map */} from "rxjs/operators";
import css from './index.module.less';

export const Identity = ()=>{

    const { replace } = useHistory();
    const methods = useForm({mode: "onChange"});
    const identityTypes = IdentityType.types.filter(opt=>opt.code!=='5');
    const [data] = useUserInfo();
    const [identityText,setIdentityText] = useState('暂无');
    useEffect(()=>{
        const { identity_type } = data;
        if (identity_type) {
            let {label=''} = IdentityType.getTypeByCode(identity_type)||{};
            setIdentityText(label);
        }
    },[data]);

    const onSubmit = v=>{
        ServicesModel.doUpdateProfile({...v,type:1}).subscribe({
            next:v=>{
                replace('/account/setting');
            }
        });
    }

    return (
        <div className={ css.formBody }>
            <Breadcrumb list={[{name:'基本信息',path:'/account/setting'},{name:'修改注册身份'}]} />
            <Card>
                <div className={ css.editForm }>
                    <h3>修改注册身份</h3>
                    <ActiveForm onSubmit={ (v)=>onSubmit(v) } methods={ methods } className={ css.form }>
                        <FormItem
                            label="原身份" >
                            <div>{identityText}</div>
                        </FormItem>
                        <FormItem
                            label="重新选择身份"
                            name="identity_type">
                            <Radio.Group>
                                {
                                    identityTypes.map(opt=>
                                        <Radio size="large" key={ opt.code } value={ opt.code }>{opt.label}</Radio>
                                    )
                                }
                            </Radio.Group>
                        </FormItem>
                        <FormItem className={ css.btnWrap }>
                            <Button size="large"
                                style={{width:300}}
                                type="primary" htmlType="submit">提交修改</Button>
                        </FormItem>
                    </ActiveForm>
                </div>
            </Card>
        </div>
    );
}