import React from 'react'

const JobPreview = (props) => {
    const { job } = props
    return (
        <div className="job-preview-cmp">
            <h3>{job.title}</h3>
            {job.locationStr ? (<p>Location: {job.locationStr}</p>) : ''}
            {job.isPartTime ? (<p>Part time job</p>) : (<p>Full time job</p>)}
            {job.url ? (<a href={job.url}>Get this job!</a>) : ''}
        </div>
    )
}

export default JobPreview
