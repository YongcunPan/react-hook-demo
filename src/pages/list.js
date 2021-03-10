import React,{ useState,useEffect,useRef } from 'react';
// import {useEffectOnce} from 'react-use';
import { useHistory } from 'react-router-dom';
import { SubNav/*,EmptyBox */} from '../components';
import { DataList } from './components/list';
import { useDataApi } from '../hook/dataApi';
import css from './index.module.less';

export const List = (props)=>{
    const [{data,isLoading},updateParams] = useDataApi();

    const {location:{ pathname },replace} = useHistory();
    const [ subnav,setSubnav ] = useState([]);
    const [title,setSubTitle] = useState('导航');

    let latestProps = useRef(pathname);
      useEffect(() => {
        latestProps.current = pathname;
    });

    const [ids,setIds] = useState({});


    useEffect(()=>{
        let _array=pathname.split('/');
        let p_id = _array[2];
        let c_id = _array[3];
        if (p_id) {
            setIds({pId:p_id,cId:c_id});

        };
    },[pathname]);

    const { pId } = ids;
    useEffect(()=>{
        if (pId) {
            updateParams({url:'/api/fgetnav',method:'post',initialData:[],data:{c_id:pId,type:3}});
        }
    },[pId,updateParams]);

    const [allLoading,setAllLoading] = useState(false);

    useEffect(()=>{
        const { pId,cId } = ids;
        function updateSubnav(){
            let _pathname = latestProps.current.split('/').filter((opt,index)=>index<3).join('/');
            let nav = data.son.map(opt=>{
                return ({
                    ...opt,
                    path:`${_pathname}/${opt.id}`,
                    label:opt.name
                })
            });
            setSubTitle(data.name);
            if (!cId && nav.length>0) {
                return replace(nav[0]['path']);
            };
            setSubnav(nav);
            setAllLoading(true);
        };

        if (pId && !isLoading && data.id ===parseInt(pId,10)) {
            updateSubnav();
        };
    },[data,isLoading,ids,replace,setAllLoading]);


    return (
        // pageError?<EmptyBox />:
        <div className="container">
            <div className={ css['list-page'] } >
                <div className={ css['sub-nav'] } style={{/* display:subnav.length>0?'block':'none'*/ }}>
                    <SubNav  subnav={ subnav } title={ title }  />
                </div>
                <div className={ css['data-list'] }>
                    {
                        allLoading &&
                        <DataList subnav={ subnav } subnavTitle={ title } />
                    }
                </div>
            </div>
        </div>
    );
}