import React from 'react'
import Board from './BoardData/Board'
import s from './mainBoard.module.css'


const MainBoard = (props) => {
    return(
        <div className={s.boardsGroup}>
            <Board/>
        </div>
    )
}

export default MainBoard