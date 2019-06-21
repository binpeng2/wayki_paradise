import React, {Component} from 'react';
import './Intro.css';
import {Row, Col,Input, Divider} from 'antd';
import { Element } from 'react-scroll';

const mingDataLevel = require("./mingDataLevel.json");
class Benefit extends Component{

    constructor(props){
      super(props);
      this.state={
        dailyRate: 0,
        weeklyRate: 0,
        monthlyRate: 0,
        quarterlyRate: 0,
        dailyEarn: 0,
        weeklyEarn: 0,
        monthlyEarn: 0,
        quarterlyEarn: 0,
        currentLevel: 1,
        inputWICC:0,
        wptToWiccRate:10
      }
    }

    componentDidMount = ()=>{
      //fetch currentLevel from contract
    }

    changeInputWicc = (e) =>{

      this.setState({
        inputWICC: e>0? parseFloat(e) : e
      },()=>{
        let inputWicc = this.state.inputWICC > 0 ? this.state.inputWICC : 0;
        this.setState({
          dailyEarn:(inputWicc/100*mingDataLevel[this.state.currentLevel.toString()].rate).toFixed(2),
          weeklyEarn:(inputWicc/100*mingDataLevel[this.state.currentLevel.toString()].rate*7).toFixed(2),
          monthlyEarn:(inputWicc/100*mingDataLevel[this.state.currentLevel.toString()].rate*30).toFixed(2),
          quarterlyEarn:(inputWicc/100*mingDataLevel[this.state.currentLevel.toString()].rate*90).toFixed(2)
        },()=>{

          this.setState({
            dailyRate:this.state.inputWICC > 0 ? (this.state.dailyEarn / this.state.inputWICC * 100 / this.state.wptToWiccRate).toFixed(1) :0,
            weeklyRate:this.state.inputWICC > 0 ? (this.state.weeklyEarn / this.state.inputWICC * 100 / this.state.wptToWiccRate).toFixed(1) :0,
            monthlyRate:this.state.inputWICC > 0 ? (this.state.monthlyEarn / this.state.inputWICC * 100 / this.state.wptToWiccRate).toFixed(1) :0,
            quarterlyRate:this.state.inputWICC > 0 ? (this.state.quarterlyEarn / this.state.inputWICC * 100 / this.state.wptToWiccRate).toFixed(1) :0,
          })
        })
      })
    }

