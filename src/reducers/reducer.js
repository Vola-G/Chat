import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    from: action.from,
                    id: action.id,
                    messages: action.messages,
                    time: action.time
                }
            ])
        default:
            return state
    }
}

console.log(messages.state);

export default messages