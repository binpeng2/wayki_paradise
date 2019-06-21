import React, {Component} from 'react';
import './FastGuide.css';
import {Row, Col} from 'antd';
import { Element } from 'react-scroll';

class FastGuide extends Component{

    render(){
        
        return(
            <div>
			<Element id="FastGuide">

            <div className = "title">
            <img src={require("../assets/FastGuide/guide-tag.png")} alt="tag" width="15%"/>
            </div>
			<div className="step">
			<span-normal><strong>步骤1</strong> &nbsp;&nbsp;进入游戏两种方式</span-normal>
			</div>

			<span className="login">
				推荐使用谷歌浏览器<br />
				登录维基天堂官网 <a href="https://www.waykidapps.com/">https://www.waykidapps.com/ </a>找到宝石争霸游戏进入游戏； <br />
				或者直接输入宝石争霸游戏地址：<a href="ttps://td.waykidapps.com">https://td.waykidapps.com </a><br />
				注意：网页版需提前安装维基钱包插件：WaykiMax
			</span>
			<div className = "step">
			<span-normal><strong>步骤2</strong> &nbsp; &nbsp;新人礼包</span-normal>
			</div>

			<Row type="flex" justify="center">
		    	<Col span={5} ></Col>
                <Col span={8} >
				<img src={require("../assets/FastGuide/step2.png")} alt="Logo" width="100%"/>
                </Col>
                <Col span={11} >
				<span-r>首次登陆后，点击领取新人礼拜10个免费宝石
					（需要0.1WICC激活钱包费用）</span-r>
                </Col>
        	</Row>





			<div className = "step">
			<span-normal><strong>步骤3</strong> &nbsp; &nbsp;共振（充值）</span-normal>
			</div>

			<Row type="flex" justify="center">
		    	<Col span={5} ></Col>
                <Col span={8} >
      	        <img src={require("../assets/FastGuide/step3.png")} alt="Logo" width="100%"/>
                </Col>
                <Col span={11} >
				<span-r>1.	进入游戏界面，点击右上角的“共振”图标，进入充值界面。<br />
						2.	选择充值套餐，点击购入，完成宝石充值。</span-r>
                </Col>
        	</Row>

			<div className = "step">
			<span-normal><strong>步骤4</strong> &nbsp;&nbsp;&nbsp;&emsp; 玩法介绍</span-normal>
			</div>
			<Row type="flex" justify="center">
		    	<Col span={5} ></Col>
                <Col span={8} >
      	        <img src={require("../assets/FastGuide/step4-5.png")} alt="Logo" width="100%"/>
                </Col>
                <Col span={11} >
				<span-r>1.	点击地图中任一塔座，消耗宝石开始建造防御塔。游戏提供四个级别的防御塔给用户，不同级别防御塔的攻击力与其所产生的收益都不同。<br />
						2.	若防御塔维护值为零，则不会产生收益。玩家需要点击“维修”，加满维护值。<br />
						3.	在建造初级防御塔后，每座防御塔还有一次升级的机会，升级后会直接增加攻击力和收益。<br />
				</span-r>
                </Col>
        	</Row>

			<div className = "step">
			<span-normal><strong>步骤5</strong> &nbsp;&nbsp;&nbsp;&emsp; 复利与提现</span-normal>
			</div>
			<Row type="flex" justify="center">
		    	<Col span={5} ></Col>
                <Col span={8} >
      	        <img src={require("../assets/FastGuide/step4-5.png")} alt="Logo" width="100%"/>
                </Col>
                <Col span={11} >
				<span-r>1.	每座防御塔产生的收益将会实时显示在“防御收益”中，用户可以根据个人偏好选择“炼石”或“提现”。<br />
						2.	炼石：即为将收益产生的WPT兑换成宝石，继续用于建造或升级防御塔。<br />
						3.	提现： 用户可将收益随时提取到用户ID所绑定的钱包中，完成提现。

				</span-r >
                </Col>
        	</Row><br /><br />

			</Element>
            </div>
        )
    }

}

export default FastGuide;