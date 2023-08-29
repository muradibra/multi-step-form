import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormData } from '../features/formSlice/formSlice'

function OtherInfo() {
    const dispatch = useDispatch()
    const formData = useSelector(state => state.formReducer.formData)

    const handleInputChange = (key, value) => {
        dispatch(setFormData({ [key]: value }))
    }

    return (
        <div className='other'>
            <span className='optional'>Optional</span>
            <input
                type="text"
                placeholder='Nationality...'
                value={formData.nationality}
                onChange={e => handleInputChange('nationality', e.target.value)}
            />
            <span className='optional'>Optional</span>
            <input
                type="text"
                placeholder='Other...'
                value={formData.other}
                onChange={e => handleInputChange('other', e.target.value)}
            />
        </div>
    )
}

export default OtherInfo