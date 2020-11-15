import JobService from '../services/JobService'

export function loadJobs(filterBy) {
    return async dispatch => {
        const jobs = await JobService.loadJobs(filterBy);
        dispatch({ type: 'SET_JOBS', jobs })
    }
}

