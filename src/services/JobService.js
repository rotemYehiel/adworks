import axios from 'axios';

const baseUrl = 'https://us-central1-better-roi.cloudfunctions.net/job-search'
const dataParams = {
    "q": "cashier",
    "size": 20,
    "r": 35,
    "geo": "us",
    "lat": "33.9526",
    "long": "-84.54993",
    "formatted_address": "Marietta, Georgia, United States",
    "botName": "jobs-bear",
    "page": 1
}


async function loadJobs(filterBy) {
    return await axios.post(`${baseUrl}`, dataParams).then(res => {
        let jobs = res.data;
        jobs.forEach(job => {
            job.id = _makeId()
        });
        if (filterBy.term) {
            jobs = _filter(filterBy.term, jobs)
        }
        return jobs
    })
}

function _filter(term, jobsToFilter) {
    term = term.toLocaleLowerCase()
    return jobsToFilter.filter(job => {
        return job.title.toLocaleLowerCase().includes(term)
    })
}
function _makeId(length = 10) {
    let txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

export default {
    loadJobs
}