import React,{ useState } from 'react';
import classNames from 'classnames';
import * as R from 'ramda';
import demoimg from 'aliasimgurl/img_notices_demo.png';
import { Typography } from 'antd';
import css from './notices-list.module.less';

export const NoticesList =(props)=>{

    let item ={
        title:'广西三明东升国有林场转让',
        desc:'河北保定市雄安新区容东片区环卫设施项目北停车场项目，项目为总面积约9100平方米…',
        imgUrl:'',
        time:'2020-02-29'
    };
    let items =[];
    for (var i = 0; i < 16; i++) {
        items = R.concat(items,[item]);
    };
    let [_before,after] = R.splitAt(2,items);

    const [before,setBefore] = useState(_before);

    const onError = ()=>{
        let _r = before.map(opt=>({...opt,imgUrl:demoimg}));
        setBefore(_r);
    }

    /*let  _after = R.splitEvery(2,after);
    console.log(_after)*/

    const [ w,setWidth] = useState(590);

    const changeWh = (v)=>{
        if (v) {
            let _w = v.clientWidth;
            setWidth(parseInt(_w,10));
            // console.log(_w)
        }

    }




    return (
        <div className={ css.list }>
            <div className={ css.before }>
                {
                    before.map((o,i)=>
                        <div ref={ _div=>changeWh(_div) } className={ css.item } key={ i } style={ {width:w} }>
                            <div className={ css.imgWrap } >
                                <div className={ css.imgInnerWarp }>
                                    <img className={ css.img } style={ { maxHeight:92,maxWidth:136 } }
                                        onError={ (e)=>onError(e) } src={ o.imgUrl } alt=""/>
                                    <div className={ css.extText }>精选</div>
                                </div>
                            </div>
                            <div className={css.descwrap}>
                                <div className={ css.title } >
                                    <Typography.Paragraph ellipsis={ {rows:2} } style={ {marginBottom:0} } >{ o.title }</Typography.Paragraph>
                                </div>
                                <div className={ css.desc } >
                                    <Typography.Paragraph ellipsis={ {rows:3} } style={ {marginBottom:0} }>{ o.desc }</Typography.Paragraph>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
            <div className={ css.after }>
                {
                    after.map((opt,index)=>
                        <div className={ classNames(css.item,index>11?css.noLine:'') } key={ index } style={ {width:w} }>
                            <div className={ css.title }>{ opt.title }</div>
                            <div className={ css.time }>{ opt.time }</div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}