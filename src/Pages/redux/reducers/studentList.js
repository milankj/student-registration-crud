import {actionTypes} from '../constants/actionTypes'

const studentList = (state = [],action) =>{
    switch (action.type) {
        case actionTypes.STUDENT_LIST:
            return action.payload
        case actionTypes.REMOVE_STUDENT_LIST:
            return state.filter(state =>state.id !== action.payload)
        case actionTypes.NEW_STUDENT:
            return [...state,action.payload]
        default:
            return state
    }

}
export default studentList