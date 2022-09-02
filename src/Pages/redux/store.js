 import {configureStore} from '@reduxjs/toolkit'
import studentList from './reducers/studentList'

 const store = configureStore({
    reducer:{
        studentList
    }
 })

 export default store