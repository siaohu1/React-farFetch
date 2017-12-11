import React, {Component} from 'react';
<<<<<<< HEAD
=======
import {HashRouter as Router, Link} from 'react-router-dom';
import Home from "../../components/Home/index";
import Brand from "../../components/Brand/index";
import WishList from "../../components/WishList/index";
import User from "../../components/User/index";
>>>>>>> cc4d558a4cb16271944303f2121a9816bc547377
import NavLink from "react-router-dom/es/NavLink";

export default class Tab extends Component {
    render() {
        return (
            <ul className="footer">
                <li className="Option">
<<<<<<< HEAD
                    <NavLink exact to='/'>
=======
                    <NavLink exact to='/' component={Home}>
>>>>>>> cc4d558a4cb16271944303f2121a9816bc547377
                        <i className="iconfont icon-F"></i>
                        <span>首页</span>
                    </NavLink>
                </li>
                <li>
<<<<<<< HEAD
                    <NavLink to="/brand">
=======
                    <NavLink to="/brand" component={Brand}>
>>>>>>> cc4d558a4cb16271944303f2121a9816bc547377
                        <i className="iconfont icon-pinpai"></i>
                        <span>品牌</span>
                    </NavLink>
                </li>
                <li>
<<<<<<< HEAD
                    <NavLink to="/wishList">
=======
                    <NavLink to="/wishList" component={WishList}>
>>>>>>> cc4d558a4cb16271944303f2121a9816bc547377
                        <i className="iconfont icon-gray-star"></i>
                        <span>愿望单</span>
                    </NavLink>
                </li>
                <li>
<<<<<<< HEAD
                    <NavLink to="/user">
=======
                    <NavLink to="/user" component={User}>
>>>>>>> cc4d558a4cb16271944303f2121a9816bc547377
                        <i className="iconfont icon-wode"></i>
                        <span className="bla">我的账户</span>
                    </NavLink>
                </li>
            </ul>
        )
    }
}
