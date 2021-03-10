import React from 'react';
import { CardBox, DefaultList,YcPagination,Breadcrumb } from '../../components';
import { BaikeList } from './list';
import css from './index.module.less';

export const Baike = ()=>{
    return (
        <div className="container">
            <Breadcrumb list={ {name:'招标百科'} } />
            <div className={ css.baike }>
                <div className={ css.listWrap }>
                    <BaikeList />
                    <YcPagination />
                </div>
                <div className={ css.sideBar }>
                    <CardBox title="热点新闻" more={ ()=>console.log('热点新闻') }>
                        <DefaultList />
                    </CardBox>
                    <div style={{ marginBottom:20 }}></div>
                    <CardBox title="项目推荐" more={ ()=>console.log('项目推荐') }>
                        <DefaultList />
                    </CardBox>
                </div>
            </div>
        </div>
    )
}