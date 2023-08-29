import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormData } from '../features/formSlice/formSlice';

function SignUpInfo() {
  const dispatch = useDispatch()
  const { email, password, confirmPassword } = useSelector(state => state.formReducer.formData)

  const handleInputChange = (key, value) => {
    dispatch(setFormData({ [key]: value }))
  }


  return (
    <div className='sign-up'>
      <input
        type="text"
        placeholder='Enter email...'
        value={email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />
      <input
        type="password"
        placeholder='Enter password...'
        value={password}
        onChange={(e) => handleInputChange('password', e.target.value)}
      />
      <input
        type="password"
        placeholder='Confirm password...'
        value={confirmPassword}
        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
      />
    </div>
  )
}

export default SignUpInfo