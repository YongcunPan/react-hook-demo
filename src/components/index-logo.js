import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from 'aliasimgurl/logo.png';


export const IndexLogo = ()=>{
    let { push } = useHistory();

    const toIndexPage =()=>{
        push('/')
    }

    return (
        <img src={ logo } onClick={ toIndexPage } alt=""/>
    );
}