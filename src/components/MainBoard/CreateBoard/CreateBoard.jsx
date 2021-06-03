import React, { useState } from 'react'
import s from '../CreateBoard/createBoard.module.css'
import exitButton from ".././../../assets/exit.png"
import Board from '../BoardData/Board'
import { Field, reduxForm  } from 'redux-form';
import InputBoardForm  from '../../common/ControlForm'
import ListItem from '../../NodeList/ListItem';
import { useDispatch, useSelector } from 'react-redux';

const modes = {
    board: "board",
    changeBoard: "changeBoard"
}

const CreateBoard = (props) => {
 
    // const dispatch = useDispatch();
    // const newBoard = useSelector();


    let [mode, setMode] = useState(modes.board)

    const onSubmit = (formData) => {
        console.log(formData);
    }

    const cancelCreating = () => {
        setMode(modes.board);
    }

    if (mode === modes.board) {
        return <div className={s.card}>
            <div className={s.createCard}>
                <h3 className={s.titleCard}>Creating a board</h3>
                <div onClick={cancelCreating}>
                    <img className={s.exitCard} src={exitButton}></img>
                </div>
            </div>
            <div className={s.askBlock}>
                <h5 className={s.askCard}>What shall we call the board?</h5>
                <div>
                    <SubmitBoardForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    }
    return <Board />
}

function validate (values) {
    const errors = {}
    if (!values.boardInput || values.boardInput === '') {
        errors.boardInput = "Oops! Looks like you forgot the name!"
    }
    return errors
}

const SubmitForm = ({ handleSubmit, cancelCreating }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="boardInput" type="text" component={InputBoardForm} />
            <div className={s.bgroupCard}>
                <button className={s.b1Card} onClick={cancelCreating} >  CANCEL </button>
                <button className={s.b2Card} onClick={handleSubmit}> CREATE </button>
            </div>
        </form>
    )
}

const SubmitBoardForm = reduxForm({
    validate,
    form: 'inputBoard'
})(SubmitForm);


export default CreateBoard;