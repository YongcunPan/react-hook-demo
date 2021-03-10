import React,{ Fragment } from 'react';
import css from './card-box.module.less';
import morebtn from 'aliasimgurl/icon_more_btn.png';

export const CardBox = (props)=>{
    const { children,title,ext,more } = props;
    return (
        <div className={ css.cardbox }>
            <div className={ css.title } >
                {title}
                <small className={ css.ext }>{ ext }</small>
                <i className={ css.blank }></i>
                {
                    !!more &&
                    <img className={ css.moreBtn }
                        onClick={ more }
                        src={ morebtn } alt=""/>
                }
            </div>
            <Fragment>
                {children}
            </Fragment>
        </div>
    );
}