import React,{ useState,useEffect } from 'react';
import { /*NavLink,*/useHistory } from 'react-router-dom'
import { YcImage, YcRadio, YcPagination,Breadcrumb } from '../../components';
import { ProjectMarket } from '../components/home';
// import { Breadcrumb } from 'antd';
import { useDataApi } from '../../hook/dataApi';
import headerImg from 'aliasimgurl/complex-header.png';
import css from './index.module.less';


export const Complex = ()=>{


    let order= `综合排序,推出时间,参考价格,林地面积`;
    order = order.split(',').map((opt,index)=>({name:opt,value:index.toString()}));

    const [searchValue,setSearch] =useState({});

    function updateValue(value) {
        let _v = {...searchValue,...value};
        setSearch(_v);
    };

    const [{ data }] = useDataApi({ url: '/api/marketHeader', method: 'post', data: { c_id: 146, type: 2 }, initialData: [] });
    const [searchLable, setSearchLabel] = useState([]);

    const [ codes ] = useState(['province_id', 'type','type2', 'status', 'status2','price', 'time']);


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
    }, [data,codes]);

    let { push } = useHistory();

    const toViewPage = (opt)=>{
        // console.log(opt);
        push('/complex/view');
    };


    const [{ isLoading /*,...listData */ }, updateParams] = useDataApi();

    useEffect(() => {
        updateParams({
            url: '/api/forestryList',
            method: 'post',
            data: {
                disclosure_type: 1,
                province_id: 0,
                categry_type: 1,
                status: 1,
                price: 6,
                time:1,
                measure_type:1,
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
            <Breadcrumb list={ {name:'发布信息'} } />
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
                <ProjectMarket itemsLength={ 16 }  toViewPage={ toViewPage } />
                <YcPagination style={ {margin:'30px 0'} } />
            </div>
        </div>
    );
}