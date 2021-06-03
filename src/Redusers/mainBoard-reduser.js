import { CREATE_NEW_BOARD, CANCEL_NEW_BOARD, SUBMIT_NEW_BOARD } from "../actions/ActionTypes";
const SET_ACTIVE_BOARD = "SET_ACTIVE_BOARD"

let initialState = {
    isBoardOpen: false,
    title: null,
    id: null,
    boards: [],
    lists: []
}

const boardReduser = (state = initialState, {type, payload}) => {
    switch (type) {
        case CREATE_NEW_BOARD: {
            const { newBoard } = payload;
            const boards = [...state.boards, newBoard]
            return {
                ...state,
                boards
            }
        }
        case SET_ACTIVE_BOARD: {
            return {
                ...state,
                isBoardOpen: true
            }
        }
        case CANCEL_NEW_BOARD: {
            return {
                ...state,
                isBoardOpen: false,
                title: null,
                isOpenBoard: false,
                id: null
            }
        }
        case SUBMIT_NEW_BOARD: {
            return {
                ...state,
                isBoardOpen: false,
                title: null,
                id: null
            }
        }
        default:
            return state
    }
}

export default boardReduser;