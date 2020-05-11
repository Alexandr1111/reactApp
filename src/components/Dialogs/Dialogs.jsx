import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div>
            <div className={`${s.dialog} ${s.active}`}>
                <NavLink to={path}> {props.name} </NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return(
        <div>
            <div className={s.message}>{ props.message }</div>
        </div>
    )
}

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Dima" id="1" />

                <DialogItem name="Julia" id="2" />

                <DialogItem name="Sveta" id="3" />

                <DialogItem name="Kate" id="4" />

            </div>
            <div className={s.messages}>

                <Message message='Hi' />

                <Message message='How are you?' />

                <Message message='YO!' />

            </div>
        </div>
    )
}

export default Dialogs;