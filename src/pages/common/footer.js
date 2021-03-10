import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import css from './index.module.less';

export const Footer = (props)=>{
    // 首页 | 林权流转 | 林业服务 | 专家智库 | 产业策划 | 供求大厅 | 培训交流 | 林业联盟 | 政策法规 | 新闻中心
    return (
        <div className={ classNames(css.footer,'container',props.className) }>
            <div className={ css.footerMenu } >
                <NavLink to="/">回到首页</NavLink>
                <NavLink to="/">林权流转</NavLink>
                <NavLink to="/">林业服务</NavLink>
                <NavLink to="/">专家智库</NavLink>
                <NavLink to="/">产业策划</NavLink>
                <NavLink to="/">供求大厅</NavLink>
                <NavLink to="/">培训交流</NavLink>
                <NavLink to="/">林业联盟</NavLink>
                <NavLink to="/">政策法规</NavLink>
                <NavLink to="/">新闻中心</NavLink>
            </div>
            <div>
                ©2019 版权所有中国林业产业服务平台ICP备0000000号-2增值电信业务经营许可证:234234
            </div>
        </div>
    )
}