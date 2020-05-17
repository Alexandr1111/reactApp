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
    _callSubscriber () {

    },
    //Если пишем экспорт без default, то импорт будет вида { Точное название экпортируемого }
    addPost (postMassage) {
    //Принимаем текст и пушим его в массив MessagesData под ключом id: 5 и message: полученный текст
        let newPost = {
            id: 4,
            message: postMassage
        };

        this._state.messagesData.push(newPost);
        this._callSubscriber(this._state);
    },
    //наблюдатель наблюдает за объектом и когда с объектом что-то происходит он уведомляется
    subscribe (observer) {
        this._callSubscriber = observer;
    }


}


export default store;