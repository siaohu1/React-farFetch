import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import Home from "../../components/Home/index";
import Brand from "../../components/Brand/index";
import WishList from "../../components/WishList/index";
import User from "../../components/User/index";
import NavLink from "react-router-dom/es/NavLink";

export default class Tab extends Component {
    render() {
        return (
            <ul className="footer">
                <li className="Option">
                    <NavLink exact to='/' component={Home}>
                        <i className="iconfont icon-F"></i>
                        <span>首页</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/brand" component={Brand}>
                        <i className="iconfont icon-pinpai"></i>
                        <span>品牌</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wishList" component={WishList}>
                        <i className="iconfont icon-gray-star"></i>
                        <span>愿望单</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user" component={User}>
                        <i className="iconfont icon-wode"></i>
                        <span className="bla">我的账户</span>
                    </NavLink>
                </li>
            </ul>
        )
    }
}
