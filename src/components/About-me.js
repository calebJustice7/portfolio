import React, { Component } from 'react';
import $ from 'jquery';

export default class AboutMe extends Component {
    componentDidMount() {
        this.animateChevron();
    }

    animateChevron() {
        $('.icon-two').animate({ bottom: 208 }, 350, () => this.anim())
    }
    anim() {
        $('.icon-two').animate({ bottom: 200 }, 350, () => this.animateChevron())
    }
    scroll() {
        $('html, body').animate({
            scrollTop: $("#target2").offset().top + 100
        }, 1000);
        return false;
    }

    render(){
        return (
            <div className="about-me-wrapper" >
                <div className="content">
                    <div className="title">About me</div>
                    <div className="body">
                        Hi! My name is Caleb. I like to code. Since beginning my journey over a 
                        year ago, I took on many languages and frameworks. I specialize 
                        in front-end frameworks like react and angular. I also know some 
                        backend technologies, like MongoDB, NodeJS, Firebase, JSON. 
                        I am always learning more and looking for a challenge.
                    </div>
                    <div className="animate"></div>
                    <div className="icon-two">
                        <i onClick={() => this.scroll()} className="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        )
    }
}