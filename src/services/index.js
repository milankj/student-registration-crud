import axios from 'axios'

export const getStudent = ()=>{
    return axios.get(`http://localhost:3000/students`)
}

export const getOneStudent = (id)=>{
    return axios.get(`http://localhost:3000/students/${id}`)
}

export const postStudent = (formData)=>{
    return axios.post(`http://localhost:3000/students`,{...formData})
}

export const patchStudent = (formData,id)=>{
    return axios.patch(`http://localhost:3000/students/${id}`,{...formData})
}

export const deleteStudent = (id)=>{
    return axios.delete(`http://localhost:3000/students/${id}`,)
}