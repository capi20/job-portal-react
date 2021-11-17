const initialState = {
    shortList: [],
    rejectList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SHORTLIST_CANDIDATE':
            return {
                ...state,
                shortList: [
                    ...state.shortList,
                    action.data
                ]
            }
        case 'ADD_REJECT_CANDIDATE': 
            return {
                ...state,
                rejectList: [
                    ...state.rejectList,
                    action.data
                ]
            }
        default: return state
    }
    
}

export default reducer