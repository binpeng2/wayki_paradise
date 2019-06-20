    
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav id="navbar">
        <div className="nav-content">
              <Link style={{ color: '#FFF' }}
                activeClass="active"
                to="Intro"
                spy={true}
                smooth={true}
                offset={-50}
				duration={500}
              >
              	  <span className="nb">玩法介绍</span>
              </Link>
			  &emsp;&nbsp;
			  <Link style={{ color: '#FFF' }}
                activeClass="active"
                to="Benefit"
                spy={true}
                smooth={true}
                offset={-50}
				duration={500}
              >
            	    <span className="nb">如何收益</span>
              </Link>
			  &emsp;&nbsp;
			  <Link style={{ color: '#FFF' }}
                activeClass="active"
                to="Gem"
                spy={true}
                smooth={true}
                offset={-50}
				duration={500}
              >
                                  <span className="nb">充值宝石</span>
              </Link>
			  &emsp;&nbsp;
			  <Link style={{ color: '#FFF' }}
                activeClass="active"
                to="FastGuide"
                spy={true}
                smooth={true}
                offset={-50}
				duration={500}
              >
        	        <span className="nb">上手攻略</span>
              </Link>
        </div>
      </nav>
    );
  }
}