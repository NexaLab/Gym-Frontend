import { Layout, Button, Form, Input } from "antd";
import React from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../services/LoginSlice"

function Login() {
    const [form] = Form.useForm();

    const dispatch = useDispatch();

    const loginRes = useSelector(state  => state.loginSlice)
    localStorage.setItem('jwt', loginRes.data)

    console.log(loginRes)

    
  


const onFormFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const onFinish = (values) => {
    dispatch(login({email: values.email ,
     password: values.password
    }));
    form.resetFields()
  };

  return (
    <Layout className="login-page">
      <Form form={form} className="form-main" layout="vertical"  onFinish={onFinish}
                onFinishFailed={onFormFinishFailed}
                autoComplete="off">
        <h1 style={{fontSize: '50px'}}>Login</h1>
        <div className="form-container">
          <Form.Item
            label={<p style={{ fontSize: "16px", margin: "0px" }}>Email</p>}
            name="email"
          >
            <Input className="input-field" />
          </Form.Item>
          <Form.Item
            label={<p style={{ fontSize: "16px", margin: "0px" }}>Password</p>}
            name="password"
          >
            <Input.Password className="input-field" />
          </Form.Item>
        </div>
        <div className="button-container">
          <div className="login-button-container">
            <Button
              type="primary"
              style={{
                width: "100%",
                fontSize: "15px",
                backgroundColor: "#8323ff",
                marginTop: "10px",
              }}
              htmlType="submit"
            >
              Login
            </Button>
          </div>
        </div>
      </Form>
    </Layout>
  );
}

export default Login;
