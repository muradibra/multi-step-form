import React from 'react'
import Form from './components/Form'
import './assets/css/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='app'>
      <div className='form-wrapper'>
        <Form />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App