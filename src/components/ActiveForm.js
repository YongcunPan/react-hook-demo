import React from 'react';
import * as R from 'ramda';
import { FormContext, Controller } from "react-hook-form";
import classNames from 'classnames';
import { Upload, Button } from 'antd';
import css from './ActiveForm.module.less';


export const ActiveForm = (props) => {

    const { children, onSubmit, methods, className = "form", layout = "Horizontal", itemlayout = [2, 8] } = props;

    const { control,errors } = methods;
    const doSubmit = (data) => {
        onSubmit ? onSubmit(data) : console.log(data)
    };

    const childrenWithControl = (c) => {
        return React.Children.map(c, child => {
            if (!child) {
                return child;
            };
            if (child && child.props && R.is(Array, child.props.children)) {
                return React.cloneElement(child, { control, layout, itemlayout,errors, children: childrenWithControl(child.props.children) });
            };
            return React.cloneElement(child, { control, layout, itemlayout,errors });
        });
    }


    return (
        <FormContext {...methods}>
            <form onSubmit={methods.handleSubmit(doSubmit)} className={ className } >
                { childrenWithControl(children) }
            </form>
        </FormContext>

    )
}


export const FormItem = (props) => {
    const { children, control, name, placeholder = "",
        defaultValue, className, label, layout, itemlayout, required,rules=[],errors } = props;
    let _rules ={};
    let _errors={};
    R.forEach(opt=>{
        let key = Object.keys(opt)[0];
        _rules[key]=opt[key];
        _errors[key]=opt.message||'';
    },rules);

    return (
        <div className={ classNames(css.fromItem,className) } style={{ flexDirection: layout==='Horizontal'?'row':'column' }}>
            {
                !!label &&
                <div style={ {flex:itemlayout[0],textAlign:layout==='Horizontal'?'right':'left'} }
                    className={css.formItemLabel}>
                    {
                        required &&
                        <span style={{color:'red'}}>*</span>
                    }
                    <span>{label}:</span>
                </div>
            }
            <div className={ css.formItemContent } style={ {flex:!!label?itemlayout[1]:1} }>
                {
                    name&&control?
                    <Controller
                        as={ children }
                        name={ name }
                        control={control}
                        rules={ _rules }
                        placeholder={ placeholder }
                        defaultValue={ defaultValue } />:
                    children
                }{
                    name&&control&&errors[name] &&
                    <div className={ css.formItemError }>{ _errors[errors[name]['type']] }</div>
                }
            </div>
        </div>
    );
}


export const UploadItem = (props)=>{
    const { btnText="文件上传" } = props;
    const selfProps = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',
        defaultFileList: [ ],
        className: 'upload-list-inline',
    }
    return (
        <Upload {...selfProps}>
            <Button>
                {btnText}
            </Button>
        </Upload>
    );
}