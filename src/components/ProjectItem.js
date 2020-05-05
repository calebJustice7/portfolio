import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function ProjectItem(props) {
    const { img, stack, name } = props.data;
    return (
        <Spring
            from={{ opacity: 0, marginTop: '200px' }}
            to={{ opacity: 1, marginTop: '0px' }}
        >
            {props => (
                <div style={props}>
                    <div style={props}>
                        <div className="project-item-wrapper">
                            <img src={img} />
                            <div className="content">
                                <div className="stack">{stack}</div>
                                <div className="project-name">{name}</div>
                                <div className="buttons-wrapper">
                                    <button>Live View</button>
                                    <button>Github</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    )
}