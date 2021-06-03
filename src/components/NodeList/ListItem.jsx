import React, { useState } from 'react'
import s from "./../NodeList/ListItem.module.css"
import Items from './Items/Items'

const modes = {
    list: "list",
    changeList: "changeList"
}

const ListItem = ({title}) => {

    let [mode, setMode] = useState(modes.list)

    if (mode === modes.list) {
        return <div className={s.listBlock} onClick={() => setMode(modes.changeList)}>
            <a className={s.link} >
                <div className={s.titleList}>
                    <h2>{title}</h2>
                </div>
            </a>
        </div>
    }
    return <Items/>
}


export default ListItem