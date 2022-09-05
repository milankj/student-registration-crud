import React from 'react'
import Form from './components/Form'
import { postStudent } from '../services'
import {initialForm } from './redux/actions/studentFetch'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
function Create() {
    const formData = useSelector(state => state.formData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        postStudent(formData)
            .then(res => {
                if (res.status === 201) {
                    console.log(res)
                    navigate('/')
                    dispatch(initialForm())
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='container h-100'>
            <div className='row h-100 justify-content-center align-items-center'>
                <div className='col-10 col-md-8 col-lg-6 form-background p-5 rounded-4 text-left'>
                    <h1 className='text-center'>Create New </h1>
                    <Form handleSubmit={handleSubmit} formData={formData}/>
                </div>
            </div>
        </div>
    )
}

export default Create