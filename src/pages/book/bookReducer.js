const INITIAL_STATE = { list: []   }


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return { list:action.payload || []}
        default:
            return state
    }
}