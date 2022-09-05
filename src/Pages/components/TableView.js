import React from 'react'
import {useNavigate} from 'react-router-dom'

function TableView(props) {

    const navigate = useNavigate()
    console.log(props.football)
    return (
        <tr>
            <th scope="row">{props.fullName}</th>
            <td>{props.age}</td>
            <td>{props.gender}</td>
            <td>{props.subject}</td>
            <td>{props.location}</td>
            <td>{props.address}</td>
            <td>{props.football && <p>Football</p>}
                {props.cricket && <p>Cricket</p>}
                {props.hockey && <p>Hockey</p>}
                {props.basketball && <p>Basketball</p>}           
            </td>
        <span
            role='button' 
            className='btn btn-outline-success ms-5'
            onClick={()=>{navigate(`${props.id}/edit`)}}
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