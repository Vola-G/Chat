import {  messageReceived } from '../actions/actions'

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://st-chat.shas.tel')
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        data.map((message) => 
            dispatch(messageReceived(message))
        )
    }
    return socket
}

export default setupSocket