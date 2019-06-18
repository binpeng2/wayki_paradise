import React, {Component} from 'react';
import './Intro.css';
import {Row, Col} from 'antd';

import IntroData from '../data/IntroData';

class Intro extends Component{

    render(){
        
        return(
            <div>
            <div className = "title">
            <img src={require("../assets/玩法介绍-tag.png")} alt="Logo" width="117px" height="41px"/>
            </div>
                <article className = "IntroData">
                    <IntroData />
                </article>
                <Row>
                    <Col xs={3}>充值（“共振”）：
1.充值时请点击游戏界面的右上角的“共振”来选择宝石充值套餐，之后会链接到用户所绑定的wayki钱包中购买 。
2.充值记录也可在《宝石争霸》的“用户中心”中的“宝石流水”里查看。
3.宝石也可以使用WPT收益在游戏中直接使用“炼石”功能兑换，使用炼石更有额外5%宝石赠送。

提现:
点击游戏提现按钮，在界面输入交易密码，将自动提币 账户所对应WICC绑定的 钱包地址。游戏过程中，防御塔维护值不为零的前提下，每分每秒都在产生收益，用户可随时提现。

</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </div>
        )
    }





}

export default Intro;
