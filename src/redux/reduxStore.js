import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer/Profile_reducer";
import dialogsReducer from "./DialogsReducer/Dialogs_reducer";


let reducers = combineReducers({
    profilePostsData : profileReducer,
    messagesData : dialogsReducer
});



let store = createStore(reducers);








export default store;