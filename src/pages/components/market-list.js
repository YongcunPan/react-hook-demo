import React,{ /*useState*/ } from 'react';
import classNames from 'classnames';
import * as R from 'ramda';
// import newsimg from 'aliasimgurl/img_news_demo.png';
import css from './market-list.module.less';

export const MarketList =(props)=>{

    let item ={
        catgory:'招标公告',
        title:'呼伦贝尔额尔古纳市 150000亩 天然牧草地',
        province_name:'江苏',
        infor_type:'招标',
        createtime:'2020-12-04'
    };
    let items =[];
    for (var i = 0; i < 20; i++) {
        items = R.concat(items,[item]);
    };

    const { data } = props;

    return (
        <div className={ css.list }>
            <div className={ classNames(css.item,css.tableTitle) } >
                <div className={ css.type }>信息分类</div>
                <div className={ css.area }>地区</div>
                <div className={ css.title }>项目名称</div>
                <div className={ css.type }>行业分类</div>
                <div className={ css.time }>发布时间</div>
            </div>
            {
                ( data || items ).map((opt,index)=>
                    <div className={ css.item } key={ index }  onClick={ ()=>props.toView && props.toView(opt) } >
                        <div className={ css.area }>{ opt.infor_type }</div>
                        <div className={ css.area }>{ opt.province_name }</div>
                        <div className={ css.title }>{ opt.title }</div>
                        <div className={ css.type }>{ opt.type }</div>
                        <div className={ css.time }>{ opt.createtime }</div>
                    </div>
                )
            }
        </div>
    );
}