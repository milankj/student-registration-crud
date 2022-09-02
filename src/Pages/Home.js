import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addStudentList, removeStudentList } from './redux/actions/studentFetch'
import TableView from './components/TableView';

function Home() {
    const studentList = useSelector(state => state.studentList)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/milankj/student-registration/students`)
            .then(res => {
                dispatch(addStudentList(res.data))
            })
    }, [dispatch])
    console.log(studentList[0])
    const handleDelete = (id) => {
        dispatch(removeStudentList(id))
    }
    return (
        <div className='container'>
            <div
                className='
                    mt-5
                    d-flex
                    justify-content-center
                    align-items-center'>
                <button
                    className='btn 
                    btn-primary'
                    onClick={() => navigate('/create')}
                >
                    Create
                </button>
            </div>
            <table className="table mt-5">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Subjects</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Address</th>
                        <th scope='col'>Sports</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map(student => {
                            return (
                                <TableView
                                    key={student.id}
                                    handleDelete={handleDelete}
                                    {...student}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home