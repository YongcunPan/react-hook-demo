import React from 'react';
import { NavLink } from 'react-router-dom'
import { useMainNavData } from '../hook/mainNavData';
import css from './main-nav.module.less';

export const MainNav = (props) => {

    const [mainNav] = useMainNavData();

    return (
        <div className={ css['main-nav'] }>
            <div className="container">
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
    );
}