import React from 'react';
import { IndexLogo } from '../../../components';
import { NavLink } from 'react-router-dom'
import { useMainNavData } from '../../../hook';
import classNames from 'classnames';
import css from './AccountHeader.module.less';

export const AccountHeader = ()=>{
    const [mainNav] = useMainNavData();
    return (
        <div className={ css.accountHeaderWrap }>
            <div className={ classNames("container",css.accountHeader) }>
                <div className={ css.logo }>
                   <IndexLogo />
                </div>
                <div className={ css.navList }>
                    {
                        mainNav.map((opt,index)=>
                            <NavLink key={ index }
                                to={ opt.path } className={ css.nav }
                                activeClassName={ css.selected }>
                                <div>
                                    <span>{ opt.label }</span>
                                </div>
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </div>

    )
}