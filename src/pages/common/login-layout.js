import React,{ Fragment,useState ,useEffect} from 'react';
import { Header } from './header';
import { useHistory } from 'react-router-dom';
import { Footer } from './footer';
import css from './index.module.less';

export const LoginLayout = (props)=>{

    let { location:{ pathname } }=useHistory();
    const [isLoginPage,setState]  = useState(false);
    useEffect(()=>{
        setState(pathname ==='/login');
    },[pathname]);
    return (
        <Fragment>
            <Header />
            <div style={ { ...props.style,flex:1,display:'flex',flexDirection: 'column' } }>
                { props.children }
                <Footer className={ isLoginPage?css.loginFooter:'' } />
            </div>
        </Fragment>
    )
}