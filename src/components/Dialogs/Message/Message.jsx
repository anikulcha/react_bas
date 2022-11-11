import React from 'react'
import style from './../Dialogs.module.css'


const likeMessage = () => {
    alert('likeMSG')
}

const Message = (props) => {
    return <div onDoubleClick={likeMessage} className={style.message}>{props.message}</div>
}

export default Message