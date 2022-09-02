import React from 'react'
import {useNavigate} from 'react-router-dom'

function TableView(props) {

    const navigate = useNavigate()

    return (
        <tr>
            <th scope="row">{props.name}</th>
            <td>{props.age}</td>
            <td>{props.gender}</td>
            <td>

                {props.subjects.map(sub => {
                    return (<p key={sub}>{sub},</p>)
                })}
            </td>
            <td>{props.location}</td>
            <td>{props.address}</td>
            <td>{props.sports}</td>
        <span
            role='button' 
            className='btn btn-outline-success ms-5'
            onClick={()=>{navigate('/edit')}}
            >
            Edit
        </span>
        <span 
            role='button'
            className='btn btn-outline-danger ms-5'
            onClick={()=>props.handleDelete(props.id)}
            >
            Delete
        </span>
        </tr>
    )
}

export default TableView