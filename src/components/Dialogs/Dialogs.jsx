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

    // let dialogsData = [
    //     {id:1, name:'Dima'},
    //     {id:2, name:'Julia'},
    //     {id:3, name:'Sveta'},
    //     {id:4, name:'Kate'}
    //  ]

// = как ниже, зарефакторили
//     let dialogsElements = [
//         <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
//         <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
//         <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
//         <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
//     ]

    let messageRef = React.createRef();

    let addMessage = () => {
        let text = messageRef.current.value;
        //alert(text);
        props.dispatch({ type : 'ADD-POST', postMessage : text});//Получаем по пропсам dispatch, выбираем ключевое слово метода и его параметры если есть
        messageRef.current.value = '';//Зануляем поле после добавления поста
    }


    let dialogsElements = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messagesData.map( m => <Message message={m.message} id={m.id} />);

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={s.messages}>

                { messagesElements }

            </div>

            <div>
                <textarea ref={messageRef}/>
            </div>
            <div>
                <button className={ s.forBtn } onClick={ addMessage } > add post </button>
            </div>

        </div>
    )
}

export default Dialogs;