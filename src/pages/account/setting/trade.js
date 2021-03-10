import React from 'react';
import { Breadcrumb,ActiveForm,FormItem } from '../../../components';
import{  Button/*,message*/,Checkbox }  from 'antd';
import { useForm } from "react-hook-form";
import { ServicesModel } from '../../../common';
import { Card } from '../components';
import { useHistory } from "react-router-dom";
import { BusinessType } from '../../../helps';
// import { tap/*, map */} from "rxjs/operators";
import css from './index.module.less';

export const Trade = ()=>{

    const { replace } = useHistory();
    const methods = useForm({mode: "onChange"});

    const onSubmit = v=>{
        let {business_type} = v;
        business_type = business_type.join(',');
        ServicesModel.doUpdateProfile({business_type,type:4}).subscribe({
            next:v=>{
                replace('/account/setting');
            }
        });
    }

    return (
        <div className={ css.formBody }>
            <Breadcrumb list={[{name:'基本信息',path:'/account/setting'},{name:'修改行业分类'}]} />
            <Card>
                <div className={ css.editForm }>
                    <h3>修改行业分类</h3>
                    <ActiveForm onSubmit={ (v)=>onSubmit(v) } methods={ methods } className={ css.form }>
                        <FormItem
                            name="business_type">
                            <Checkbox.Group>
                                {
                                    BusinessType.types.map(opt=>
                                        <Checkbox key={ opt.code } size="large" value={ opt.code }>{opt.label}</Checkbox>
                                    )
                                }
                            </Checkbox.Group>
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