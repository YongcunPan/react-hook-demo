import React,{ useState,useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { YcImage, YcRadio, YcPagination,Breadcrumb,/*CardBox,DefaultList*/ } from '../../components';
import { BiddingList } from '../components/index';
// import { Breadcrumb } from 'antd';
import { useDataApi } from '../../hook/dataApi';
import headerImg from 'aliasimgurl/bidding_header.png';
import css from './index.module.less';


export const Bidding = ()=>{

    /*let order= `综合排序,推出时间,参考价格`;
    order = order.split(',').map((opt,index)=>({name:opt,value:index.toString()}));*/

    const [searchValue,setSearch] =useState({});

    function updateValue(value) {
        let _v = {...searchValue,...value};
        setSearch(_v);
    }



    const [{ data }] = useDataApi({ url: '/api/marketHeader', method: 'post', data: { c_id: 144, type: 1 }, initialData: [] });
    const [searchLable, setSearchLabel] = useState([]);

    const [ codes ] = useState(['industry_type', 'time', 'province_id']);


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

    const [ { isLoading,...listData },updateParams ]  =useDataApi();

    useEffect(() => {
        updateParams({url:'/api/projectList',method:'post',data:{type:2,province_id:0,industry_type:0,time:0, ...searchValue}});
    }, [searchValue,updateParams]);


    let { push } = useHistory();


    function toView(opt) {
        // const {  }
        push('/bidding/view');
    }

    return (
        <div className="container">
            <YcImage imgUrl={ headerImg } />
            <Breadcrumb list={ {name:'采购信息'} } />
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
                <BiddingList
                    data={ listData.data.data || [] }
                    toView={ toView } />
                <YcPagination
                    total={ listData.data.count || 0 }
                    current={ listData.data.pagenum }
                    style={ {margin:'30px 0'} } />
            </div>

        </div>
    );
}