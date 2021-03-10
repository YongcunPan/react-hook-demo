import React,{ /*useState,useEffect*/ } from 'react';
// import { NavLink } from 'react-router-dom'
import { YcImage,Breadcrumb } from '../../components';
import { Button,Tabs  } from 'antd';
import headerImg from 'aliasimgurl/complex-header.png';
import imgDemo from 'aliasimgurl/img_demo.png';
import css from './index.module.less';

const { TabPane } = Tabs;

export const ComplexView = ()=>{

    function callback(key) {
        console.log(key);
    }

    return (
        <div className="container">
            <YcImage imgUrl={ headerImg } />
            <Breadcrumb list={ {name:'发布信息'} } />
            <div className={ css.viewWrap }>
                <div className={ css.header }>
                    <div className={ css.img }>
                        <YcImage imgUrl={ imgDemo } />
                    </div>
                    <div className={ css.descWrap }>
                        <h2>
                            <small>挂牌</small>
                            呼伦贝尔额尔古纳市 150000亩 天然牧草地
                        </h2>
                        <div className={ css.extInfo }>
                            <span>价格</span>
                            <i>面议</i>
                            <Button type="primary" shape="round" icon="download" >我要参与</Button>
                            <Button type="primary" ghost shape="round" icon="download"  >我要咨询</Button>
                        </div>
                        <div className={ css.desc }>
                            <div className={ css.item }>
                                <div className={ css.label }>林地编号</div>
                                <div className={ css.con }>20200109001</div>
                            </div>
                            <div className={ css.item }>
                                <div className={ css.label }>交易状态</div>
                                <div className={ css.con }>未成交</div>
                            </div>
                            <div className={ css.item }>
                                <div className={ css.label }>林地类型</div>
                                <div className={ css.con }>旅游休闲基地</div>
                            </div>
                            <div className={ css.item }>
                                <div className={ css.label }>林地面积</div>
                                <div className={ css.con }>1500亩</div>
                            </div>
                            <div className={ css.item }>
                                <div className={ css.label }>出让年限</div>
                                <div className={ css.con }>20年</div>
                            </div>
                            <div className={ css.item }>
                                <div className={ css.label }>林地地址</div>
                                <div className={ css.con }>内蒙古自治区包头市(包头稀土高新区稀土大厦1602)</div>
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
                    <TabPane className={ css.tabContent } tab="标的基本信息" key="1">
                        <table className={ css.table }>
                            <tbody>
                                <tr>
                                    <td className={ css.grayBg }>权证类型 </td>
                                    <td>农村土地承包经营权证</td>
                                    <td className={ css.grayBg }>权属类型</td>
                                    <td>个人</td>
                                </tr>
                                <tr>
                                     <td className={ css.grayBg }>权证有效期限 </td>
                                    <td>2019-01-10至2040-01-09</td>
                                    <td className={ css.grayBg }>面积</td>
                                    <td>98亩</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>林种 </td>
                                    <td>用材林</td>
                                    <td className={ css.grayBg }>树种</td>
                                    <td>桉树</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>树龄 </td>
                                    <td>１０年</td>
                                    <td className={ css.grayBg }>蓄积量</td>
                                    <td>１０００</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>海拔 </td>

                                    <td>５００米</td>
                                    <td className={ css.grayBg }>出让年限</td>
                                    <td>２０年</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>配套设施 </td>
                                    <td className={ css.tLeft } colSpan="3">供水 已接通、供电 已接通、网络 已接通、附属设施 畜禽舍</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>周边环境 </td>
                                    <td className={ css.tLeft } colSpan="3"> 高速 0-10km、相关配套 仓储 / 物流机场 10-50km、高铁 10-50km、 铁路 10-50km</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>经营现状 </td>
                                    <td className={ css.tLeft } colSpan="3">地块适合何种经营 养殖、当地劳动力资源 一般、当地农民主要收入来源 外出务工、当地农民人均年纯收入 3000-5000元 </td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>用途分析 </td>
                                    <td className={ css.tLeft } colSpan="3">适合旅游、休闲度假、养殖业、畜牧业等开发</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>其他补充 </td>
                                    <td className={ css.tLeft } colSpan="3">适合旅游、休闲度假、养殖业、畜牧业等开发</td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPane>
                    <TabPane className={ css.tabContent } tab="标的交易信息" key="2">
                        <table className={ css.table }>
                            <tbody>
                                <tr>
                                    <td className={ css.grayBg }>林地编号 </td>
                                    <td>20200109992</td>
                                    <td className={ css.grayBg }>出让方式</td>
                                    <td>挂牌</td>
                                </tr>
                                <tr>
                                     <td className={ css.grayBg }>交易状况 </td>
                                    <td>未成交</td>
                                    <td className={ css.grayBg }>竞得方</td>
                                    <td>暂无</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>起始日期 </td>
                                    <td>2019-01-10</td>
                                    <td className={ css.grayBg }>截止日期</td>
                                    <td>2019-02-10</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>成交日期 </td>
                                    <td>2019-01-10</td>
                                    <td className={ css.grayBg }>溢价率</td>
                                    <td>暂无</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>起始价 </td>
                                    <td>362.00万元</td>
                                    <td className={ css.grayBg }>成交价</td>
                                    <td>暂无</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>保证金 </td>
                                    <td>88.20万元</td>
                                    <td className={ css.grayBg }>加价幅度</td>
                                    <td>10000万元</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>林地单价 </td>
                                    <td>暂无</td>
                                    <td className={ css.grayBg }>交易地点</td>
                                    <td>呼和浩特公共资源交易大厅</td>
                                </tr>
                                <tr>
                                    <td className={ css.grayBg }>其他补充 </td>
                                    <td className={ css.tLeft } colSpan="3">容积率为≤2.6</td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPane>
                    <TabPane className={ css.tabContent } tab="报名须知" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane className={ css.tabContent } tab="其他" key="4">
                        Content of Tab Pane 4
                    </TabPane>
                </Tabs>
                <div className={ css.imgWrap }>
                    <YcImage imgUrl={ imgDemo } />
                </div>
            </div>
        </div>
    );
}