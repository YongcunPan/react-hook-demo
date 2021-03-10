import React from 'react';
import Swiper from 'react-id-swiper';
import * as R from 'ramda';
import css from './notices-scroll.module.less';

export const NoticesScroll =(props)=>{

    let item ={
        title:'广西三明东升国有林场转让',
    };
    let items =[];
    for (var i = 0; i < 10; i++) {
        items = R.concat(items,[item]);
    };

    const params = {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        }
    }


    return (
        <div className={ css.list }>
            <Swiper { ...params }>
                {
                    items.map((opt,index)=>
                        <div className={ css.item } key={ index }>
                            <div className={ css.title }>{ index+1 }. { opt.title }</div>
                        </div>
                    )
                }
            </Swiper>
        </div>
    );
}