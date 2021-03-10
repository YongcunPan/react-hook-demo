import React,{useEffect,useState} from 'react';
import * as R from 'ramda';
import { Select } from 'antd';
import { useEffectOnce } from 'react-use';
import { ServicesModel } from '../common';
// import { forkJoin } from 'rxjs';

export const AddressItem = (props)=>{
    const [data,setData] = useState([]);
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
    const [values,setValues ] = useState([]);
    const { value,size } = props;

    useEffect(()=>{
        ServicesModel.getCityData({pid:0}).subscribe({
            next:(res)=>{
                setData(res);
            }
        });
    },[]);
    useEffectOnce(()=>{
        console.log(value);
        // TODO 如果有初始值，加载相应的数据
    });
    const handleChange = (opt)=>{
        let {index,v} = opt;
        let _v = values;
        _v[index] = v;
        _v = R.take((1+index),_v);
        setValues(_v);
        props.onChange&&props.onChange(_v);
        if (index===2) {
            return console.log(_v);
        };
        ServicesModel.getCityData({pid:v}).subscribe({
            next:(res)=>{
                if (index===0) {
                    setData1(res);
                    setData2([]);
                }else{
                    setData2(res);
                }
            }
        });
    }

    return (
        <div style={{display:'flex'}}>
            <div style={{flex:1}}>
                <Select style={{width:'100%'}}
                    placeholder="请选择"
                    size={ size || 'large' }
                    onChange={ v=>handleChange({v,index:0}) }>
                    {
                        (data).map(opt=>
                            <Select.Option key={ opt.id } value={ opt.id }> { opt.name }</Select.Option>
                        )
                    }
                </Select>
            </div>
            {
                data1.length>0 &&
                <div style={{flex:1,marginLeft:8}}>
                    <Select style={{width:'100%'}}
                        placeholder="请选择"
                        size={ size || 'large' }
                        onChange={ v=>handleChange({v,index:1}) }>
                        {
                            (data1).map(opt=>
                                <Select.Option key={ opt.id } value={ opt.id }> { opt.name }</Select.Option>
                            )
                        }
                    </Select>
                </div>
            }{
                data2.length>0 &&
                <div style={{flex:1,marginLeft:8}}>
                    <Select style={{width:'100%'}}
                        placeholder="请选择"
                        size={ size || 'large' }
                        onChange={ v=>handleChange({v,index:2}) }>
                        {
                            (data2).map(opt=>
                                <Select.Option key={ opt.id } value={ opt.id }> { opt.name }</Select.Option>
                            )
                        }
                    </Select>
                </div>
            }
        </div>
    )
}