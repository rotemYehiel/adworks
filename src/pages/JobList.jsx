import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { loadJobs } from '../actions/JobAction'

import JobPreview from '../components/JobPreview'
import Filter from '../components/Filter'

class JobList extends PureComponent {
    state = {
        filterBy: ''
    }
    componentWillMount() {
        this.loadJobs();
    }
    loadJobs = () => {
        this.props.loadJobs(this.state.filterBy);
    }
    onFilter = (filterBy) => {
        console.log(filterBy)
        this.setState((prevState) => {
            return {
                filterBy: {
                    ...prevState.filterBy,
                    ...filterBy,
                },
            };
        }, this.loadJobs);
    }
    componentDidMount() {
        this.props.loadJobs(this.state.filterBy);
    }
    render() {
        const { jobs } = this.props;
        return (
            <div className="job-list-cmp">
                <Filter onFilter={this.onFilter} />
                <ul className="job-list clean-list">
                    {jobs.map(job => {
                        return <li key={job.id} className="job-card">
                            <JobPreview job={job} />
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        jobs: state.job.jobs,
    }
}
const mapDispatchToProps = {
    loadJobs
}
export default connect(mapStateToProps, mapDispatchToProps)(JobList)

