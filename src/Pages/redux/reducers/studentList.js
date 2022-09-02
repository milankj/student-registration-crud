import {actionTypes} from '../constants/actionTypes'

// const initialState = {
//     name : '',
//     age : '',
//     gender :'',
//     subjects :'',
//     location : '',
//     address : '',
//     sports : ''
// }

const studentList = (state = [],action) =>{
    console.log(state,'state from list')
    switch (action.type) {
        case actionTypes.STUDENT_LIST:
            return action.payload
        case actionTypes.REMOVE_STUDENT_LIST:
            return state.filter(state =>state.id !== action.payload)
        default:
            return state
    }

}
export default studentList