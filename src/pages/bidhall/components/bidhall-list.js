import React from 'react';
// import classNames from 'classnames';
import * as R from 'ramda';
import demoimg from 'aliasimgurl/im‫g_project_market_demo.png';
import css from './bidhall-list.module.less';

export const BidHallList =(props)=>{

    const { itemsLength,toViewPage } =props;

    let len = itemsLength || 8;

    let item ={
        title:'广西三明东升国有林场转让',
        type:'家庭林场',
        regin:'楚雄',
        viewCount:'20090',
        time:'2020-01-30'
    };
    let items =[];
    for (var i = 0; i < len; i++) {
        items = R.concat(items,[item]);
    };

    return (
        <div className={ css.list }>
            {
                items.map((opt,index)=>
                    <div className={ css.item } key={ index }>
                        <div className={ css.itemInner }>
                            <div className={ css.titleimg } onClick={ toViewPage }>
                                <img src={ demoimg } alt=""/>
                            </div>
                            <div className={ css.descwrap }>
                                <div className={ css.title } onClick={ toViewPage }>{ opt.title }</div>
                                <div className={ css.innerwrap }>
                                    <div className={ css.type }><i className="iconfont iconmenu" />{ opt.type }</div>
                                    <div className={ css.regin }><i className="iconfont iconweizhi" />{ opt.regin }</div>
                                </div>
                                <div className={ css.innerwrap }>
                                    <div className={ css.time }><i className="iconfont iconrili" />{ opt.time }</div>
                                    <div className={ css.viewCount }><i className="iconfont iconyanjing" />{ opt.viewCount }</div>
                                </div>
                                <div className={ css.price }>
                                    <span>参考价格</span>
                                    <b>173.00万元</b>
                                    <i></i>
                                    <em>正式批露</em>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}