const ADD_DIALOG = 'ADD-DIALOG';

const dialogsReducer = (state, action) => {

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