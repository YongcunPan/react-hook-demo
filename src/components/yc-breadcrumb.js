import React from 'react';
import { Breadcrumb as Bd } from 'antd';
import { NavLink } from 'react-router-dom';
import { isNil,isEmpty,is } from 'ramda';

export const Breadcrumb = ({list})=>{
    const bdList = isNil(list)||isEmpty(list)?[]:(is(Array,list)?list:[list]);
    return (
        <Bd separator="" style={ {margin:'10px 0'} }>
            <Bd.Item>当前位置</Bd.Item>
            <Bd.Separator>:</Bd.Separator>
            <Bd.Item>
                <NavLink to="/">首页</NavLink>
                <Bd.Separator>></Bd.Separator>
            </Bd.Item>
            {
                bdList.map((opt,index)=>
                    <Bd.Item key={ index }>
                        {
                            opt.path?
                            <NavLink to={ opt.path }>{ opt.name || opt }</NavLink>:
                            opt.name || opt
                        }{
                            index+1!== bdList.lenght &&
                            <Bd.Separator>></Bd.Separator>
                        }
                    </Bd.Item>
                )
            }
        </Bd>
    )
}
