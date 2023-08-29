import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormData } from '../features/formSlice/formSlice'

function PersonalInfo() {
    const dispatch = useDispatch()
    const formData = useSelector(state => state.formReducer.formData)

    const handleInputChange = (key, value) => {
        dispatch(setFormData({ [key]: value }))
    }

    return (
        <div className='personal-info'>
            <input type="text"
                placeholder='Firstname...'
                value={formData.firstname}
                onChange={e => handleInputChange("firstname", e.target.value)}
            />
            <input type="text"
                placeholder='Lastname...'
                value={formData.lastname}
                onChange={e => handleInputChange("lastname", e.target.value)}
            />
            <input type="text"
                placeholder='Username...'
                value={formData.username}
                onChange={e => handleInputChange("username", e.target.value)}
            />
        </div>
    )
}

export default PersonalInfo