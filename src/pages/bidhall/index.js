import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { YcImage, YcRadio, YcPagination, Breadcrumb } from '../../components';
import { BidHallList } from './components';
import { useDataApi } from '../../hook/dataApi';
import headerImg from 'aliasimgurl/complex-header.png';
import css from './index.module.less';


export const BidHall = () => {


    let order = `综合排序,推出时间,挂牌价格`;
    order = order.split(',').map((opt, index) => ({ name: opt, value: index.toString() }));

    const [searchValue, setSearch] = useState({});

    function updateValue(value) {
        let _v = { ...searchValue, ...value };
        setSearch(_v);
    }


    const [{ data }] = useDataApi({ url: '/api/marketHeader', method: 'post', data: { c_id: 145, type: 1 }, initialData: [] });
    const [searchLable, setSearchLabel] = useState([]);

    const [codes] = useState(['province_id', 'type', 'status', 'status2', 'time', 'price']);


    useEffect(() => {
        function updateLabel(argument) {
            let _res = data.map((opt, index) => ({
                name: opt.name,
                code: codes[index],
                items: opt.son.map((o, i) => ({
                    name: o.name,
                    value: i.toString()
                }))
            }));
            setSearchLabel(_res);

        };
        if (data && data.length > 0) {
            updateLabel();
            console.log('-----------------setSearchLabel-------------------')
        };
    }, [data, codes]);

    let { push } = useHistory();

    const toViewPage = (opt) => {
        console.log(opt);
        push('/bidhall/view');
    };

    const [{ isLoading /*,...listData */ }, updateParams] = useDataApi();

    useEffect(() => {
        updateParams({
            url: '/api/biddingList',
            method: 'post',
            data: {
                disclosure_type: 1,
                province_id: 0,
                categry_type: 1,
                status: 1,
                price: 6,
                time:1,
                timeorder:1,
                priceorder:1,
                ...searchValue
            }
        });
    }, [searchValue, updateParams]);


    if (!isLoading) {
        // console.log(listData)
    }

    return (
        <div className="container">
            <YcImage imgUrl={ headerImg } />
            <Breadcrumb list={ {name:'中标公示'} } />
            <div className={ css.searchWrap }>
                {
                    searchLable.map((opt,index)=>
                        <YcRadio
                            key={ index }
                            items={ opt.items }
                            className={ css.searchItem }
                            label={ opt.name }
                            name={ opt.code }
                            value={ searchValue[opt.code] || '' }
                            more
                            onChange={ updateValue } />
                    )
                }
            </div>
            <div className={ css.listWrap }>
                <div className={ css.title }>
                    {
                        order.map((opt,index)=>
                            <i  onClick={ ()=>updateValue({ order:opt.value }) }
                                className={ searchValue.order===opt.value || (!searchValue.order && index ===0)?css.active:'' }
                                key={ index } >{ opt.name }</i>
                        )
                    }
                </div>
                <BidHallList itemsLength={ 16 } toViewPage={ toViewPage } />
                <YcPagination style={ {margin:'30px 0'} } />
            </div>
        </div>
    );
}