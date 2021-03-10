import React,{  useState,Fragment,useEffect} from 'react';
// import { useEffectOnce } from 'react-use';
import { useHistory } from 'react-router-dom';
import { YcLoading } from '../../components';
import { useDataApi } from '../../hook/dataApi';
import css from './view.module.less';


export const View = (props)=>{

    const [{data,...dataStatus},updateParams] = useDataApi();
    const { location: { pathname } } = useHistory();
    const [id,setId] = useState();

    useEffect(() => {
        let _id = pathname.split('/').join('').split('view')[1];
        if (_id) {
            setId(_id);
        };
    },[pathname]);

    useEffect(()=>{
        if (id) {
            updateParams({url:'/api/getNewsDetail',method:'post',data:{id:id}});
        }
    },[id,updateParams]);

    return (
        <div className={ css.viewBody }>
            {
                dataStatus.isLoading?<YcLoading />:
                <Fragment>
                    <div className={ css.descWrap }>
                        <div className={ css.title }> { data.title }</div>
                        <p><span>发布时间：{ data.createtime }</span><span>浏览量：{ data.read_num }</span></p>
                    </div>
                    <div className={ css.icontent } dangerouslySetInnerHTML = {{ __html: data.content }}>
                    </div>
                </Fragment>
            }
        </div>
    );
}