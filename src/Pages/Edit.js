import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneStudent, patchStudent} from '../services'
import Form from './components/Form'
import {initialForm, singleForm } from './redux/actions/studentFetch'
import {useNavigate, useParams} from 'react-router-dom'
function Edit() {
  const formData = useSelector(state => state.formData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id}  = useParams()
  const handleSubmit = (e) => {
    e.preventDefault()
    patchStudent(formData,id)
      .then(res=>{
        if(res.status===200){
          console.log(res.data)
          navigate('/')
          dispatch(initialForm())
        }
      })
  }
  useEffect(()=>{
    getOneStudent(id)
      .then(res=>dispatch(singleForm(res.data)))
  },[dispatch,id])
  return (
    <div className='container h-100'>
      <div className='row h-100 justify-content-center align-items-center'>
        <div className='col-10 col-md-8 col-lg-6 form-background p-5 rounded-4 text-left'>
          <h1 className='text-center'>Edit</h1>
          <Form handleSubmit={handleSubmit} formData={formData} />
        </div>
      </div>
    </div>

  )
}

export default Edit