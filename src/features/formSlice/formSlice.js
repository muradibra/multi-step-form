import { createSlice } from "@reduxjs/toolkit";
import { errorMessages } from "../../Utils/renderErrorMessages";

const initialState = {
    page: 0,
    formTitles: ["Sign Up", "Personal Info", "Other", "Success"],
    formData: {
        email: "",
        password: "",
        confirmPassword: "",
        firstname: "",
        lastname: "",
        username: "",
        nationality: "",
        other: ""
    },
    // errors: {
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // }
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.page += 1
        },
        prevStep: (state) => {
            state.page -= 1
        },
        setFormData: (state, action) => {
            state.formData = {
                ...state.formData,
                ...action.payload
            }

            // console.log("state", state.formData);
        },
        // renderErrors: (state, action) => {
        //     const { email, password, confirmPassword } = action.payload
        //     state.errors = {
        //         email: !email ? errorMessages.required("Email") : "",
        //         password: !password ? errorMessages.required("Password") : "",
        //         confirmPassword: !confirmPassword ? errorMessages.confirm("password") : ""
        //     }
        //     // return Promise.resolve()
        // }
    }
})

export const {
    nextStep,
    prevStep,
    setFormData,
    // renderErrors
} = formSlice.actions

export default formSlice.reducer