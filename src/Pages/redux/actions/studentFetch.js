import {actionTypes} from '../constants/actionTypes'

export const addStudentList = (student) =>{
    return {
        type : actionTypes.STUDENT_LIST,
        payload : student
    }
}

export const removeStudentList = (id)=>{
    return{
        type : actionTypes.REMOVE_STUDENT_LIST,
        payload : id
    }
}