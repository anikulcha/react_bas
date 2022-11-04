import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {dialogsData, messagesData} from './../../index'

const Dialogs = () => {

    let dialogsElements = dialogsData.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = messagesData.map(message => <Message message={message.message} id={message.id} />)
    
    return (
        <div className={style.dialogs}>
            
            <div className={style.dialogsItems}>
                <h2 className={style.title}>Dialog</h2>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs