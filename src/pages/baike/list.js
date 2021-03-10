import React from 'react';
import * as R from 'ramda';
import css from './index.module.less';

export const BaikeList = ()=>{
    let item ={
        title:'广西三明东升国有林场转让',
        desc:'招投标知道分享：招标事宜（公开招标、邀请招标、竞争性谈判、单一来源采购、询价）任何单位和个人不得强制其委托招标代理 机构办理招标事宜，依法招标...',
        time:'2020-02-06'
    };
    let items =[];
    for (var i = 0; i < 8; i++) {
        items = R.concat(items,[item]);
    };

    return (
        <div className={ css.baikeList }>
            {
                items.map((opt,index)=>
                    <div key={ index } className={ css.item } >
                        <h4><a href="###">{ opt.title }</a></h4>
                        <div className={ css.desc } >{ opt.desc }  <a href="###">[阅读全文]</a></div>
                        <div className="clearfix">
                            <div className="right">
                                <span className={ css.time }>发布日期：{ opt.time }</span>
                                <span className={ css.favorite }><i className="iconfont iconshoucang" />收藏</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}