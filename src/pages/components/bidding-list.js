import React,{ /*useState*/ } from 'react';
import classNames from 'classnames';
import * as R from 'ramda';
import css from './bidding-list.module.less';

export const BiddingList =(props)=>{
   let item ={
        title:'呼伦贝尔额尔古纳市 150000亩 天然牧草地',
        province_name:'江苏',
        industry_type:'招标',
        createtime:'2019-12-04'
    };
    let items =[];
    for (var i = 0; i < 20; i++) {
        items = R.concat(items,[item]);
    };

    const { data } = props;

    return (
        <div className={ css.list }>
            <div className={ classNames(css.item,css.tableTitle) } >
                <div className={ css.title }>项目名称</div>
                <div className={ css.area }>地区</div>
                <div className={ css.type }>行业分类</div>
                <div className={ css.time }>报名截止时间</div>
            </div>
            {
                (data || items).map((opt,index)=>
                    <div className={ css.item } key={ index } onClick={ ()=>props.toView && props.toView(opt) }>
                        <div className={ css.title }>{ opt.title }</div>
                        <div className={ css.area }>{ opt.province_name }</div>
                        <div className={ css.type }>{ opt.industry_type }</div>
                        <div className={ css.time }>{ opt.createtime }</div>
                    </div>
                )
            }
        </div>
    );
}