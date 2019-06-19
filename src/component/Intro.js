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
            
                <Row >
                <Col xs={12} >
                <span class = "tag">充值提币</span>
                <span>充值（“共振”）：<br />
                    1.充值时请点击游戏界面的右上角的“共振”来选择宝石充值套餐，之后会链接到用户所绑定的wayki钱包中购买。<br />
                    2.充值记录也可在《宝石争霸》的“用户中心”中的“宝石流水”里查看。<br />
                    3.宝石也可以使用WPT收益在游戏中直接使用“炼石”功能兑换，使用炼石更有额外5%宝石赠送。<br /><br />

                    提现:<br />
                    点击游戏提现按钮，在界面输入交易密码，将自动提币 账户所对应WICC绑定的 钱包地址。游戏过程中，防御塔维护值不为零的前提下，每分每秒都在产生收益，用户可随时提现。

                </span><br />
                </Col>
                <Col xs={12}>
                <span class = "tag">邀请奖励</span>
                <span>通过分享邀请码，邀请好友注册游戏；
                     邀请人盈利分为三级，按邀请关系依次获得被邀请人投资额的3% - 2% - 1%的收益。
                </span><br /> <br/>
                <span class = "tag">一键部署</span>
                <span>当用户的宝石数量超过100个时，可点击使用一键部署。系统将会自动帮助用户按防御塔等级顺序由高至低在可支付范围内一键部署。
                </span>
                </Col>

          </Row>

            </div>

        )
    }





}

export default Intro;
