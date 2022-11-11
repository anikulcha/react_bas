const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogReducer = (state, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({status: 'send', id: 4, message: body})
            return state
        default:
            return state
    }
    // return state
}

export const sendMessageCreation = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreation = (body) => ({type: UPDATE_NEW_MESSAGE, body: body})

export default dialogReducer