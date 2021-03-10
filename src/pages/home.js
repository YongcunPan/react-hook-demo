import React,{ /*Fragment*/ } from 'react';
// import { useHistory } from 'react-router-dom';
import { CardBox,CommonList,DefaultList  } from '../components';
import { IndexFocus,NoticesScroll,NoticesList,NewsList,ProjectList, HotProject,
    /*ProjectMarket,ProjectBidding*/ } from './components/home';
import classNames from 'classnames';
import css from './index.module.less';

export const Home = (props)=>{


    const ExtOne = <span><i>招标公告</i><i>竞价公告</i><i>变更公告</i><i>成交公告</i></span>
    // 建材装饰  |  医疗医药  |  通信设备 |  仪表仪器  |   机械设备   |  安防设备
    const ExtTwo = <span><i>建材装饰</i><i>医疗医药</i><i>通信设备</i><i>仪表仪器</i><i>机械设备</i><i>安防设备</i></span>

    return (
        <div className="container">
            <div className="container">
                <IndexFocus />
            </div>
            <div className="container">
                <NoticesScroll />
            </div>
            <div className={ css.mainWithBar }>
                <div className={ css.leftPart }>
                    <CardBox title="招标信息" ext={ ExtOne }  more={ ()=>console.log('招标信息') }>
                        <NoticesList />
                    </CardBox>
                </div>
                <div className={ css.sideBar }>
                    <CardBox title="新闻资讯" more={ ()=>console.log('新闻资讯') }>
                        <NewsList />
                    </CardBox>
                </div>
            </div>
            <div className={ css.mainWithBar }>
                <div className={ css.leftPart }>
                    <CardBox title="采购信息" ext={ ExtTwo } more={ ()=>console.log('采购信息') }>
                        <ProjectList />
                    </CardBox>
                </div>
                <div className={ css.sideBar }>
                    <CardBox title="热门项目">
                        <HotProject />
                    </CardBox>
                </div>
            </div>
            {/*<div className={ css.projectmarket }>
                <CardBox title="项目集市" more={ ()=>console.log('项目集市') }>
                    <ProjectMarket />
                </CardBox>
            </div>*/}
            <div className={ classNames(css.mainWithBar) }>
                <div className={ classNames(css.leftPart,css.lastDiv) } >
                    <CardBox title="中标公示" more={ ()=>console.log('中标公示') }>
                        <CommonList />
                    </CardBox>
                    <CardBox title="招标百科" more={ ()=>console.log('招标百科') }>
                        <CommonList />
                    </CardBox>
                </div>
                <div className={ css.sideBar }>
                    <CardBox title="下载专区" more={ ()=>console.log('下载专区') }>
                        <DefaultList />
                    </CardBox>
                </div>
            </div>
        </div>

    );
}