import React, { useState,useEffect} from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Spinner from "../components/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const {data} = await axios.post("/api/v1/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem("user", JSON.stringify({ ...data.user, password:''}));
      navigate('/');
    } catch (error) {
      setLoading(false);
      message.error('something went wrong');
    }
  };

  useEffect(()=>{
    if(localStorage.getItem("user"))
    {
        navigate("/");
    }
},[navigate]);

  return (
    <div className="login-page">
      {loading && <Spinner />}
      <div className="login-form-container">
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Expense Tracker</h1>
          <h2>Login Form</h2>
          <Form.Item  label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
            </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register" style={{color: "black"}}>not a user ? click here to register</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary link-button">Login</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
