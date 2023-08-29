import React from 'react'
import { useSelector } from 'react-redux'

function Success() {
  const formData = useSelector(state => state.formReducer.formData)
  return (
    <div className='success'>
      <div>Email: {formData.email}</div>
      <div>Password: {formData.password}</div>
      <div>Firstname: {formData.firstname}</div>
      <div>Lastname: {formData.lastname}</div>
      <div>Username: {formData.username}</div>
      {
        formData.nationality ?
          <div>Nationality: {formData.nationality}</div>
          : ""
      }
      {
        formData.other ?
          <div>Other: {formData.other}</div>
          : ""
      }
    </div>
  )
}

export default Success