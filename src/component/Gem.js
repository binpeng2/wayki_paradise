import React, {Component} from 'react';

import {Row, Col} from 'antd';


class Gem extends Component{

    render(){
        
        return(
            <div>
            <div className = "title">
            <img src={require("../assets/玩家使用wicc兑换宝石/wicc兑换宝石-tag.png")} alt="tag" width="299px" height="41px"/><br /><br />
            </div>

            <Row type="flex" justify="center" className="row">
                <Col  span={4} >
                <img src={require("../assets/玩家使用wicc兑换宝石/01.png")} className="Gem-1" width="100%" />
                </Col>
                <Col  span={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/02.png")} className="Gem-2" width="100%"/>
                </Col>
                <Col span={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/03.png")} className="Gem-3" width="100%"/>
                </Col>
                <Col span={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/04.png")} className="Gem-4" width="100%"/>
                </Col>
          </Row>

          <Row type="flex" justify="center" className="row">
                <Col span={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/05.png")} className="Gem-1" width="100%" />
                </Col>
                <Col span={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/06.png")} className="Gem-2" width="100%"/>
                </Col>
                <Col span={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/07.png")} className="Gem-3" width="100%"/>
                </Col>
                <Col span={4}>
                <img src={require("../assets/玩家使用wicc兑换宝石/08.png")} className="Gem-4" width="100%"/>
                </Col>
          </Row>



            </div>

        )
    }

}

export default Gem;