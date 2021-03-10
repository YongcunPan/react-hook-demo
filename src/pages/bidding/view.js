import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffectOnce, useToggle } from 'react-use';
import { useForm, Controller } from "react-hook-form";
import { YcImage, CardBox, DefaultList,Breadcrumb } from '../../components';
import { Modal, Input, Button } from 'antd';
import { useIsLogin } from '../../hook';
import headerImg from 'aliasimgurl/bidding_header.png';
import css from './index.module.less';


export const BiddingView = () => {
    const [isLogin] = useIsLogin();
    const [visible, toggle] = useToggle(false);

    function info() {
        Modal.success({
            title: '欢迎来电咨询',
            centered: true,
            content: (
                <div>
                    <p>联 系 人 ： 张三</p>
                    <p>联系电话：131247758234</p>
                    <p>联系邮箱：58399101@qq.com</p>
                </div>
            ),
            onOk() {},
        });
    }

    useEffectOnce(() => {
        function scrollToTop(argument) {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 8);
            };
        };
        scrollToTop();
    });

    const { handleSubmit, control,getValues,setValue } = useForm(); // initialise the hook
    const onSubmit = data => {
        console.log(data);
    };

    const handleReset = ()=>{
        let values = getValues();
        let names= Object.keys(values);
        for (var i = 0; i < names.length; i++) {
            setValue(names[i],'');
        }
    }



    return (
        <div className="container">
            <YcImage imgUrl={ headerImg } />
            <Breadcrumb list={ {name:'采购信息'} } />
            <div className={ css.innerMain }>
                <div className={ css.listWrap }>
                    <div className={ css.viewWrap }>
                        <div className={ css.titleInfo }>
                            <h2 className={ css.viewTitle }>宿城区位于宿迁经济技术开发区2019宿开工F3</h2>
                            <p>
                                <i className="iconfont iconweizhi"></i>
                                <span>江苏宿迁</span>
                                <i className="iconfont iconrili"></i>
                                <span>2019-09-02</span>
                                <i className="iconfont iconshoucangon"></i>
                                <span>收藏</span>
                                <i className="iconfont iconfenxiang"></i>
                                <span>分享</span>
                                <i className="iconfont icondayin"></i>
                                <span>打印</span>
                            </p>
                        </div>
                        <div className={ css.extInfo }>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>项目编号</th>
                                        <td>BH0000000000</td>
                                        <th>采购人/单位</th>
                                        <td>中镇生态</td>
                                    </tr>
                                    <tr>
                                        <th>采购物品</th>
                                        <td>机器</td>
                                        <th>采购数量</th>
                                        <td>100台</td>
                                    </tr>
                                    <tr>
                                        <th>目标价格</th>
                                        <td>
                                            {
                                                isLogin?
                                                <span>￥200000000</span>:
                                                <span>
                                                    <NavLink to="/login">登录</NavLink>
                                                    后可查看
                                                </span>
                                            }
                                        </td>
                                        <th>采购时间</th>
                                        <td>2020-06-20</td>
                                    </tr>
                                    <tr>
                                        <th>联系方式</th>
                                        <td>
                                            {
                                                isLogin?
                                                <a onClick={ info } href="###">点击查看</a>:
                                                <span>
                                                    <NavLink to="/login">登录</NavLink>
                                                    后可查看
                                                </span>
                                            }
                                        </td>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={ css.viewCon }>
                            <p>阮富仲在贺电中表示，越中建交70年来，两党、两国和两国人民并肩携手，为各自国家民族解放和社会主义建设事业成功作出了贡献。不断巩固和发展好越中关系是双方肩负的历史责任，符合两国人民的共同愿望。越方始终把发展对华关系置于外交政策的头等优先，坚信在两党两国领导人的直接关心和指导下，双方全面战略合作伙伴关系将不断提高到新的水平</p>
                            <p>阮富仲在贺电中表示，越中建交70年来，两党、两国和两国人民并肩携手，为各自国家民族解放和社会主义建设事业成功作出了贡献。不断巩固和发展好越中关系是双方肩负的历史责任，符合两国人民的共同愿望。越方始终把发展对华关系置于外交政策的头等优先，坚信在两党两国领导人的直接关心和指导下，双方全面战略合作伙伴关系将不断提高到新的水平</p>
                            <p>阮富仲在贺电中表示，越中建交70年来，两党、两国和两国人民并肩携手，为各自国家民族解放和社会主义建设事业成功作出了贡献。不断巩固和发展好越中关系是双方肩负的历史责任，符合两国人民的共同愿望。越方始终把发展对华关系置于外交政策的头等优先，坚信在两党两国领导人的直接关心和指导下，双方全面战略合作伙伴关系将不断提高到新的水平</p>
                        </div>
                    </div>
                </div>
                <div className={ css.sideBar }>
                    <div className={ css.countdown }>
                        <div className={  css.title}>距离报名结束还剩</div>
                        <div className={ css.count }>10天</div>
                        <div className={ css.btnWrap }>
                            <Button type="primary" >马上报价</Button>
                        </div>
                    </div>
                    <CardBox title="其它采购信息" more={ ()=>console.log('其它采购信息') }>
                        <DefaultList />
                    </CardBox>
                </div>
            </div>
            <Modal
                title="征集意向投资方"
                visible={ visible }
                onOk={ toggle }
                onCancel={ toggle }
                footer={ null }
                centered destroyOnClose mask maskClosable={ false }>
                <form onSubmit={handleSubmit(onSubmit)} className={ css.formWrap }>
                    <div className={ css.formItem }>
                        <div className={ css.formLable }>
                            联系人：
                        </div>
                        <div className={ css.formItemCon }>
                            <Controller
                                as={<Input style={{width:'100%'}} />}
                                name="name"
                                control={control}
                                placeholder="请输入联系人姓名"
                                defaultValue="" />
                        </div>
                    </div>
                    <div className={ css.formItem }>
                        <div className={ css.formLable }>
                            联系电话：
                        </div>
                        <div className={ css.formItemCon }>
                            <Controller
                                as={<Input style={{width:'100%'}} />}
                                name="phone"
                                control={control}
                                placeholder="请输入联系电话"
                                defaultValue="" />
                        </div>
                    </div>
                    <div className={ css.formItem }>
                        <div className={ css.formLable }>
                            拟投资金额（万元）：
                        </div>
                        <div className={ css.formItemCon }>
                            <Controller
                                as={<Input style={{width:'100%'}} />}
                                name="monney"
                                control={control}
                                placeholder="请输入投资金额"
                                defaultValue="" />
                        </div>
                    </div>
                    <div className={ css.formItem }>
                        <div className={ css.formLable }>
                            电子邮件：
                        </div>
                        <div className={ css.formItemCon }>
                            <Controller
                                as={<Input style={{width:'100%'}} />}
                                name="email"
                                control={control}
                                placeholder="请输入电子邮件"
                                defaultValue="" />
                        </div>
                    </div>
                    <div className={ css.formItem }>
                        <div className={ css.formLable }>
                            相关问题咨询：
                        </div>
                        <div className={ css.formItemCon }>
                            <Controller
                                as={<Input.TextArea  />}
                                name="question"
                                control={control}
                                placeholder="请简单填写您的意向"
                                defaultValue="" />
                        </div>
                    </div>
                    <div className={ css.btnWrap }>
                        <div className={ css.btnInner }>
                            <Button type="primary" htmlType="submit">提交</Button>
                            <Button onClick={ handleReset }  >重置</Button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}