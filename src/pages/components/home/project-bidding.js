import React from 'react';
import classNames from 'classnames';
import { concat } from 'ramda';
import css from './project-bidding.module.less';

export const ProjectBidding =(props)=>{

    let item ={
        title:'广西三明东升国有林场转让',
        type:'挂牌',
        area:'10000.00m²',
        regin:'中国',
        biddingType:'林场',
        time:'2020-01-30'
    };
    let items =[];
    for (var i = 0; i < 7; i++) {
        items = concat(items,[item]);
    };

    return (
        <div className={ css.biddingList }>
            <div className={ classNames(css.item,css.tableTitle) } >
                <div className={ css.title }>标的名称</div>
                <div className={ css.type }>出让形式</div>
                <div className={ css.area }>面积</div>
                <div className={ css.regin }>区域</div>
                <div className={ css.biddingType }>标的类型</div>
                <div className={ css.time }>推出时间</div>
            </div>
            {
                items.map((opt,index)=>
                    <div className={ css.item } key={ index }>
                        <div className={ css.title }>{ opt.title }</div>
                        <div className={ css.type }>{ opt.type }</div>
                        <div className={ css.area }>{ opt.area }</div>
                        <div className={ css.regin }>{ opt.regin }</div>
                        <div className={ css.biddingType }>{ opt.biddingType }</div>
                        <div className={ css.time }>{ opt.time }</div>
                    </div>
                )
            }
        </div>
    );
}