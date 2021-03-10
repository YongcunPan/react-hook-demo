import React from 'react';
// import { useHistory } from 'react-router-dom';
import { IndexLogo } from '../../components';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import css from './index.module.less';

export const Header = ()=>{

    // 回到首页 | 快速注册 | 帮助中心

    return (
        <div className={ css.header }>
            <div className={ classNames(css.headerWrap,"container") }>
                <div className={ css.logo } >
                    <IndexLogo  />
                </div>
                <div className={ css.topMenu }>
                    <NavLink to="/">回到首页</NavLink>
                    <NavLink to="/reg">快速注册</NavLink>
                    <NavLink to="/help">帮助中心</NavLink>
                </div>
            </div>
        </div>

    )
}