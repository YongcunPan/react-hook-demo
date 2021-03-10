import React from 'react';
import { CardBox, DefaultList,YcPagination,Breadcrumb } from '../../components';
import { DownloadList } from './list';
import css from './index.module.less';

export const DownloadPage = ()=>{

    let type= '招标标书,投标标书,招标合同,采购合同';
    type = type.split(',');

    return (
        <div className="container">
            <Breadcrumb list={ {name:'下载专区'} } />
            <div className={ css.download }>
                <div className={ css.listWrap }>
                    <div className={ css.title }>
                        {
                            type.map((opt,index)=>
                                <a key={ index } href="###">{ opt }</a>
                            )
                        }
                    </div>
                    <DownloadList />
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