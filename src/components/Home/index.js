import React, {Component} from 'react';
import MHeader from "../../pubComponents/MHeader/index";
import Banner from "../../pubComponents/Banner/index";

export default class Home extends Component {
    render() {
        return (
            <div>
                <MHeader back={true} title={{title: '首页'}}/>
                <Banner/>
            </div>
        )
    }
}
