import React from 'react';
import demoimg from 'aliasimgurl/logo_img.png';
import { Spin } from 'antd';
import css from './yc-loading.module.less';


export const YcLoading = (props)=>{
    const { imgUrl } = props;

    return (
        <div className={ css.loading }>
            <div className={ css.spinWrap }>
                <div className={ css.spin }>
                  <Spin />
                </div>
            </div>
            <div className={ css.logo }>
                <img src={ imgUrl || demoimg } alt=""/>
            </div>
        </div>
    );
}