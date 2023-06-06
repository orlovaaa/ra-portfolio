import React from 'react'
import Toolbar from './Tolbar'
import ProjectList from './ProjectList'

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: props.profile.filters[0]}
        this.projectsList = props.profile.projects
        this.filters = props.profile.filters
    }

    selectFilter(event) {
        this.setState({ selected: event.target.textContent })
    }

    render() {
        const projects = this.state.selected === this.filters[0] ? this.projectsList[0] : this.projectsList[0].filter(item => item.category === this.state.selected);
        
        return (
            <div className="main-content">
                <Toolbar
                    filters={this.filters}
                    selected={this.state.selected}
                    onSelectFilter={(filter) => this.selectFilter(filter)}
                />
                <ProjectList projects={projects}/>
            </div>
        )
    }
}