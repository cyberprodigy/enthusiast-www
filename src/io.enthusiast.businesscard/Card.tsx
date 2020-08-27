import React, { Component, RefObject } from 'react';
import './Card.css'
import { stat } from 'fs';


class Card extends Component
{
    cardElem: RefObject<HTMLDivElement>;
    state: State;

    constructor(props: any)
    {
        super(props);
        this.cardElem = React.createRef();
        this.state = new State();
    }

    openClose(isOpened: Boolean)
    {
        this.setState({ isOpened: isOpened });
    }

    
    render()
    {
        return <div className={this.state.isOpened ? "flip-card flipped" : "flip-card"}>
            <div className="flip-card-inner">
                <div className="flip-card-front" 
                >
                    <div className="open-btn" onClick={() => this.openClose(true)}>
                        OPEN HERE
                    </div>
                </div>
                <div className="flip-card-back Card">
                    <div className="left">
                        <img src={require('../img/logo.svg')} className="logo" alt="logo" />
                        <div className="company-name">Enthusiast Studio</div>
                    </div>
                    <div className="card-side right">
                        <span className="close-btn" onClick={() => this.openClose(false)}>x</span>
                        <div className="top-fields">
                            <h1 className="name">Jekabs Karklins</h1>
                            <h2 className="title">Web Developer</h2>
                        </div>
                        <ul className="bottom-fields">
                            <li>Copenhagen, Denmark</li>
                            <li>+45 42713777</li>
                            <li>jekabs@enthusiast.io</li>
                            <li>enthusiast.io</li>
                            <li><a href="https://linkedin.com/in/jekabs-karklins" target="blank">linkedin.com/in/jekabs-karklins</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    }
};

class State
{
    isOpened: Boolean = false;
    openText: String = "";
}

export default Card;