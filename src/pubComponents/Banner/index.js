import React from 'react';
import BannerAnim, {Element} from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import a from '../../static/img/header.jpg';
import b from '../../static/img/3.jpg';

const BgElement = Element.BgElement;
export default class Banner extends React.Component {
    render() {
        return (
            <div className="content">
                <BannerAnim prefixCls="banner-user">
                    <Element
                        prefixCls="banner-user-elem"
                        key="0"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                background: '#364D79',
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{y: 30, opacity: 0, type: 'from'}}>
                            <img src={b}/>
                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{y: 30, opacity: 0, type: 'from', delay: 100}}
                        >
                            <img src={a}/>
                        </TweenOne>
                    </Element>
                    <Element
                        prefixCls="banner-user-elem"
                        key="1"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                        />
                        <TweenOne className="banner-user-title" animation={{y: 30, opacity: 0, type: 'from'}}>
                            <img src={a}/>
                        </TweenOne>
                        <TweenOne className="banner-user-text"
                                  animation={{y: 30, opacity: 0, type: 'from', delay: 100}}
                        >
                            <img src={b}/>
                        </TweenOne>
                    </Element>
                </BannerAnim>
            </div>
        );
    }
}
