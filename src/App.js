import React, { useState, useEffect, Fragment} from 'react';
import './App.css';
import { TopHeader, IndexHeader, MainNav, Footer, EmptyBox,YcLoading } from './components';
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from './pages/home';
import { List } from './pages/list';
import { View } from './pages/view';
import { Bidding } from './pages/bidding';
import { BiddingView } from './pages/bidding/view';
import { BidHall } from './pages/bidhall';
import { BidHallView } from './pages/bidhall/view';
import { Complex } from './pages/complex';
import { ComplexView } from './pages/complex/view';
import { Market } from './pages/market';
import { MarketView } from './pages/market/view';
import { Baike } from './pages/baike/index';
import { LoginPage } from './pages/login/index';
import { RegPage } from './pages/login/reg';
import { RecoverPage } from './pages/login/recover';
import { DownloadPage } from './pages/download/index';
import { Account } from './pages/account';
import { ServicesModel } from './common';
import { tap/*, map */} from "rxjs/operators";
import { store } from './helps';

function App() {


    const [isLoading,setLoading] = useState(true);

    useEffect(()=>{
        let isLogin = store.get('isLogin');
        if (isLogin) {
            setLoading(false);
        }else{
            ServicesModel.getSigns().pipe(
                tap(res=>{ })
            ).subscribe({
                next:res=>{setLoading(false);},
                error:err=>{},
                complete:()=>{}
            });
        };
    },[]);

    return (
        <div className="App">
            {
                isLoading ?<YcLoading />:
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/reg" component={RegPage}/>
                    <Route exact path="/recover" component={ RecoverPage }/>
                    <Route exact
                        path={['/account','/account/:c1','/account/:c1/:c2']}
                        component={ Account }/>
                    <Fragment>
                        <TopHeader />
                        <IndexHeader />
                        <MainNav />
                            <Switch>
                                <Redirect exact from="/" to="/index" />
                                <Route exact path="/index" component={Home}/>
                                <Route exact path="/market" component={Market}/>
                                <Route exact path="/market/view" component={MarketView}/>
                                <Route exact path="/bidding" component={Bidding}/>
                                <Route exact path="/bidding/view" component={BiddingView}/>
                                <Redirect exact from="/bidhall" to="market?infor_type=3" component={BidHall}/>
                                <Route exact path="/bidhall/view" component={BidHallView}/>
                                <Route exact path="/complex" component={Complex}/>
                                <Route exact path="/complex/view" component={ComplexView}/>
                                <Route exact path="/baike" component={Baike}/>
                                <Route exact path="/download" component={DownloadPage}/>
                                <Route exact
                                    path={ ['/category/:cid','/category/:cid/:cid','/category/:cid/view/:id','/category/:cid/:id/view/:id' ] }
                                    component={ List } />
                                <Route exact path="/view" component={View}/>
                                <Route key="error" render={ (props) => <EmptyBox /> } />
                            </Switch>
                        <Footer />
                    </Fragment>
                    <Route key="error" render={ (props) => <EmptyBox /> } />
                </Switch>
            }
        </div>
    );
}

export default App;