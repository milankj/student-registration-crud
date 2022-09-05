import {configureStore} from '@reduxjs/toolkit'
import studentList from './reducers/studentList'
import formData from './reducers/formData'

 const store = configureStore({
    reducer:{
        studentList,
        formData,
    }
 })

 export default store