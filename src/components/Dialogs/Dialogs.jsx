import React from 'react'
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return(
        <div className={style.dialog}>
            <NavLink 
                to={path}
                className={navData => navData.isActive ? 
                            style.active : style.dialog}
            >
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Thor'},
        {id: 3, name: 'Tour'},
        {id: 4, name: 'Zeus'},
        {id: 5, name: 'Mars'},
        {id: 6, name: 'MLRS Himars'},
        {id: 7, name: 'Odin'},
        {id: 8, name: 'Ra'},
        {id: 9, name: 'Susanoo'},
        {id: 10, name: 'Amaterasu'}
    ]
    let dialogsElements = dialogsData.map(dialog =>  <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesData = [
        { id: 1, message: 'В период моего пребывания в одной большой азиатской стране я часто по работе и из любопытства общался с её жителями.'},
        { id: 2, message: 'Ознакомившись с её описанием я внезапно нашел ключевую, как мне кажется, параллель развития страны строителей коммунизма и модели искусственного интеллекта от развитой демократии. Если вам тоже интересно - добро пожаловать внутрь'},
        { id: 1, message: 'Я здесь собрал кое-какие способы (не все), с помощью которых можно редактировать файлы, находящиеся на удаленных машинах, при этом используя свой локально настроенный и причесанный vim со всеми плюшками.'},
    ]
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