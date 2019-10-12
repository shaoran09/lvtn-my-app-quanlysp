import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Loginpage from './components/loginpage';
import Aboutpage from './components/about';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Productdetail from './components/productdetail';
import QuanlySP from './components/quanlysp';
import Admin from './components/admin';
import Signin from './components/signin';
import QuanlyDH from './components/quanlydh';


const Router = () => (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/login' component={Loginpage} />
        <Route path='/signin' component ={Signin}/>
        <Route path='/about' component={Aboutpage}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/productdetail' component={Productdetail}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/quanlysp' component={QuanlySP}/>
        <Route path='/quanlydh' component={QuanlyDH}/>
    </Switch>
)

export default Router