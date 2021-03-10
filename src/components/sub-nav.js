import React, { /*useState, useEffect*/ } from 'react';
import { NavLink/*, useHistory */} from 'react-router-dom';
// import { useDataApi } from '../hook/dataApi';
// import * as R from 'ramda';
import css from './sub-nav.module.less';

export const SubNav = (props) => {

    const { title, subnav } = props;
    // const { setPageError,changNav } = props;

    // const [title,setSubTitle] = useState('导航');
    // const [ subnav,setSubnav ] = useState([]);
    // const [cId,setCid] = useState();

    // let history = useHistory();
    // let { location: { pathname } } = history;
    // // let _pathname = pathname.split('/').filter((opt,index)=>index<3).join('/');


    // useEffect(()=>{
    //     if (pathname) {
    //         console.log(pathname)
    //         let cId = pathname.split('/')[2];
    //         if (cId) {
    //             setCid(cId)
    //         };
    //     };
    // },[pathname]);

    // const [{data,isLoading},updateParams] = useDataApi();
    // useEffect(()=>{
    //     if (cId) {
    //         console.log(cId,'---------------------------getSUbNav---------------------------');
    //         updateParams({url:'/api/fgetnav',method:'post',initialData:[],data:{c_id:cId,type:3}});
    //     }
    // },[cId]);

    // useEffect(()=>{
    //     if (data && data.son && !isLoading) {
    //         let _pathname = pathname.split('/').filter((opt,index)=>index<3).join('/');
    //         console.log(_pathname)
    //         let nav = data.son.map(opt=>{
    //             return ({
    //                 ...opt,
    //                 path:`${_pathname}/${opt.id}`,
    //                 label:opt.name
    //             })
    //         });
    //         setSubTitle(data.name);
    //         setSubnav(nav);
    //         changNav(nav);
    //         console.log(nav,'-----------------------subnav--------------------------------------')
    //     };
    // },[data,isLoading,pathname,changNav]);



    // useEffect(()=>{
    //     let _mainNav = subnav.map(opt=>opt.path);
    //     let _pathname = pathname.split('/').filter((opt,index)=>index<4).join('/');
    //     if (!R.includes(_pathname,_mainNav)) {
    //         let _res = R.find(opt=>R.includes(pathname,opt))(_mainNav);
    //         console.log(_res)
    //         if (_res) {
    //             /*const { replace } = history;
    //             replace(_res);*/
    //             console.log('-----------------needReplace-----------------------',pathname);
    //         }else{
    //             if (!R.includes('view',pathname) ) {
    //                 if (!R.isEmpty(subnav)) {
    //                     console.log(subnav)
    //                     console.log('------------------setPageError-------------------');
    //                     // setPageError(true);
    //                 }
    //             }else{
    //                 // setPageError(false);
    //             }
    //         }

    //     };

    // },[subnav,history,pathname,setPageError,data,isLoading])

    return (
        <div className={ css['sub-nav'] }>
            <div className={ css.title }>{ title }</div>
            <div className={ css.navList }>
                {
                    subnav.map((opt,index)=>
                        <NavLink key={ index } to={ opt.path }
                            className={ css.nav } activeClassName={ css.selected }>
                            <div>
                                <span>{ opt.label }</span>
                            </div>
                        </NavLink>
                    )
                }
            </div>
        </div>
    );
}