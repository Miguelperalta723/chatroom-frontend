import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosAuth.js';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginForm = ({ errors , touched  }) => {

    return(
        <div>
            <h2>Login</h2>
            <Form>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type="email" name="email" placeholder="Email" />
                </div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password" />
                <button >Login</button>
            </Form>
        </div>
    )
}

const FormikLoginForm = withFormik({

    mapPropsToValues({ email, password}){
        return {
            email: email || "",
            password: password || ""
        };
    },

    //VALIDATION SCHEMA
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be 6 character or longer")
            .required("Password is required")
    }),
    //END VALIDATION SCHEMA

    handleSubmit(values, {props}){
        console.log(values)
        console.log(props)
        axiosWithAuth()
        .post("/api/users/login", values)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            props.history.push('/chat')
        })
        .catch(err => {
            console.log(err)
        })
    }

})(LoginForm)


export default FormikLoginForm;