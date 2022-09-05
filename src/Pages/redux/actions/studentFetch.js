
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

export const newStudent = (student,checked)=>{
    return{
        type: actionTypes.NEW_STUDENT,
        payload : {
            student,
            checked
        }
    }
}

export const formChange = (name,value)=>{
    return{
        type : actionTypes.VALUE_CHANGE,
        payload : {
            name,
            value,
        }
    }
}

export const initialForm = ()=>{
    return {
        type : actionTypes.INITIAL_STATE
    }
}

export const singleForm = (student)=>{
    return {
        type : actionTypes.CREATE_STUDENT,
        payload : student
    }
}