    render(){

        return(
            <div>
            <Element id="Benefit">
            <div className = "title">
            <img src={require("../assets/Benefit/benefit-tag.png")} alt="tag" width="25%"/><br /><br /><br />

            </div>
            <Row type="flex" justify="center">
                <Col xs={11}>
                <span className= "tag-l"> &nbsp;&nbsp;用户收益计算器</span><br />
                <p className = "currentLevel">当前层级24小时收益: 第 {this.state.currentLevel} 层 (100 WICC : {mingDataLevel[this.state.currentLevel.toString()].rate} WPT)</p>
                <Input style={{width:'40%', height:'12%', marginLeft:"30%",marginBottom:"5%"}} value = {this.state.inputWICC} type="number" addonAfter="WICC" onChange={(e)=>{this.changeInputWicc(e.target.value)}}/>
                <p className = "currentLevel">10 WPT ≈ 1 WICC </p ><br />
                </Col>

                <Col span={1}>

                <Divider type="vertical" style={{height:"80%",marginLeft:"25%"}}/>

                </Col>


                <Col xs={12}>
                <span className = "tag-r">每日收益：{this.state.dailyRate} % </span>
                <span-r>&emsp; {this.state.dailyEarn} WPT</span-r>
                <span className = "tag-r">每周收益：{this.state.weeklyRate} %</span>
                <span-r>&emsp; {this.state.weeklyEarn} WPT </span-r>
                <span className = "tag-r">每月收益：{this.state.monthlyRate} %</span>
                <span-r>&emsp; {this.state.monthlyEarn} WPT </span-r>
                <span className = "tag-r">三月收益：{this.state.quarterlyRate} %</span>
                <span-r>&emsp; {this.state.quarterlyEarn} WPT </span-r>
                </Col>
          </Row><br /><br />
          <span className= "tag">维基天堂“宝石争霸”挖矿难度系数表</span><br /><br />
          <Row type="flex" justify="center" align="middle">
          <Col xs={10}>

          <img src={require("../assets/Benefit/pyramid.png")} alt="pyramid"className="pyramid" />

          </Col>

          <Col xs={10}>
         <p className = "intro">维基天堂WPT创世价格： 10 WPT = 1 WICC  初始矿池WPT总数量：20470000 WPT<br /><br />
            WPT预计“宝石争霸”上线一周内同步上线交易所<br />

            </p>
          </Col>
          </Row><br /><br />
          <Row>


          <p className="example">
          维基天堂为鼓励“宝石争霸”游戏用户积极参与游戏挖矿，专门设置了“宝石争霸”专属共振矿池。共振矿池共分为11层， 提供WPT总量20,470,000个。<br />
          第一层可供挖矿的WPT数量为10,000个，之后每一层可供挖矿的WPT数量为上一层的双倍，以此类推，至第十一层可供挖矿的WPT数量为10,240,000个。而每层的挖矿难度系数逐渐攀升，挖矿所产生的每日收益比（宝石： WPT）也逐渐下降。
          第一层的每日收益比（宝石： WPT）为100:30，之后每一层的每日收益比（宝石： WPT ）为上一层的90%，依此类推，至第十一层的每日收益比（宝石： WPT）为100: 10.4 。
          例如，“宝石争霸”游戏用户在游戏上线后第一天投入了100个宝石，那该用户在第一层挖矿阶段的每日收益为30WPT，进入第二层挖矿阶段后的每日收益为27 WPT，以此类推。<br />
            用户最快收回成本只需33天。<br /><br />

            《宝石争霸》游戏玩家进行共振的WICC将100%用于二级市场回购，其中90%进行永久性的销毁，10%用于社区生态建设（例如：玩家排行榜、推广合伙人、社区形象大使）。
            </p>

          </Row>



          <span className= "tag">防御塔价值:</span><br /><br />
            <Row >

            <Col span={6} className = "tower-l">


          <img src={require("../assets/Benefit/tower-10.png")} alt="tower-l" className = "tower" width="20%" /><br />
           弓箭塔 = 10 WICC (新玩家首塔免费送)
          </Col>
          <Col span={6} className = "tower-r">
          <img src={require("../assets/Benefit/tower-1000.png")} alt="tower-r" className = "tower" width="20%"/><br />
          战斧塔 = 充值 1000 WICC
          </Col>
            </Row>

            <Row>
            <Col xs={6} className = "tower-l">
          <img src={require("../assets/Benefit/tower-200.png")} alt="tower-l" className = "tower" width="20%"/><br />
          神箭塔 = 充值 210 WICC
          </Col>
          <Col xs={6} className = "tower-r">
          <img src={require("../assets/Benefit/tower-2000.png")} alt="tower-r" className = "tower" width="20%"/><br />
          巨斧塔 = 充值 3000 WICC
          </Col>
            </Row>

            <Row>
            <Col xs={6} className = "tower-l">
          <img src={require("../assets/Benefit/tower-5000.png")} alt="tower-l" className = "tower" width="20%"/><br />
          冰凌塔 = 充值 5000 WICC
          </Col>
          <Col xs={6} className = "tower-r">
          <img src={require("../assets/Benefit/tower-10000.png")} alt="tower-r" className = "tower" width="20%"/><br />
          铁炮塔 = 充值 10000 WICC
          </Col>
            </Row>

            <Row>
            <Col xs={6} className = "tower-l">
          <img src={require("../assets/Benefit/tower-8000.png")} alt="tower" className = "tower" width="20%"/><br />
          冰球塔 = 充值 13000 WICC
          </Col>
          <Col xs={6} className = "tower-r">
          <img src={require("../assets/Benefit/tower-15000.png")} alt="tower" className = "tower" width="20%"/><br />
          火炮塔 = 充值 25000 WICC
          </Col>
            </Row>


            </Element>
            </div>

        )
    }

}

export default Benefit;
