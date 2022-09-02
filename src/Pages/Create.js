import React from 'react'

function Create() {
    const handleSubmit = () => {
        console.log('ok')
    }
    return (
        <div className='container h-100'>
            <div className='row h-100 justify-content-center align-items-center pt-5'>
                <div className='col-10 col-md-8 col-lg-6 form-background p-5 rounded-4 text-left'>
                    <h1 className='text-center'>Create New </h1>
                    <form className='mt-5' onSubmit={handleSubmit}>
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
                                name='age'
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label
                                htmlFor='gender'>
                                Gender :
                            </label>
                            <div className='ms-5 d-flex'>
                                <div className='ms-3'>
                                    <input
                                        htmlFor='male'
                                        name='gender'
                                        type='radio' />
                                    <label
                                        id='male'>
                                        Male
                                    </label>
                                </div>
                                <div className='ms-3'>
                                    <input
                                        htmlFor='female'
                                        name='gender'
                                        type='radio' />
                                    <label
                                        id='male'>
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
                                    Subject
                            </label>
                            <select className='ms-5'>
                                <option value='maths'>Maths</option>
                                <option value='english'>English</option>
                                <option value='physics'>Physics</option>
                                <option value='chemistry'>Chemistry</option>
                                <option value='computer'>Computer</option>
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
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create