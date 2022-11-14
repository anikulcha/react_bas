import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageCreation, updateNewMessageBodyCreation } from '../../state/dialogReducer'

const Dialogs = (props) => {
    const state = props.store.getState().dialogPage

    let dialogsElements = 
            state.dialogs.map(
                dialog =>  
                    <DialogItem name={dialog.name} 
                                id={dialog.id} 
                    />
            )

      
    let messagesElements = 
            state.messages.map(
                message => 
                <Message message={message.message} 
                        id={message.id} 
                />
            )
    
    let newMessageBody = state.newMessageBody

    let sendMessageOnClick = () => {
        props.store.dispatch(sendMessageCreation())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreation(body))
    }

    return (
        <div className={style.dialogs}>
            
            <div className={style.dialogsItems}>
                <h2 className={style.title}>Dialog</h2>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <div className={style.formMessage}>
                    <textarea placeholder='enter your message'
                              onChange={onNewMessageChange}
                              value={newMessageBody}
                    ></textarea>
                    <button onClick={ sendMessageOnClick }>Send message</button>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs