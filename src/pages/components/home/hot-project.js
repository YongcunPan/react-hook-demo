import React from 'react';
import classNames from 'classnames';
import * as R from 'ramda';
import css from './hot-project.module.less';

export const HotProject =(props)=>{

    let item ={
        title:'广西三明东升国有林场转让',
        viewCount:'2323',
    };
    let items =[];
    for (var i = 0; i < 10; i++) {
        items = R.concat(items,[item]);
    };

    return (
        <div className={ css.list }>
            <div className={ classNames(css.item,css.tableTitle) } >
                <div className={ css.order }>排名</div>
                <div className={ css.title }>名称</div>
                <div className={ css.viewCount }>浏览量</div>
            </div>
            {
                items.map((opt,index)=>
                    <div className={ css.item } key={ index }>
                        <div className={ css.order }>
                            <em className={ index<3?css.active:'' }>{ index+1 }</em>
                        </div>
                        <div className={ css.title }>{ opt.title }</div>
                        <div className={ css.viewCount }>{ opt.viewCount }</div>
                    </div>
                )
            }
        </div>
    );
}