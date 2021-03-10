import React from 'react';
import { Avatar } from 'antd';
import { NavLink/*, useHistory */} from 'react-router-dom';
import { useUserInfo } from '../../../hook';
import css from './UserInfo.module.less';

export const UserInfo  = ()=>{

    const [data] = useUserInfo();
    return (
        <div className={ css.userinfo }>
            <h3>个人中心</h3>
            <div>
                <Avatar icon="user" size={ 72 } />
            </div>
            <div className={ css.phone }>{data.mobile}</div>
            <div className={ css.company }>北京致心赢创科技有限公司</div>
            <NavLink className={ css.btn } to="/account/setting/userauth" >马上认证</NavLink>
        </div>

    )
}