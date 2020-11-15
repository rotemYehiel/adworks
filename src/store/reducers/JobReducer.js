const initialState = {
    jobs: [],

}
export default function JobReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_JOBS':
            return {
                ...state,
                jobs: action.jobs
            }
        default:
            return state;
    }
}