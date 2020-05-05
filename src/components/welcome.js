import React from 'react';
import Typical from 'react-typical';
import $ from 'jquery';

export default class Welcome extends React.Component {
    componentDidMount() {
        this.animateChevron();
    }

    animateChevron() {
        $('.icon').animate({ bottom: 8 }, 350, () => this.anim())
    }
    anim() {
        $('.icon').animate({ bottom: -8 }, 350, () => this.animateChevron())
    }

    scroll() {
        $('html, body').animate({
            scrollTop: $("#target").offset().top + 100
        }, 1000);
        return false;
    }

    render() {
        return (
            <div className="welcome-page-wrapper">
                <div className="content">
                    <div className="top">Caleb Justice</div>
                    <div className="bottom">I am a
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                ' coder',
                                1000,
                                ' designer',
                                1000,
                                ' front end developer.',
                                1000
                            ]}
                        />
                    </div>
                </div>
                <div id="target" className="icon">
                    <i onClick={() => this.scroll()} className="fas fa-chevron-down"></i>
                </div>
            </div>
        )
    }
}