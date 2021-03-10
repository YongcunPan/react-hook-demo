import React from 'react';
import { IndexLogo,IndexSearch } from './index';
// import hottelimg from 'aliasimgurl/icon_hot_tel.png';
import css from './index-header.module.less';

export const IndexHeader = ()=>{



    return (
        <div className="container">
            <div className={ css.wrap }>
                <div className={ css.logo } >
                    <IndexLogo  />
                </div>
                <div className={ css.searchWrap }>
                    <IndexSearch />
                </div>
                <div className={ css.ext }>
                    <i className="iconfont iconbianji" ></i>
                    <b>免费发布招采信息</b>
                </div>
            </div>
        </div>
    );
}