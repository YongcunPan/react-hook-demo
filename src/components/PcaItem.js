import React,{/*useEffect,useState*/} from 'react';
import * as R from 'ramda';
import { Cascader } from 'antd';
import {getDeepProp} from "../helps";

const options = getCityData(getDeepProp('city_data', window.yongcun||{}));


export const PcaItem = (props)=>{

    return (
        <Cascader options={ options } style={{ minWidth:360 }}
            size="large" {...props} />
    )
}

function getCityData(city_data) {
    if (R.isNil(city_data)) {
        return [];
    }

    return formatCityData(city_data);
}

function formatCityData(data) {
    const keys = R.keys(data);
    return keys.map(k => (Object.assign({
        value: k,
        label: data[k].name || data[k]
    }, data[k].child ? { children: formatCityData(data[k].child) } : void 0)))
}