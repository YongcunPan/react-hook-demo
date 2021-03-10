import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
// import { useEffectOnce } from 'react-use';
import * as R from 'ramda';
import { YcPagination,YcLoading } from '../../../components';
import { View } from '../../view/index';
import { useDataApi } from '../../../hook/dataApi';
import css from './data-list.module.less';


export const DataList = (props) => {
    const { subnav, subnavTitle } = props;
    const [{data,...dataStatus},updateParams] = useDataApi();

    function mookData(argument) {
        let item = {
            title: '广西三明东升国有林场转让',
            createtime: '2020-02-23'
        };
        let _items = [];
        for (var i = 0; i < 7; i++) {
            _items = R.concat(_items, [item]);
        };
        return _items;
    }

    const [items,setItems] = useState(()=>mookData());

    const { location: { pathname }, push } = useHistory();

    const [ids, setIds] = useState({});
    const [isViewPage, setIsViewPage] = useState(false);
    useEffect(() => {
        let _array = pathname.split('/');
        let p_id = _array[2];
        let c_id = _array[3];
        let v_id = _array[5];
        setIds({ pId: p_id, cId: c_id,vId:v_id });
        setItems(mookData());
        if (R.includes('view', pathname)) {
            console.log('------------------------setViewPage---------------------------------');
            setIsViewPage(true);
        } else {
            setIsViewPage(false);
        };
    },[pathname]);

    const [title, setTitle] = useState(subnavTitle);

    useEffect(() => {
        function onListenMainNav(argument) {
            let _pathname = pathname.split('/').filter((opt, index) => index < 4 && opt !== 'view').join('/');
            let current = R.find(R.propEq('path', _pathname))(subnav) || subnav[0];
            const { label } = current;
            label && setTitle(label);
        };
        if (!R.isEmpty(subnav)) {
            onListenMainNav();
        } else {
            setTitle(subnavTitle);
        };
    }, [subnav, pathname, subnavTitle]);



    function onChange(v) {
        console.log(v);
        console.log(ids);
        // console.log(cId)
    };

    function goDetail(v) {
        const { cId } = ids;
        if(!cId){
            return;
        };
        const { id } = v;
        push(`${pathname}/view/${id}`);

    }



    useEffect(()=>{
        const {pId,cId,vId}= ids;
        if (cId && !vId) {
            updateParams({url:'/api/newsList',method:'post',data:{c_id2:pId,type_id:cId,page:1,pagesize: 10 }});
        };
    },[ids,updateParams]);

    useEffect(()=>{
        const{isLoading} =dataStatus;
        if (!isLoading ) {
            setItems(data.data || []);
        };
    },[data,dataStatus]);


    return (
        <div className={ css.wrap }>
            <div className={ css.title }>{ title }</div>
            {
                isViewPage?<View />:
                <Fragment>
                    <div className={ css.list }>
                        {
                            dataStatus.isLoading ?<YcLoading />:
                            items.map((opt,index)=>
                                <div key={ index } className={ css.item }>
                                    <div className={ css['data-title'] } onClick={ ()=>goDetail(opt) } >{ opt.title }</div>
                                    <div className={ css['data-time'] }>{ opt.createtime }</div>
                                </div>
                            )
                        }
                    </div>
                    <YcPagination  onChange={onChange} />
                </Fragment>
            }

        </div>
    );
}