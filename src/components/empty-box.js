import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'antd';

export const EmptyBox = (props)=>{
    let history = useHistory();

    const { onClick } = props;

    function handleClick() {
        onClick?onClick():history.push("/index");

    }
    const { style,message,btnText } = props;
    return (
        <div style={ {height:300,textAlign:'center',display:'flex',alignItems:'center', justifyContent:'center',...style} }>
            <div>
                <div style={{marginBottom:30 }}>{ message || 'Page is not found!' }</div>
                <div>
                    <Button type="primary" onClick={handleClick}>{btnText||'回首页'}</Button>
                </div>
            </div>
        </div>
    );
}