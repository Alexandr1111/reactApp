//action types
const ADD_POST = 'ADD-POST';

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

        if (action.type === ADD_POST){
                //Принимаем текст и пушим его в массив MessagesData под ключом id: 5 и message: полученный текст
                let newPost = {
                    id: 4,
                    message: action.postMessage
                };

                this._state.messagesData.push(newPost);
                this._callSubscriber(this._state);
        }

    }

}


//Не прокидываем по пропсам, т.к. это по-сути просто утилита
export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        postMessage: text
    }
}


export default store;