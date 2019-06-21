import React, {Component} from 'react';

import {Row, Col} from 'antd';
import { Element } from 'react-scroll';

class Gem extends Component{

    render(){
        
        return(
            <div>
                <Element id="Gem">
            <div className = "title">
            <img src={require("../assets/Gem/gem-tag.png")} alt="tag" width="25%"/><br /><br />
            </div>

            <Row type="flex" justify="center" className="row">
                <Col  span={4} >
                <img src={require("../assets/Gem/01.png")} alt="Gem" width="100%" className="gem" max-width="100%"/>
                </Col>
                <Col  span={4}>
                <img src={require("../assets/Gem/02.png")} alt="Gem" width="100%" className="gem"/>
                </Col>
                <Col span={4}>
                <img src={require("../assets/Gem/03.png")} alt="Gem" width="100%" className="gem"  />
                </Col>
                <Col span={4}>
                <img src={require("../assets/Gem/04.png")} alt="Gem" width="100%"className="gem" />
                </Col>
          </Row>

          <Row type="flex" justify="center" className="row">
                <Col span={4}>
                <img src={require("../assets/Gem/05.png")} alt="Gem" width="100%" className="gem" />
                </Col>
                <Col span={4}>
                <img src={require("../assets/Gem/06.png")} alt="Gem" width="100%" className="gem" />
                </Col>
                <Col span={4}>
                <img src={require("../assets/Gem/07.png")} alt="Gem" width="100%" className="gem"/>
                </Col>
                <Col span={4}>
                <img src={require("../assets/Gem/08.png")} alt="Gem" width="100%" className="gem"/>
                </Col>
          </Row>

          </Element>

            </div>

        )
    }

}

export default Gem;