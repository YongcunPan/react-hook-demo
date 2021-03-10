import React from 'react';
import { Pagination } from 'antd';

export const YcPagination = (props) => {
    const { onChange, style, className, total,current } = props;

    function handleChange(v) {
        onChange && onChange(v);
    }

    return (
        <Pagination showQuickJumper
            className={ className }
            style={ {textAlign:'center',marginTop:40, ...style} }
            total={ total || 0 }
            current={ current || 1 }
            onChange={ handleChange } />
    );
}