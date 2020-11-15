import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import JobPreview from '../components/JobPreview'
import { loadJobs } from '../actions/JobAction'


const JobList = (props) => {
    const [jobs, setJobs] = useState(props.jobs);
    const [filterBy, setFilterBy] = useState('');

    useEffect(() => {
        console.log("call?")
        const loadJobs = async () => {
            await props.loadJobs()
        }
        if (props.jobs !== jobs) loadJobs()
        // setJobs(props.jobs)
    }, [])

    return (
        <div className="job-list-cmp">
            <input type="text" value={filterBy} onChange={(ev) => setFilterBy(ev.target.value)} />
            <ul className="jobs-list clean-list">
                {jobs.map(job => {
                    return <li key={job.id} className="job-card">
                        <JobPreview job={job} />
                    </li>
                })}
            </ul>

        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.job.jobs)
    return {
        jobs: state.job.jobs,
    }
}
const mapDispatchToProps = {
    loadJobs
}
export default connect(mapStateToProps, mapDispatchToProps)(JobList)
