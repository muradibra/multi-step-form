import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, prevStep } from '../features/formSlice/formSlice'
import SignUpInfo from './SignUpInfo'
import OtherInfo from './OtherInfo'
import PersonalInfo from './PersonalInfo'
import { toast } from 'react-toastify'
import { toast_config } from '../config'
import Success from './Success'
// import { errorMessages } from '../Utils/renderErrorMessages'

function Form() {
    const pageTitles = useSelector(state => state.formReducer.formTitles)
    const page = useSelector(state => state.formReducer.page)
    const dispatch = useDispatch()
    const {
        email,
        password,
        confirmPassword,
        firstname,
        lastname,
        username
    } = useSelector(state => state.formReducer.formData)

    const currentPage = () => {
        if (page == 0) {
            return <SignUpInfo />
        } else if (page == 1) {
            return <PersonalInfo />

        } else if (page == 2) {
            return <OtherInfo />
        } else {
            return <Success />
        }
    }

    const toNextPage = () => {

        if (!email && !password && !confirmPassword) {
            toast.error("You must fill all fields!", toast_config)
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters!", toast_config);
            return;
        }


        if (password !== confirmPassword) {
            toast.error("Passwords do not match!", toast_config);
            return;
        }

        if (page == 1) {
            if (!firstname && !lastname && !username) {
                toast.error("Fill out all of the fields!", toast_config)
                return
            }
        }

        dispatch(nextStep())
    }

    return (
        <div className='form'>
            <div className="progress-bar"></div>
            <div className="form-container">
                <div className="form-header">
                    <h1>{pageTitles[page]}</h1>
                </div>
                <div className="form-body">{currentPage()}</div>
                <div className="form-footer">
                    <button
                        disabled={page == 0}
                        onClick={() => dispatch(prevStep())}
                    >
                        Prev
                    </button>
                    {
                        page == pageTitles?.length - 1 ? null
                            :
                            page == pageTitles?.length - 2 ?
                                <button
                                    onClick={() => {
                                        dispatch(nextStep())
                                        toast.success("success", toast_config)
                                    }}
                                >
                                    Submit
                                </button>
                                :
                                <button
                                    disabled={page == pageTitles?.length - 1}
                                    onClick={() => toNextPage()}
                                >
                                    Next
                                </button>
                    }

                </div>
            </div>
        </div>
    )
}

export default Form