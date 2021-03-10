import React,{ useState } from 'react';
// import classNames from 'classnames';
import * as R from 'ramda';
import newsimg from 'aliasimgurl/img_news_demo.png';
import css from './news-list.module.less';

export const NewsList =(props)=>{

    let item ={
        title:'广西三明东升国有林场转让',
        imgUrl:''
    };
    let items =[];
    for (var i = 0; i < 10; i++) {
        items = R.concat(items,[item]);
    };


    let [_before,after] = R.splitAt(2,items);
    const [before,setBefore] = useState(_before);

    const onError = ()=>{
        let _r = before.map(opt=>({...opt,imgUrl:newsimg}));
        setBefore(_r);
    }

    /*let  _after = R.splitEvery(2,after);
    console.log(_after)*/

    const [ w,setWidth] = useState(196);
    const [ h,setHeight] = useState(140);

    const changeWh = (v)=>{
        if (v) {
            let _w = v.clientWidth;
            let h =_w*144/204;
            setWidth(parseInt(w,10));
            setHeight(parseInt(h,10));
        }

    }

    return (
        <div className={ css.list }>
            <div className={ css.before }>
                {
                    before.map((o,i)=>
                        <div ref={ _div=>changeWh(_div) } className={ css.item } key={ i }>
                            <div style={ {display:'flex',alignItems:'center',height:h,justifyContent:'center',width:w} }>
                                <div>
                                    <img style={ {fontSize:0,display:'block',height:h,width:w} }
                                        onError={ (e)=>onError(e) } src={ o.imgUrl } alt=""/>
                                </div>
                            </div>
                            <div className={ css.title } style={ {width:w} }>{ o.title }</div>
                        </div>
                    )
                }
            </div>
            <div className={ css.after }>
                {
                    after.map((opt,index)=>
                        <div className={ css.item } key={ index }>
                            <div className={ css.title }>{ opt.title }</div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}