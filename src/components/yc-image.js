import React from 'react';
import demoimg from 'aliasimgurl/logo_img.png';

export const YcImage = (props)=>{
    const { imgUrl } = props;
    return (
        <div>
            <img style={{ maxWidth:'100%' }} src={ imgUrl || demoimg } alt=""/>
        </div>
    );
}