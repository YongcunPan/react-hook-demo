import React,{ /*useState*/ } from 'react';
import { useHistory } from 'react-router-dom';
import * as R from 'ramda';
import css from './bidding-list.module.less';

export const BiddingList =(props)=>{

    let item ={
        title:'呼伦贝尔额尔古纳市 150000亩 天然牧草地',
        code:'20200109111',
        statusText:'未成交',
        time:'2019年12月04日',
        viewCount:'180',
        address:'内蒙古/呼伦贝尔/额尔古纳市'
    };
    let items =[];
    for (var i = 0; i < 8; i++) {
        items = R.concat(items,[item]);
    };

    let { push } = useHistory();


    function toView(opt) {
        // const {  }
        push('/bidding/view');
    }


    return (
        <div className={ css.list }>
            {
                items.map((opt,index)=>
                    <div className={ css.item } key={ index }>
                        <div className={ css.title }>
                            <span>{ opt.title } </span>
                            <i className={ css.btn }>招标</i>
                        </div>
                        <div className={ css.innerWrap }>
                            <div className={ css.innerItem }>
                                <div className={ css.label }>项目编号：</div>
                                <div className={ css.con }>{ opt.code }</div>
                            </div>
                            <div className={ css.innerItem }>
                                <div className={ css.label }>成交状态：</div>
                                <div className={ css.con }>{ opt.statusText }</div>
                            </div>
                        </div>
                        <div className={ css.innerWrap }>
                            <div className={ css.innerItem }>
                                <div className={ css.label }>推出时间：</div>
                                <div className={ css.con }>{ opt.time }</div>
                            </div>
                            <div className={ css.innerItem }>
                                <div className={ css.label }>浏览量：</div>
                                <div className={ css.con }>{ opt.viewCount || '0' } 次</div>
                            </div>
                        </div>
                        <div className={ css.innerItem }>
                            <div className={ css.label }>项目地址：</div>
                            <div className={ css.con }>{ opt.address }</div>
                            <div className={ css.viewBtn } onClick={ toView }>查看详情</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}