import React from 'react';
import { data } from '../assets/projects';
import ProjectItem from './ProjectItem';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ['REACT', 'ANGULAR', 'NODEJS / VANILLA'],
            angular: [],
            react: [],
            nodeJSVanilla: [],
            activeProjects: []
        }
    }
    componentDidMount() {
        this.setState({
            angular: data.angular,
            react: data.react,
            nodeJSVanilla: data.nodeJSVanilla
        })
    }
    showProjects = (cat) => {
        this.setState({
            activeProjects: []
        })
        setTimeout(() => {
            if(cat === 'REACT') {
                this.setState({
                    activeProjects: this.state.react
                })
            }
            else if(cat === 'ANGULAR') {
                this.setState({
                    activeProjects: this.state.angular
                })
            }
            else if(cat === 'NODEJS / VANILLA') {
                this.setState({
                    activeProjects: this.state.nodeJSVanilla
                })
            }
        }, 100)
    }
    render() {
        return (
            <div id="target2" className="projects-page-wrapper">
                <div className="categories-wrapper">
                    <div className="title">PROJECTS</div>
                    {this.state.categories.map((cat, idx) => (
                        <span onClick={() => this.showProjects(cat)} key={idx}>{ cat }</span>
                    ))}
                </div>

                <div className="projects">
                    {this.state.activeProjects.map((proj, idx) => (
                        <ProjectItem key={idx} data={proj} />
                    ))}
                </div>
            </div>
        )
    }
}