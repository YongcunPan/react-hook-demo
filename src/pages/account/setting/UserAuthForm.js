import React,{Fragment/*,useEffect*/} from 'react';
import{ Input, Button/*,message*/,Checkbox,Radio }  from 'antd';
import { IdentityType,BusinessType } from '../../../helps';
import { ActiveForm,FormItem,UploadItem,AddressItem } from '../../../components';
import css from './userauth.module.less';

export const UserAuthForm = (props)=>{
    const { methods,onSubmit } = props;
    const { watch/*,reset*/ } = methods;
    const category = watch('category');

    return(
        <ActiveForm onSubmit={ onSubmit } methods={ methods } className={ css.form }>
            <FormItem
                label="注册类别"
                required={ false }
                name="category">
                <Radio.Group>
                    <div className={ css.radioGroup }>
                        <div className={ css.radio } ><Radio size="large" value="1">企业</Radio></div>
                        <div className={ css.radio } ><Radio size="large" value="2">个人</Radio></div>
                    </div>
                </Radio.Group>
            </FormItem>
            {
                '1'===category?
                <Fragment>
                    <FormItem
                        label="公司名称"
                        placeholder="请输入"
                        name="companyName">
                        <Input size="large" />
                    </FormItem>
                    <FormItem
                        label="注册资金"
                        placeholder="请输入"
                        name="capital">
                        <Input size="large" addonAfter="万元" />
                    </FormItem>
                </Fragment> :
                <Fragment>
                    <FormItem
                        label="真实姓名"
                        placeholder="请输入"
                        name="realName">
                        <Input size="large" />
                    </FormItem>
                    <FormItem
                        label="身份证号"
                        placeholder="请输入"
                        name="identification">
                        <Input size="large" />
                    </FormItem>
                </Fragment>
            }
            <FormItem
                label="地址"
                name="address"
                placeholder="请选择地址">
                <AddressItem />
            </FormItem>
            <FormItem
                label="注册分类"
                name="business_type"
                placeholder="">
                <Checkbox.Group>
                    {
                        BusinessType.types.map(opt=>
                            <Checkbox key={ opt.code } size="large" value={ opt.code }>{opt.label}</Checkbox>
                        )
                    }
                </Checkbox.Group>
            </FormItem>
            <FormItem
                label="注册身份"
                name="identity_type"
                placeholder="">
                <Radio.Group>
                    {
                        IdentityType.types.filter(opt=>opt.code!=='5').map(opt=>
                            <Radio key={ opt.code } size="large" value={ opt.code }>{opt.label}</Radio>
                        )
                    }
                </Radio.Group>
            </FormItem>
            <FormItem
                label="邮箱"
                name="email"
                placeholder="">
                <Input size="large" />
            </FormItem>
            <FormItem
                label="证件照片"
                name="legal_identity_cert">
                <UploadItem />
            </FormItem>
            <FormItem
                label="手持身份证"
                name="legal_identity_cert_un">
                <UploadItem />
            </FormItem>
            <FormItem className={ css.btnWrap }>
                <Button size="large" type="primary" htmlType="submit">提交</Button>
            </FormItem>
        </ActiveForm>
    );

}