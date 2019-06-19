import React, {Component} from 'react';

import {Row, Col} from 'antd';


class Gem extends Component{

    render(){
        
        return(
            <div>
            <div className = "title">
            <img src={require("../assets/玩家使用wicc兑换宝石/wicc兑换宝石-tag.png")} alt="tag" width="299px" height="41px"/><br /><br />
            </div>

            <Row type="flex" justify="space-around" align="middle" className="row">
                <Col xs={4} sm={4} md={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/01.png")} alt="Gem" width="100%" />
                </Col>
                <Col xs={4} sm={4} md={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/02.png")} alt="Gem" width="100%"/>
                </Col>
                <Col xs={4} sm={4} md={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/03.png")} alt="Gem" width="100%"/>
                </Col>
                <Col xs={4} sm={4} md={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/04.png")} alt="Gem" width="100%"/>
                </Col>
          </Row>

          <Row type="flex" justify="space-around" align="middle">
                <Col xs={4} sm={4} md={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/05.png")} alt="Gem" width="100%" />
                </Col>
                <Col xs={4} sm={4} md={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/06.png")} alt="Gem" width="100%"/>
                </Col>
                <Col xs={4} sm={4} md={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/07.png")} alt="Gem" width="100%"/>
                </Col>
                <Col xs={4} sm={4} md={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/08.png")} alt="Gem" width="100%"/>
                </Col>
          </Row>



            </div>

        )
    }

}

export default Gem;