import profileReducer from "./ProfileReducer/Profile_reducer";
import dialogsReducer from "./DialogsReducer/Dialogs_reducer";

let store = {

    _state : {

        dialogsData : [
            {id:1, name:'Dima'},
            {id:2, name:'Julia'},
            {id:3, name:'Sveta'},
            {id:4, name:'Kate'}
        ],

        messagesData : [
            {id:1, message:'Hi'},
            {id:2, message:'How are you?'},
            {id:3, message:'YO!'}
        ],

        profilePostsData : [
            {message:'HELLO', likes: 0},
            {message:'Hi', likes: 10},
            {message:'OK!', likes: 20}
        ],

        friendsData : [
            {name: 'Sveta'},
            {name: 'Yulia'},
            {name: 'Vasya'}
        ]
    },
    getState(){
        return this._state;
    },
    //наблюдатель наблюдает за объектом и когда с объектом что-то происходит он уведомляется
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber () {

    },

    //что бы вы не хотели поменять внутри стора исп метод dispatch
    //action - это объект, будет текстовое свойство type: 'что нужно сделать'
    //меняет state

    dispatch(action){

        this._state.profilePostsData = profileReducer(this._state.profilePostsData, action);

        this._state.messagesData = dialogsReducer(this._state.messagesData, action);

        this._callSubscriber(this._state);

    }

}

export default store;