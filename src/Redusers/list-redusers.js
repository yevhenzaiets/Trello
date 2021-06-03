const ADD_LIST = "ADD_LIST"


let initialState = {
    listItems: [],
    isFetching: true
}

const listReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST: {
            return {
                ...state,
                listItems: action.listItems
            }
        }
        default:
            return state
    }
}

export const addList = (listItem) => ({ type: ADD_LIST, listItem })

export default listReduser