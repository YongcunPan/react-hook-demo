import React from 'react';
import { Input, Select } from 'antd';

export const IndexSearch = () => {
    const { Option } = Select;
    const { Search } = Input;
    const selectBefore = (
        <Select defaultValue="1" style={{ width: 90}}>
            <Option value="1">招拍挂</Option>
        </Select>
    );

    return (
        <Search addonBefore={selectBefore}
            placeholder="请输入关键字"
            onChange={ e=>console.log(e.target.value) }
            onSearch={value => console.log(value)}
            enterButton="搜索" />
    );
}