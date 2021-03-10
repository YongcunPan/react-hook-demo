import React,{ useState } from 'react';
import { UserInfo,SubNav,Card } from '../components';
import { YcPagination } from '../../../components';
import classNames from 'classnames';
import {  Radio,Button } from 'antd';
import { useNoticeNumData,useDataApi } from '../../../hook';

import css from '../index.module.less';

export const Workbench = ()=>{

    const pList=[{
        label:'审核通知',
        key:'a'
    },{
        label:'招标通知',
        key:'b'
    },{
        label:'采购通知',
        key:'c'
    },{
        label:'系统通知',
        key:'d'
    }];

    const [currentTopic,setCurrentTopic] = useState(pList[0]);

    const handleCatgory = (opt)=>{
        setCurrentTopic(opt);
    }

    const [dataList] = useState(()=>mookData());
    function mookData(argument) {
        let res = [];
        for (var i = 0; i < 10; i++) {
            res[i]={
                id:i+1,
                title:'【行政库房一季度微机耗材】已审批通过，已发布...',
                time:'2020.02.26  09:00:00'
            }
        };
        return res;
    };

    const [numData] = useNoticeNumData();

    console.log(numData);

    const [{ data, isLoading/*, isError */}/*, updateParams*/]=useDataApi({ url: '/api/NoticeList', method: 'post', data: { page: 1, category: 1 }});
    console.log(data,isLoading)

    return (
        <div className={  css.body}>
            <div className={css.sideBar }  >
                <UserInfo />
                <SubNav />
            </div>
            <div className={ css.mainBody }>
                <Card title="项目管理">
                    <div className={ css.listTitle }>
                        {
                            pList.map((opt)=>
                                <div className={ classNames(css.item,{[css.active]:opt.key===currentTopic.key}) }
                                    onClick={ ()=>handleCatgory(opt) }
                                    key={ opt.key }>
                                    <div className={ css.label }>{ opt.label }</div>
                                    <div className={ css.num }>10</div>
                                </div>
                            )
                        }
                    </div>
                    <div className={ css.currentTopic }>
                        {
                            currentTopic.key ==='b'?
                            <div>
                                <Radio.Group onChange={  e=>console.log(e.target.value) }>
                                    <Radio value="2">全部</Radio>
                                    <Radio value="21">招标通知</Radio>
                                    <Radio value="22">投标通知</Radio>
                                </Radio.Group>
                            </div>:currentTopic.label
                        }
                    </div>
                    <div className={ css.dataList }>
                        <div className={ css.item }>
                            <div className={ css.title }>通知</div>
                            <div className={ css.time }>时间</div>
                            <div className={ css.action }>操作</div>
                        </div>
                        {
                            dataList.map(opt=>
                                <div key={ opt.id } className={ css.item }>
                                    <div className={ css.title }>{currentTopic.label}{ opt.title }</div>
                                    <div className={ css.time }>{ opt.time }</div>
                                    <div className={ css.action }><Button>查看</Button></div>
                                </div>
                            )
                        }
                        <YcPagination />
                    </div>
                </Card>
            </div>
        </div>
    )
}