import React,{ useState } from 'react';
import Swiper from 'react-id-swiper';
// import * as R from 'ramda';
import { TypeAndRegin } from './index';
import { LoginForm } from '../../../components';
import { Icon } from 'antd';
import demoimg from 'aliasimgurl/img_index_scroll.png';
import demoimg2 from 'aliasimgurl/img_index_scroll_2.png';
import demoimg3 from 'aliasimgurl/img_index_scroll_3.png';
import css from './index-focus.module.less';

export const IndexFocus =(props)=>{


    const [data/*,setData*/] = useState([{imgUrl:demoimg},{imgUrl:demoimg2},{imgUrl:demoimg3}]);

    const onError = (e)=>{
        console.log(e);
    }

    const params = {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: `.${css['swiper-pagination']}`,
            clickable: true,
            renderBullet:(i,className)=>`<span class='${className} ${css['pagination-item']}'></span>`
        },
    }


    return (
        <div className={ css.list }>
            <Swiper { ...params }>
                {
                    data.map((opt,index)=>
                        <div className={ css.item } key={ index }>
                            <img style={ {fontSize:0,display:'block'} }
                                onError={ (e)=>onError(e) } src={ opt.imgUrl } alt=""/>
                        </div>
                    )
                }
            </Swiper>
            <div className={ css['type-and-regin'] }>
                <TypeAndRegin />
            </div>
            <div className={ css.loginForm }>
                <div className={ css.extInfo }>
                    <div className={ css.extInfoTitle }>登录之后即可享受</div>
                    <div className={ css.extInfoList }>
                        <div className={ css.listItem }><Icon type="check" />查询招标项目</div>
                        <div className={ css.listItem }><Icon type="check" />发布招标项目</div>
                        <div className={ css.listItem }><Icon type="check" />跟踪招标项目</div>
                        <div className={ css.listItem }><Icon type="check" />发布采购项目</div>
                        <div className={ css.listItem }><Icon type="check" />精品项目推荐</div>
                    </div>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}