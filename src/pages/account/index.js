import React,{ Fragment} from 'react';
import { Route, Switch, Redirect,useHistory } from "react-router-dom";
import { Workbench } from './work';
import { Setting } from './setting';
import { UserAuth } from './setting/userauth';
import { UserName } from './setting/username';
import { Mobile } from './setting/mobile';
import { Identity } from './setting/identity';
import { Trade } from './setting/trade';
import { Email } from './setting/email';
import { Password } from './setting/password';
import { AccountHeader } from './components';
import {useIsLogin} from '../../hook';
import { EmptyBox,TopHeader,Footer } from '../../components';

export const Account = ()=>{

    let { push } = useHistory();
    const [isLogin] = useIsLogin();
    return (
        <Fragment>
            <TopHeader />
            <AccountHeader />
            <div className="container">
                <Switch>

                    {
                        isLogin?
                        <Switch>
                           <Redirect exact from="/account" to="/account/work" />
                           <Route exact path="/account/work" component={ Workbench }/>
                           <Route exact path="/account/setting" component={ Setting }/>
                           <Route exact path="/account/setting/userauth" component={ UserAuth }/>
                           <Route exact path="/account/setting/username" component={ UserName }/>
                           <Route exact path="/account/setting/password" component={ Password }/>
                           <Route exact path="/account/setting/mobile" component={ Mobile }/>
                           <Route exact path="/account/setting/identity" component={ Identity }/>
                           <Route exact path="/account/setting/trade" component={ Trade }/>
                           <Route exact path="/account/setting/email" component={ Email }/>
                           <Route key="error" render={ (props) => <EmptyBox />} />
                        </Switch>:
                        <Route key="error" render={ (props) => <EmptyBox onClick={ ()=>push('/login') } message='您还没有登录' btnText="登录" /> } />
                    }

                </Switch>
            </div>
            <Footer />
        </Fragment>
    )
}