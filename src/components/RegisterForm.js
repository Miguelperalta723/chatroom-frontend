import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosAuth.js';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

const RegisterForm = ({ errors , touched  }) => {
   
    return(
        <div>
            <h2>Register</h2>
            <Form>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type="email" name="email" placeholder="Email" />
                </div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password" />
                <button >Register</button>
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

    handleSubmit(values, props){
        console.log(values)
        console.log(props)
        axiosWithAuth()
        .post("/api/users/register", values)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            props.props.history.push("/chat")
        })
        .catch(err => {
            console.log(err)
        })
    }

})(RegisterForm)


export default FormikLoginForm;