import React from 'react';
import { NavLink/*, useHistory */} from 'react-router-dom';
import css from './SubNav.module.less';

export const SubNav = ()=>{

    const subNav = [{
        label:'账户设置',
        path:'/account/setting'
    },{
        label:'待办事项',
        path:'/account/work'
    },{
        label:'项目管理',
        path:'/account/a'
    },{
        label:'权限管理',
        path:'/account/b'
    },{
        label:'合同管理',
        path:'/account/c'
    },{
        label:'收藏夹',
        path:'/account/d'
    }]
    return (
        <div className={ css.navList }>
            {
                subNav.map((opt,index)=>
                    <NavLink key={ index } to={ opt.path }
                        className={ css.nav } activeClassName={ css.selected }>
                        <div>
                            <span>{ opt.label }</span>
                        </div>
                    </NavLink>
                )
            }
        </div>
    )
}