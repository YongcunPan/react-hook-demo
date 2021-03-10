import React from 'react';
import css from './footer.module.less';

export const Footer = ()=>{
    return (
        <div className={ css.footer }>
            <div className="container">
                <div className={ css.footerList }>
                    <div className={ css.item }>
                        <h3>在线招标</h3>
                        <div className={ css.desc }>在线招标平台，提供网络交易、 支付与结算等专业服务。</div>
                        <div className={ css.btn }>
                            <a href="###">
                                <i className="iconfont iconpaimai" />
                                <span>欢迎在线招标</span>
                            </a>
                        </div>
                    </div>
                    <div className={ css.item }>
                        <h3>在线招标</h3>
                        <div className={ css.desc }>用户可在线发布招标、竞价、挂牌及拍卖等信息。 </div>
                        <div className={ css.btn }>
                            <a href="###">
                                <i className="iconfont iconbianji" />
                                <span>欢迎在线发布</span>
                            </a>
                        </div>
                    </div>
                    <div className={ css.item }>
                        <h3>关于我们</h3>
                        <div className={ css.desc }>了解更多关于我们的企业信息、相关资讯、文化及合作。</div>
                        <div className={ css.btn }>
                            <a href="###">
                                <i className="iconfont iconwomen" />
                                <span>欢迎走进我们</span>
                            </a>
                        </div>
                    </div>
                    <div className={ css.item }>
                        <h3>联系我们</h3>
                        <div className={ css.desc }>欢迎来电咨询相关业务，欢迎实地考察。</div>
                        <div className={ css.btn }>
                            <a href="###">
                                <i className="iconfont icondianhua" />
                                <span>欢迎联系我们</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ css.footerBottom }>
                <div>
                    © 2020 版权所有 中国林业产业服务与交易平台　京ICP备20004740号
                </div>
                <div>
                    运营服务：北京中镇生产力科技中心 中镇枫林规划设计研究院
                </div>
                <div>
                    技术支持：中镇生态科技河北有限公司
                </div>
            </div>
        </div>
    );
}