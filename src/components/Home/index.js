<<<<<<< HEAD
import "babel-polyfill";
import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import Banner from "../../pubComponents/Banner/index";
import {swiper} from '../../api/index'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {swiper: {}}
    }

    async componentDidMount() {
        this.swiper = await swiper();
        this.setState({swiper});
    }

    render() {
        return (
            <div>
                <MHeader title={{title: '首页'}}/>
=======
import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import Banner from "../../pubComponents/Banner/index";

export default class Home extends Component {
    render() {
        return (
            <div>
                <MHeader back={true} title={{title: '首页'}}/>
>>>>>>> cc4d558a4cb16271944303f2121a9816bc547377
                <Banner/>
            </div>
        )
    }
}
