import React from "react"
import s from "../common/controlForm.module.css"

const InputBoardForm = (field) => (
    <div>
        <label>
            <input className={s.inputCard} {...field.input} autoFocus />
            {field.meta.touched && field.meta.error &&
                <p>{field.meta.error}</p>
            }
        </label>
    </div>
)

export default InputBoardForm;
