const ADD_POST = 'ADD-POST';

let initialState = {
    profilePostsData : [
        {message:'HELLO', likes: 0},
        {message:'Hi', likes: 10},
        {message:'OK!', likes: 20}
    ]
};

//reducer это функция, которая получает экшен и нужную часть стейта
const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST){
        //Принимаем текст и пушим его в массив MessagesData под ключом id: 5 и message: полученный текст
        let newPost = {
            message: action.postMessage,
            likes: 0
        };

        state.push(newPost);
    }


    return state; //Если никакого экшена не произошло возвращает state как и был как минимум

}

//Не прокидываем по пропсам, т.к. это по-сути просто утилита
export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        postMessage: text
    }
}

export default profileReducer;