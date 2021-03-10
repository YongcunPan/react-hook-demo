import React,{ /*useState*/ } from 'react';
// import classNames from 'classnames';
import * as R from 'ramda';
// import newsimg from 'aliasimgurl/img_news_demo.png';
import css from './common-list.module.less';

export const CommonList =(props)=>{

    let item ={
        title:'[广西]三明东升国有林场转让',
        time:'2020-04-05'
    };
    let items =[];
    for (var i = 0; i < 8; i++) {
        items = R.concat(items,[item]);
    };


    return (
        <div className={ css.list }>
            {
                items.map((opt,index)=>
                    <div className={ css.item } key={ index }>
                        <div className={ css.title }>{ opt.title }</div>
                        <div className={ css.time }>{ opt.time }</div>
                    </div>
                )
            }
        </div>
    );
}