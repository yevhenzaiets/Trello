import React, { useState } from 'react';
import s from './board.module.css';
import CreateBoard from '../CreateBoard/CreateBoard';



const modes = {
    board: "board",
    createBoard: "createBoard"
}

const Board = (props) => {

    let [mode, setMode] = useState(modes.board)

    if (mode === modes.board) {
        return <div className={s.boardBlock} onClick={ () => {setMode(modes.createBoard)}} >
            <div className={s.createNewBoard}>
                <h3>Create a new board...</h3>
            </div>
        </div>
    }
    return <CreateBoard />
}

export default Board;

// const Board = (props) => {

    // let [mode, setMode] = useState(modes.board)

    // const dispatch = useDispatch();
    // const newBoard = useSelector(getNewBoard)

    // if (mode === modes.board) {
        // return <div className={s.boardBlock} onClick={() => dispatch(createNewBoard(newBoard))}>
        //     <div className={s.createNewBoard}>
        //         <h3>Create a new board...</h3>
        //     </div>
        // </div>
    // }
    // return <ChangeDesk />
// }

// export default Board;