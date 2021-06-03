import { CREATE_NEW_BOARD } from "./ActionTypes"

export const createNewBoard = (newBoard) => ( {type: CREATE_NEW_BOARD, payload: { newBoard } } )
