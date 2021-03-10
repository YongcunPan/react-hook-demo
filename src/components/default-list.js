import React,{ /*useState*/ } from 'react';
// import classNames from 'classnames';
import * as R from 'ramda';
// import newsimg from 'aliasimgurl/img_news_demo.png';
import css from './default-list.module.less';

export const DefaultList =(props)=>{

    let item ={
        title:'广西三明东升国有林场转让',
        imgUrl:''
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
                    </div>
                )
            }
        </div>
    );
}