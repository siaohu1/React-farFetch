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
                <Banner/>
            </div>
        )
    }
}
