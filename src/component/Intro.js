import React, {Component} from 'react';
import './Intro.css';
import {Row, Col} from 'antd';


class Intro extends Component{

    render(){
        
        return(
            <div>
            <div className = "title">
            <img src={require("../assets/玩法介绍-tag.png")} alt="Logo" width="10%" />
            </div>
                <article className = "IntroData">
  
                <br />
                <p className = "intro">
                <span>宝石争霸是首个建立在维基链生态的大型塔防类去中心化游戏。</span><br />
                <span>玩家在《宝石争霸》中消耗宝石建造防御塔， 防御塔建成后会自动攻击在一定范围内经过的小怪，小怪死亡爆出金币，玩家获得收益。防御塔共有四种类型，每个类型可升级一次以提高攻击能力和收益能力。防御塔等级越高，数量越多，越具有攻击力，玩家收益越高！宝石争霸玩家可通过建塔、升级、打怪来获得WPT令牌，玩家花费宝石越多，可获得WPT令牌也越多。获得数量参考维基天堂平台挖矿机制。</span><br />
                <span>游戏中的防御塔有维护指标，满级维护为100。维护指标随时间推移会越来越低。当维护指标降为0，防御塔停止攻击小怪，不再获得收益。玩家需要使用 3 宝石加满维护值，才能正常工作，满级维护值可以营业 3 天。</span>
                </p>
                
                </article>
            
                <Row type="flex" justify="center">
                <Col span={12} >
                <span class = "tag-l">充值提币</span>
                <span-l>充值（“共振”）：<br />
                    1.充值时请点击游戏界面的右上角的“共振”来选择宝石充值套餐，之后会链接到用户所绑定的wayki钱包中购买。<br />
                    2.充值记录也可在《宝石争霸》的“用户中心”中的“宝石流水”里查看。<br />
                    3.宝石也可以使用WPT收益在游戏中直接使用“炼石”功能兑换，使用炼石更有额外5%宝石赠送。<br /><br />

                    提现:<br />
                    点击游戏提现按钮，在界面输入交易密码，将自动提币 账户所对应WICC绑定的 钱包地址。游戏过程中，防御塔维护值不为零的前提下，每分每秒都在产生收益，用户可随时提现。

                </span-l><br />
                </Col>
                <Col span={12} >
                <span class = "tag-r">邀请奖励</span>
                <span-r>通过分享邀请码，邀请好友注册游戏；
                     邀请人盈利分为三级，按邀请关系依次获得被邀请人投资额的3% - 2% - 1%的收益。
                </span-r><br />
                <span class = "tag-r">一键部署</span>
                <span-r className = "column">当用户的宝石数量超过100个时，可点击使用一键部署。系统将会自动帮助用户按防御塔等级顺序由高至低在可支付范围内一键部署。
                </span-r>

                <span class = "tag-r">炼石复投</span>
                <span-r className = "column">将防御塔收益产生的WPT兑换成宝石，继续用于建造或升级防御塔,使用“炼石“更有5%宝石赠送。
炼石兑换宝石计算公式：
                </span-r>
                </Col>

          </Row>

            </div>

        )
    }





}

export default Intro;
