import * as types from '../constants/ActionTypes';


export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    from: author,
    message: message,
})

export const addUser = name => ({
    type: types.ADD_USER,
    name
})

export const messageReceived = (message) => ({
    type: types.MESSAGE_RECEIVED,
    from: message.from,
    id: message.id,
    messages: message.messages,
    time: message.time
})