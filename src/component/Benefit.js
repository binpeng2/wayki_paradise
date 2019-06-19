import React, {Component} from 'react';
import {Row, Col,Input, Divider} from 'antd';
import './Intro.css';
import './Benifit.css';

const miningData = require("./miningData.json");
class Benefit extends Component{

    constructor(props){
      super(props);
      this.state = {
        dailyRate: "0",
        weeklyRate: "0",
        monthlyRate: "0",
        quarterlyRate: "0",
        investValue:0,
        currentLevel:1
      }
    }

    render(){

        return(
            <div>
            <div className = "title">
            <img src={require("../assets/如何收益/收益如何-tag.png")} alt="Logo" width="275px" height="41px"/><br /><br /><br />

            </div>
            <Row >
                <Col xs={10}>
                <p className= "tag-l">用户收益计算器</p><br />
                <p className= "currentLevel">当前层级：{this.state.currentLevel} <span>挖矿难度系数 100 宝石 : {miningData[this.state.currentLevel.toString()].rate} WPT (24小时)</span></p>
                <Input value={this.state.investValue} style={{width:'30%', height:"5vh",marginLeft:"25em",marginBottom:"5em"}}>
                </Input>
                <span-l style={{marginLeft:"3em"}}>Gaex 交易所时时汇率  <br />
                &emsp;&emsp;XXX WPT ≈ XXX WICC ≈ XXX RMB
                </span-l ><br />
                </Col>

                <Col xs={2}>

                <Divider type="vertical" style={{height:"20em",marginLeft:"10em"}}/>

                </Col>


                <Col xs={10}>
                <span className = "tag-r">每日收益： {this.state.dailyRate}%</span>
                <span-r>&emsp;XXX WPT ≈ XXX WICC ≈ XXX RMB</span-r>
                <span className = "tag-r">每周收益： {this.state.weeklyRate}%</span>
                <span-r>&emsp;XXX WPT ≈ XXX WICC ≈ XXX RMB </span-r>
                <span className = "tag-r">每月收益： {this.state.monthlyRate}%</span>
                <span-r>&emsp;XXX WPT ≈ XXX WICC ≈ XXX RMB </span-r>
                <span className = "tag-r">三月收益： {this.state.quarterlyRate}%</span>
                <span-r>&emsp;XXX WPT ≈ XXX WICC ≈ XXX RMB </span-r>
                </Col>
          </Row><br /><br />
          <Row>
          <span className= "tag-l">维基天堂“宝石争霸”挖矿难度系数表</span><br />
          <Col xs={12}>
          <br /><br />
          <img src={require("../assets/如何收益/金字塔图表.png")} className="pyramid" width="70%" />
          </Col>

          <Col xs={12}>
         <span-r-small>维基天堂WPT创世价格： 10 WPT = 1 WICC  初始矿池WPT总数量：20470000 WPT<br /><br />

            WPT预计“宝石争霸”上线一周内同步上线交易所<br />
            维基天堂为鼓励“宝石争霸”游戏用户积极参与游戏挖矿，专门设置了“宝石争霸”专属共振矿池。共振矿池共分为11层， 提供WPT总量20,470,000个。第一层可供挖矿的WPT数量为10,000个，之后每一层可供挖矿的WPT数量为上一层的双倍，以此类推，至第十一层可供挖矿的WPT数量为10,240,000个。而每层的挖矿难度系数逐渐攀升，挖矿所产生的每日收益比（宝石： WPT）也逐渐下降。第一层的每日收益比（宝石： WPT）为100:30，之后每一层的每日收益比（宝石： WPT ）为上一层的90%，依此类推，至第十一层的每日收益比（宝石： WPT）为100: 10.4 。<br />
            例如，“宝石争霸”游戏用户在游戏上线后第一天投入了100个宝石，那该用户在第一层挖矿阶段的每日收益为30WPT，进入第二层挖矿阶段后的每日收益为27 WPT，以此类推。<br />
            用户最快收回成本只需33天。<br /><br />

            《宝石争霸》游戏玩家进行共振的WICC将100%用于二级市场回购，其中90%进行永久性的销毁，10%用于社区生态建设（例如：玩家排行榜、推广合伙人、社区形象大使）。

            </span-r-small>
          </Col>
          </Row><br /><br />
            <Row>
            <span className= "tag-l">防御塔价值:</span><br />
            <Col xs={6} className = "tower-l">
          <img src={require("../assets/如何收益/tower-10.png")} alt="tower-l" width="20%" />
            弓箭塔 = 10 WICC (新玩家首塔免费送)
          </Col>
          <Col xs={6} className = "tower-r">
          <img src={require("../assets/如何收益/tower-1000.png")} alt="tower-r" width="20%"/>
          战斧塔 = 充值 1000 WICC
          </Col>
            </Row>

            <Row>
            <Col xs={6} className = "tower-l">
          <img src={require("../assets/如何收益/tower-200.png")} alt="tower-l" width="20%"/>
          神箭塔 = 充值 210 WICC
          </Col>
          <Col xs={6} className = "tower-r">
          <img src={require("../assets/如何收益/tower-2000.png")} alt="tower-r" width="20%"/>
          巨斧塔 = 充值 3000 WICC
          </Col>
            </Row>

            <Row>
            <Col xs={6} className = "tower-l">
          <img src={require("../assets/如何收益/tower-5000.png")} alt="tower-l" width="20%"/>
          冰凌塔 = 充值 5000 WICC
          </Col>
          <Col xs={6} className = "tower-r">
          <img src={require("../assets/如何收益/tower-10000.png")} alt="tower-r" width="20%"/>
          铁炮塔 = 充值 10000 WICC
          </Col>
            </Row>

            <Row>
            <Col xs={6} className = "tower-l">
          <img src={require("../assets/如何收益/tower-8000.png")} alt="tower" width="20%"/>
          冰球塔 = 充值 13000 WICC
          </Col>
          <Col xs={6} className = "tower-r">
          <img src={require("../assets/如何收益/tower-15000.png")} alt="tower" width="20%"/>
          火炮塔 = 充值 25000 WICC
          </Col>
            </Row>

            </div>

        )
    }

}

export default Benefit;
