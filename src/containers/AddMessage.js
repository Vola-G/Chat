import { connect } from 'react-redux'
import AddMessageComponent from '../components/SendMessage'
import { addMessage } from '../actions/actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)