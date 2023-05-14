import { Layout, Button, Form, Input, notification } from "antd";
import React, { useEffect } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/LoginSlice"
import { useHistory } from "react-router-dom";



function Login() {




  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const loginRes = useSelector(state => state.loginSlice);

  const history = useHistory();

  const [api, contextHolder] = notification.useNotification();




  const openNotificationWithIcon = (type, message, description) => {

    api[type]({
      message: message,
      description:
        description
    });

  };









  const onFormFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };





  const onFinish = async (values) => {




    const response = await dispatch(login({
      email: values.email,
      password: values.password
    }));





    if (loginRes.isError === true) {

      openNotificationWithIcon("error", "Error", "Enter a correct details or might be a problem from server side");

    }


    else {



      localStorage.setItem('jwt', loginRes && response.payload.token)
      localStorage.setItem('email', loginRes && response.payload.email);
      form.resetFields();



      setTimeout(() => {
        history.push('/');
      }, 800)

    }





  };








  useEffect(() => {



    if (localStorage.getItem("email") && localStorage.getItem("jwt")) {

      history.push("/");
    }




  }, [])







  return (
    <Layout className="login-page">
      <Form form={form} className="form-main" layout="vertical" onFinish={onFinish}
        onFinishFailed={onFormFinishFailed}
        autoComplete="off">
        <h1 style={{ fontSize: '50px' }}>Login</h1>
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
      {contextHolder}
    </Layout>
  );
}

export default Login;
