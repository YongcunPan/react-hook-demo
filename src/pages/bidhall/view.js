import React,{ /*useState,useEffect*/ } from 'react';
// import { NavLink/*, useHistory*/ } from 'react-router-dom'
import { YcImage,Breadcrumb } from '../../components';
import { Button,Tabs  } from 'antd';
import headerImg from 'aliasimgurl/complex-header.png';
import imgDemo from 'aliasimgurl/img_demo.png';
import css from './index.module.less';

const { TabPane } = Tabs;

export const BidHallView = ()=>{

    function callback(key) {
        // console.log(key);
    }

    return (
        <div className="container">
            <YcImage imgUrl={ headerImg } />
            <Breadcrumb list={ {name:'中标公示'} } />
            <div className={ css.viewWrap }>
                <div className={ css.header }>
                    <div className={ css.img }>
                        <YcImage imgUrl={ imgDemo } />
                    </div>
                    <div className={ css.descWrap }>
                        <h2> 呼伦贝尔额尔古纳市 150000亩 天然牧草地 </h2>
                        <h4><em>即将开始</em>开始时间：<i>2020</i>年<i>02</i>月<i>20</i>日<i>10:10</i></h4>
                        <div className={ css.extInfo }>
                            <div className={ css.infoList }>
                                <div className={ css.infoItem }  >
                                    <div className={ css.infoLabel }>起始价：</div>
                                    <div className={ css.infoCon }>￥5,552,000.00 </div>
                                </div>
                                <div className={ css.infoItem }  >
                                    <div className={ css.infoLabel }>评估价：</div>
                                    <div className={ css.infoCon }>￥6,937,111.00　 </div>
                                </div>
                                <div className={ css.infoItem }  >
                                    <div className={ css.infoLabel }>保证金：</div>
                                    <div className={ css.infoCon }>￥1,000,000.00 </div>
                                </div>
                                <div className={ css.infoItem }  >
                                    <div className={ css.infoLabel }>加价幅度：</div>
                                    <div className={ css.infoCon }>￥50,000.00 </div>
                                </div>
                            </div>
                            <div className={ css.extBtnWrap }>
                                <Button type="primary"  >参与报价</Button>
                                <Button type="primary" ghost  >我要咨询</Button>
                            </div>
                        </div>
                        <div className={ css.desc }>
                            <div className={ css.item }>
                                <div className={ css.label }>自由报价开始时间： </div>
                                <div className={ css.con }>2020-01-20 10:00:00</div>
                            </div>
                            <div className={ css.item }>
                                <div className={ css.label }>自由报价期：</div>
                                <div className={ css.con }>1440分钟</div>
                            </div>
                            <div className={ css.item }>
                                <div className={ css.label }>限时报价开始时间： </div>
                                <div className={ css.con }>2020-01-20 10:00:00</div>
                            </div>
                            <div className={ css.item }>
                                <div className={ css.label }>限时报价期：</div>
                                <div className={ css.con }>1440分钟</div>
                            </div>
                        </div>
                        <div className={ css.tipInfo }>
                            <span><i className={ css.number }>8</i>人关注</span>
                            <span><i className={ css.number }>980</i>次浏览</span>
                            <span>关注</span>
                            <span>分享</span>
                            <span>查看联系方式</span>
                        </div>
                    </div>
                </div>
                <Tabs onChange={callback} type="card" className={ css.tabWrap }>
                    <TabPane className={ css.tabContent } tab="标的介绍" key="1">
                        <table className={ css.table }>
                            <tbody>
                                <tr>
                                    <td className={ css.grayBg }>林地编号 </td>
                                    <td colSpan="3" className={ css.tLeft }>20200109992</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>标地名称 </td>
                                    <td colSpan="3" className={ css.tLeft }>呼伦贝尔额尔古   15000亩  天然牧草地</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>竞价开始日期 </td>
                                    <td>2019-01-10</td>
                                    <td className={ css.grayBg }>标的资产评估值(元)</td>
                                    <td>247600.00 </td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>保证金 </td>
                                    <td>362.00万元</td>
                                    <td className={ css.grayBg }>交纳方式</td>
                                    <td>线上支付/转账汇款</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>起始价 </td>
                                    <td>362.00万元</td>
                                    <td className={ css.grayBg }>加价幅度</td>
                                    <td>10000万元</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>数量 </td>
                                    <td>15000亩</td>
                                    <td className={ css.grayBg }>交易地点</td>
                                    <td>呼和浩特公共资源交易大厅</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>公告链接 </td>
                                    <td className={ css.tLeft } colSpan="3"></td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>其他补充 </td>
                                    <td className={ css.tLeft } colSpan="3">容积率为≤2.6</td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPane>
                    <TabPane className={ css.tabContent } tab="报价记录" key="2">
                        <table className={ css.bgTable }>
                            <tbody>
                                <tr>
                                    <th>用户</th>
                                    <th>状态</th>
                                    <th>序号</th>
                                    <th>价格</th>
                                    <th>时间</th>
                                </tr>
                                <tr>
                                    <td className={ css.username }>13124***0098</td>
                                    <td>出局</td>
                                    <td>1</td>
                                    <td>6,000, 000.00元</td>
                                    <td>2020.12.29 13:23:20:100</td>
                                </tr>
                                <tr>
                                    <td className={ css.username }>13124***0098</td>
                                    <td>胜出</td>
                                    <td>2</td>
                                    <td>6,000, 000.00元</td>
                                    <td>2020.12.29 13:23:20:100</td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPane>
                    <TabPane className={ css.tabContent } tab="图片展示" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane className={ css.tabContent } tab="联系方式" key="4">
                        Content of Tab Pane 4
                    </TabPane>
                    <TabPane className={ css.tabContent } tab="竞价规则" key="5">
                        Content of Tab Pane 4
                    </TabPane>
                    <TabPane className={ css.tabContent } tab="竞买须知" key="6">
                        Content of Tab Pane 4
                    </TabPane>
                    <TabPane className={ css.tabContent } tab="附件" key="7">
                        Content of Tab Pane 4
                    </TabPane>
                </Tabs>
                {/*<div className={ css.imgWrap }>
                    <YcImage imgUrl={ imgDemo } />
                </div>*/}
            </div>
        </div>
    );
}