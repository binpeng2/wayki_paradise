import React, {Component} from 'react';
import './FastGuide.css';
import {Row, Col} from 'antd';


class FastGuide extends Component{

    render(){
        
        return(
            <div>

            <div className = "title">
            <img src={require("../assets/五分钟攻略/五分钟上手攻略-tag.png")} alt="Logo" width="183px" height="41px"/>
            </div>
			<div class = "step">
			<span><br/><br/><strong>步骤1</strong> &nbsp;&nbsp;&nbsp;&emsp; 进入游戏两种方式</span>
			</div>
			<div class = "step-body">
			<span><br/><br/><br/><br/>
					1、Web端 通过《宝石争霸》官网进入：<a href="https://www.waykidapps.com/">https://www.waykidapps.com/</a><br/>
     			 &nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;Web端 通过维基链官网进入：<a href="https://www.waykichain.com/">https://www.waykichain.com/</a><br/>
  					&nbsp;&nbsp;&nbsp;（Web端需安装插件钱包：<a href="https://chrome.google.com/webstore/detail/waykimax/odaegfdpkolgbdaeibcebmibmibchbce">WaykiMax</a>）<br/>
					2、移动端 通过维基时代DApp进入，从发现栏目即可开启游戏<br/>
					将个人维基钱包绑定后注册游戏ID，即可进入游戏。<br/><br/><br/>
			</span>
			</div>

			<div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>

			<div class = "step">
			<span><strong>步骤2</strong> &nbsp;&nbsp;&nbsp;&emsp; 充值</span>
			</div>
			<div><br/><br/></div>
			<div className = "pic">
            <img src={require("../assets/五分钟攻略/步骤2.png")} alt="Logo" width="500px" height="300px"/>
            </div>
			<div class = "step-body-2">
			<span-l>1.	进入游戏界面，点击右上角的“共振”图标，进入充值界面。<br/>
			2.	选择充值套餐，点击购入，完成宝石充值。</span-l>
			</div>

			<div><br/><br/><br/><br/><br/><br/><br/><br/></div>

			<div class = "step">
			<span><strong>步骤3</strong> &nbsp;&nbsp;&nbsp;&emsp; 玩法介绍</span>
			</div>
			<div><br/><br/></div>
			<div className = "pic">
            <img src={require("../assets/五分钟攻略/步骤3.png")} alt="Logo" width="500px" height="300px"/>
            </div>
			<div class = "step-body-2">
			<span-l>1.	点击地图中任一塔座，消耗宝石开始建造防御塔。游戏提供四个级别的防御塔给用户，不同级别防御塔的攻击力与其所产生的收益都不同。<br/>
				  2.	若防御塔维护值为零，则不会产生收益。玩家需要点击“维修”，加满维护值。<br/>
				  3.	在建造初级防御塔后，每座防御塔还有一次升级的机会，升级后会直接增加攻击力和收益。
			</span-l>
			</div>

			<div><br/><br/><br/><br/><br/></div>

			<div class = "step">
			<span><strong>步骤4</strong> &nbsp;&nbsp;&nbsp;&emsp; 复利与提现</span>
			</div>
			<div><br/><br/></div>
			<div className = "pic">
            <img src={require("../assets/五分钟攻略/步骤4.png")} alt="Logo" width="500px" height="300px"/>
            </div>
			<div class = "step-body-2">
			<span-l>1.	每座防御塔产生的收益将会实时显示在“防御收益”中，用户可以根据个人偏好选择“炼石”或“提现”。<br/>
				  2.	炼石：即为将收益产生的WPT兑换成宝石，继续用于建造或升级防御塔。<br/>
				  3.	提现： 用户可将收益随时提取到用户ID所绑定的钱包中，完成提现。
			</span-l>
			</div>

			<div><br/><br/><br/></div>

            </div>
        )
    }

}

export default FastGuide;