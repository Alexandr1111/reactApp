const ADD_DIALOG = 'ADD-DIALOG';


let initialState = {
    messagesData : [
        {id:1, message:'Hi'},
        {id:2, message:'How are you?'},
        {id:3, message:'YO!'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    if (action.type === ADD_DIALOG){
        let newPost = {
            id: 4,
            message: action.postMessage
        };

        //state.messagesData.push(newPost);
        state.push(newPost);
    }

    return state; //Если никакого экшена не произошло возвращает state как и был как минимум

}

export const addDialogActionCreator = (text) => {
    return {
        type: ADD_DIALOG,
        postMessage: text
    }
}

export default dialogsReducer;