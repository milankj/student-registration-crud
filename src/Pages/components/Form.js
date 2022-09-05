import React from 'react'
import { useDispatch} from 'react-redux'
import { formChange } from '../redux/actions/studentFetch'

function Form(props) {

    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target
        console.log(type)
        type === 'checkbox' ? dispatch(formChange(value, checked)) : dispatch(formChange(name, value))
    }
    return (
        <form className='mt-3' onSubmit={props.handleSubmit}>
            <div className='form-group mb-3'>
                <label
                    htmlFor='fullName'
                    className=' mb-3'>
                    Enter Name
                </label>
                <input
                    className='form-control p-2'
                    type='text'
                    placeholder='Enter Full Name'
                    id='fullName'
                    name='fullName'
                    value={props.formData.fullName}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group mb-3'>
                <label
                    htmlFor='age'
                    className=' mb-3'>
                    Enter Age
                </label>
                <input
                    className='form-control p-2'
                    type='text'
                    placeholder='Enter Age'
                    id='age'
                    value={props.formData.age}
                    name='age'
                    onChange={handleChange}
                />
            </div>
            <div className='form-group mb-3'>
                <label
                    htmlFor='gender'>
                    Gender :
                </label>
                <div className='ms-5 d-flex'>
                    <div className='ms-5'>
                        <input
                            htmlFor='male'
                            name='gender'
                            type='radio'
                            value='male'
                            onChange={handleChange}
                        />
                        <label
                            id='male'>
                            Male
                        </label>
                    </div>
                    <div className='ms-3'>
                        <input
                            htmlFor='female'
                            name='gender'
                            type='radio'
                            value='female'
                            onChange={handleChange} />
                        <label
                            id='female'>
                            Female
                        </label>
                    </div>
                </div>
            </div>
            <div className='form-group mb-3'>
                <div className='form-group mb-3'>
                    <label
                        htmlFor='subject'
                        className='mb-3'>
                        Subject :
                    </label>
                    <select
                        className='ms-5'
                        name='subject'
                        value={props.formData.subject}
                        onChange={handleChange}>
                        <option value=''>---Choose---</option>
                        <option value='Maths'>Maths</option>
                        <option value='English'>English</option>
                        <option value='Physics'>Physics</option>
                        <option value='Chemistry'>Chemistry</option>
                        <option value='Computer'>Computer</option>
                    </select>
                </div>
                <label
                    htmlFor='location'
                    className=' mb-3'>
                    Enter Location
                </label>
                <input
                    className='form-control p-2'
                    type='text'
                    placeholder='Enter Location'
                    id='location'
                    name='location'
                    value={props.formData.location}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group mb-3'>
                <label
                    htmlFor='address'
                    className=' mb-3'>
                    Enter Address
                </label>
                <input
                    className='form-control p-2'
                    type='text'
                    placeholder='Enter Address'
                    id='address'
                    name='address'
                    value={props.formData.address}
                    onChange={handleChange}
                />
            </div>
            <div className='form-group mb-3'>
                <label className='me-3'>Sports: </label>
                <input type='checkbox' onChange={handleChange} checked={props.formData.football} className='ms-3' name='sport' value='football' />
                <label className='ms-1'>Football</label>
                <input type='checkbox' onChange={handleChange} checked={props.formData.cricket} className='ms-3' name='sport' value='cricket' />
                <label className='ms-1'>Cricket</label>
                <input type='checkbox' onChange={handleChange} checked={props.formData.hockey} className='ms-3' name='sport' value='hockey' />
                <label className='ms-1'>Hockey</label>
                <input type='checkbox' onChange={handleChange} checked={props.formData.basketball} className='ms-3' name='sport' value='basketball' />
                <label className='ms-1'>Basketball</label>
            </div>
            <button className='btn btn-info'>Submit</button>
        </form>
    )
}

export default Form