import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { UserInfo,SubNav,Card } from '../components';
import { Button } from 'antd';
import { useUserInfo } from '../../../hook';
import styles from './index.module.less';
import css from '../index.module.less';

export const Setting = ()=>{

    let { push } = useHistory();
    const [data] = useUserInfo();
    console.log(data)
    const [actions,setActions] = useState([]);

    useEffect(()=>{
        try{
            let _actions = [{
                    label:'用户名',
                    content:data.nickname,
                    action:()=>push('/account/setting/username')
                },{
                    label:'真实姓名',
                    content:data.username,
                    action:()=>console.log('xxx')
                },{
                    label:'手机号码',
                    content:data.mobile,
                    action:()=>push('/account/setting/mobile')
                },{
                    label:'登录密码',
                    content:'******',
                    action:()=>push('/account/setting/password')
                },{
                    label:'注册类别',
                    content:'类别',
                    action:()=>console.log('xxx')
                },{
                    label:'身份证号码',
                    content:'9191919928387474838'
                },{
                    label:'注册身份',
                    content:'身份',
                    action:data.identity_type!=='5'?()=>push('/account/setting/identity'):null
                },{
                    label:'行业分类',
                    content:'行业',
                    action:data.identity_type!=='5'?()=>push('/account/setting/trade'):null
                },{
                    label:'邮箱',
                    content:'邮箱',
                    action:()=>push('/account/setting/email')
                },{
                    label:'证件照片',
                    content:'照片',
                    action:()=>console.log('xxx')
                }];
            setActions(_actions);
        }catch(e){

        };
    },[data,push]);

    return (
        <div className={  css.body}>
            <div className={css.sideBar }  >
                <UserInfo />
                <SubNav />
            </div>
            <div className={ css.mainBody }>
                <Card title="基本信息">
                    <div className={ styles.items }>
                        {
                            actions.map((opt,index)=>
                                <div key={ index } className={ styles.item }>
                                    <div className={ styles.label }>{ opt.label }:</div>
                                    <div className={ styles.content }>{ opt.content }</div>
                                    {
                                        !!opt.action &&
                                        <div className={ styles.action }  >
                                            <Button onClick={ opt.action }>修改</Button>
                                        </div>
                                    }
                                </div>
                            )
                        }
                    </div>
                </Card>
            </div>
        </div>
    )
}