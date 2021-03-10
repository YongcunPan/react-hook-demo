import React, { useState, useEffect } from 'react';
import { useEffectOnce } from 'react-use';
import { /*NavLink,*/useHistory } from 'react-router-dom'
import { YcImage, YcRadio, YcPagination,Breadcrumb } from '../../components';
import { MarketList } from '../components/index';
import { getSearch } from '../../helps';
import { useDataApi } from '../../hook/dataApi';
import headerImg from 'aliasimgurl/complex-header.png';
import css from './index.module.less';


export const Market = () => {
    let { push,location:{search} } = useHistory();
    const [searchValue, setSearch] = useState({});
    useEffectOnce(()=>{
        let _s= getSearch(search);
        setSearch({...searchValue,..._s});
    });

    function updateValue(value) {
        let _v = { ...searchValue, ...value };
        setSearch(_v);
    }

    const [{ data/*,...aStatus*/ }] = useDataApi({ url: '/api/marketHeader', method: 'post', data: { c_id: 143, type: 1 }, initialData: [] });
    const [searchLable, setSearchLabel] = useState([]);
    const [ codes ] = useState(['infor_type', 'industry_type', 'time', 'province_id']);


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
        };
    }, [data,codes]);

    const [ { isLoading,...listData },updateParams ]  =useDataApi({});

    useEffect(() => {
        updateParams({url:'/api/projectList',method:'post',data:{type:2,province_id:0,infor_type:0,time:0,page:1,industry_type:0, ...searchValue}});
    }, [searchValue,updateParams]);



    function toView(opt) {
        push('/market/view');
    }

    return (
        <div className="container">
            <YcImage imgUrl={ headerImg } />
            <Breadcrumb list={ {name:'招标信息'} } />
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
                <MarketList itemsLength={ 16 } data={ listData.data.data || [] } toView={ toView } />
                <YcPagination
                    total={ listData.data.count || 0 }
                    current={ listData.data.pagenum }
                    style={ {margin:'30px 0'} } />
            </div>
        </div>
    );
}