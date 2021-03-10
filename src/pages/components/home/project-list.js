import React from 'react';
import classNames from 'classnames';
import * as R from 'ramda';
import css from './project-list.module.less';

export const ProjectList =(props)=>{

    let item ={
        title:'广西三明东升国有林场转让',
        type:'挂牌',
        area:'10000.00m²',
        regin:'中国',
        biddingType:'林场',
        time:'2020-01-30'
    };
    let items =[];
    for (var i = 0; i < 10; i++) {
        items = R.concat(items,[item]);
    };
    //     项目名称                                 采购产品                     需求数量                         项目地区                     报名截止日期
    return (
        <div className={ css.list }>
            <div className={ classNames(css.item,css.tableTitle) } >
                <div className={ css.title }>项目名称</div>
                <div className={ css.type }>采购产品</div>
                <div className={ css.area }>需求数量</div>
                <div className={ css.regin }>项目地区</div>
                {/*<div className={ css.biddingType }>报名截止日期</div>*/}
                <div className={ css.time }>报名截止日期</div>
            </div>
            {
                items.map((opt,index)=>
                    <div className={ css.item } key={ index }>
                        <div className={ css.title }>{ opt.title }</div>
                        <div className={ css.type }>{ opt.type }</div>
                        <div className={ css.area }>{ opt.area }</div>
                        <div className={ css.regin }>{ opt.regin }</div>
                        {/*<div className={ css.biddingType }>{ opt.biddingType }</div>*/}
                        <div className={ css.time }>{ opt.time }</div>
                    </div>
                )
            }
        </div>
    );
}