import { actionTypes } from '../constants/actionTypes'

const initialState = {
    fullName: '',
    age: '',
    gender: '',
    subject: '',
    location: '',
    address: '',
    football : false,
    cricket : false,
    hockey : false,
    basketball : false
}

const formData = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_STUDENT:
            return action.payload
        case actionTypes.EDIT_STUDENT:
            return state
        case actionTypes.VALUE_CHANGE:
            const { name, value } = action.payload
            return { ...state, [name]: value }
        case actionTypes.INITIAL_STATE :
            return initialState
        default:
            return state
    }
}

export default formData