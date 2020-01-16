//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Maksimka'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'What\'s up men?'},
        {id: 2, message: 'How is your React?'},
        {id: 3, message: 'I\'m a boss...!'},
        {id: 4, message: '[̲̅L̲̅][̲̅o̲̅][̲̅v̲̅][̲̅e̲̅]♪ ♫ ♬▁▂▃▄ |̲̅̅●̲̅̅|̲̅̅=̲̅̅|̅●̲̅̅| ▄▃▂▁♬ ♫ ♪[̲̅M̲̅][̲̅u̲̅][̲̅s̲̅][̲̅i̲̅][̲̅c̲̅]'},
        {id: 5, message: 'I\'m easy!'},
        {id: 6, message: 'Never look back!'},
        {id: 7, message: 'Strive for greatness...!'},
        {id: 8, message: 'You are your only limit'}
    ],
    // newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return {
        //         ...state,
        //         newMessageBody: action.body
        //     };
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                //newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
// export const updateNewMessageBodyCreator = (body) =>
//     ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;