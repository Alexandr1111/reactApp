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
        <div className={ s.dialog }>{ props.message }</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name:'Dima'},
        {id:2, name:'Julia'},
        {id:3, name:'Sveta'},
        {id:4, name:'Kate'}
     ]

// = как ниже, зарефакторили
//     let dialogsElements = [
//         <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
//         <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
//         <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
//         <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
//     ]

    let messagesData = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you?'},
        {id:3, message:'YO!'}
    ]


    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = messagesData.map( m => <Message message={m.message} id={m.id} />);

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={s.messages}>

                { messagesElements }

            </div>
        </div>
    )
}

export default Dialogs;