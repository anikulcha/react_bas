import React from 'react'
import style from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={`${style.dialog} ${style.active}`}>Andrey</div>
                <div className={style.dialog}>Tor</div>
                <div className={style.dialog}>Tur</div>
                <div className={style.dialog}>Zeus</div>
                <div className={style.dialog}>Mars</div>
                <div className={style.dialog}>MLRS Himars</div>
                <div className={style.dialog}>Odin</div>
                <div className={style.dialog}>Ra</div>
                <div className={style.dialog}>Susanoo</div>
                <div className={style.dialog}>Amaterasu</div>

            </div>
            <div className='messages'>
                <div className="message">
                    hi
                </div>
                <div className="message">my name is...</div>
                <div className="message">Thunder rumbled out of a clear sky. and Mjolnir, Thor's hammer, slammed to the ground.</div>
            </div>
        </div>
    )
}

export default Dialogs