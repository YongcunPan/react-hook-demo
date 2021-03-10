import React from 'react';
import css from './type-and-regin.module.less';

export const TypeAndRegin =(props)=>{

    let type = `森林基建,建筑装饰,环保绿化,景观园林,农业牧渔,交通运输`;
    type = type.split(',').map(opt=>({title:opt}));

    let regin = `北京,天津,河北,山西,内蒙古,
                辽宁,吉林,黑龙江,上海,江苏,
                浙江,安徽,福建,江西,山东,
                河南,湖北,湖南,广东,广西,
                海南,重庆,四川,贵州,云南,
                西藏,陕西,甘肃,青海,宁夏,新疆`;
    regin = regin.split(',').map(opt=>({title:opt}));

    return (
        <div className={ css.list }>
            <h4 className={ css.typesTitle }>热门分类</h4>
            <div className={ css.types } >
                {
                    type.map((opt,index)=>
                        <a key={ index } className={ css.title } href="###">{ opt.title }</a>
                    )
                }
            </div>
            <h4 className={ css.reginsTitle }>热门地区</h4>
            <div className={ css.regins }>
                {
                    regin.map((opt,index)=>
                        <a key={ index } className={ css.title } href="###">{ opt.title }</a>
                    )
                }
            </div>
        </div>
    );
}