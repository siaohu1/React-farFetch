import React from 'react';
import {
    HashRouter as Router,
    Route,
<<<<<<< HEAD
=======
    Link,
>>>>>>> cc4d558a4cb16271944303f2121a9816bc547377
    Switch
} from 'react-router-dom';
import Home from "./components/Home/index";
import User from "./components/User/index";
import Brand from "./components/Brand/index";
import WishList from "./components/WishList/index";
import './pubComponents/style/tab.css'
import Tab from "./pubComponents/Tab/index";

export default (
    <Router>
        <div>
            <Tab/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/brand" exact component={Brand}/>
                <Route path="/wishList" exact component={WishList}/>
                <Route path="/user" component={User}/>
            </Switch>
        </div>
    </Router>
);