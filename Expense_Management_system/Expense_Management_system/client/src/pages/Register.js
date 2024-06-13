import React,{useState,useEffect} from 'react';
import {Form,Input,message} from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import "./Register.css"
const Register = () =>{
    const navigate = useNavigate();
    const [loading,setLoading]=useState(false);
    //form submit
    const submitHandler= async (values)=>{
        try {
            setLoading(true);
            await axios.post("/api/v1/users/register",values);
            message.success('Registration successful');
            setLoading(false);
            navigate("/login");
        } catch (error) {
            setLoading(false)
            if(error.response){
            if(error.response.status===401)
            {
                message.error("password doesn't match");
            }
            if(error.response.status===400)
            {
                message.error('something went wrong');
            }}
        }
    };
    //prevent for login user
    useEffect(()=>{
        if(localStorage.getItem("user"))
        {
            navigate("/");
        }
    },[navigate]);
    return (
        <div className="register-page">
            {loading && <Spinner/>}
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>Expense Tracker</h1>
                <h2>Register Form</h2>
                <Form.Item label="Name" name="name">
                    <Input type="name" placeholder="Enter the Name"/>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type="email" placeholder="Ex: Email@gmail"/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password" placeholder="Enter the Password"/>
                </Form.Item>
        <Form.Item label="Confirm-Password" name="Confirm password">
            <Input type="password" placeholder="Confirm the Password"/>
        </Form.Item>
                <div className="d-flex justify-content-between">
                    <Link to="/login" style={{color: "black"}}>Already Register ? click here to login</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn btn-primary'>Register</button>
                </div>
            </Form>

        </div>
    )
}
export default Register