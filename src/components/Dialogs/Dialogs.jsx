import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
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
        let action = addDialogActionCreator(text);
        props.dispatch(action);//Получаем по пропсам dispatch, выбираем ключевое слово метода и его параметры если есть
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
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>YO!</div>
            </div>
        </div>
    )
}

export default Dialogs;