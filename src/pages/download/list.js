import React from 'react';
import * as R from 'ramda';
import { YcImage } from '../../components';
import demoimg from 'aliasimgurl/download_demo.png';
import css from './index.module.less';

export const DownloadList = ()=>{
    let item ={
        title:'广西三明东升国有林场',
        readCout:1029,
        downloadCount:123

    };
    let items =[];
    for (var i = 0; i < 15; i++) {
        items = R.concat(items,[item]);
    };

    return (
        <div className={ css.downloadList }>
            {
                items.map((opt,index)=>
                    <div key={ index } className={ css.item } >
                        <div className={ css.imgWrap }>
                            <div className={ css.img }>
                                <YcImage imgUrl={ demoimg } />
                            </div>
                            <div className={ css.tips }>
                                <div className={ css.tip }>点击阅读</div>
                            </div>
                        </div>
                        <h4 className={ css.title }><a href="###">{ opt.title }</a></h4>
                        <div className={ css.desc }>
                            <span>{ opt.readCout || 0 }阅读</span>
                            <span>{ opt.downloadCount || 0 }下载</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}