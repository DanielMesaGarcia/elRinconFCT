import React, { useState } from "react";
import { supabase } from "../../services/supabaseClient"; // Make sure you have your Supabase client set up
import { Form, Input, Button, Row, Col, Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg"

const AuthPage = () => {
  const [error, setError] = useState(null);
  const [formMode, setFormMode] = useState("login");
//reusing the form for sign up and log in
  const toggleFormMode = () => {
    setFormMode(formMode === "login" ? "signup" : "login");
    setError(null); // Clear any previous errors
  };

  const navigate = useNavigate();
//login code for supabase
  const handleLogin = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      }else{
        //saving so we can display and access it without having to call the api
        localStorage.setItem('currentUser', email);
        navigate(`/home`);
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };
//same thing
  const handleSignup = async ({ email, password }) => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      const { data } = await supabase.from("userTable").insert({
        email,
      });
      if (error) {
        setError(error.message);
      }else{
        localStorage.setItem('currentUser', email);
        navigate(`/home`);
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center pt-100">
      <Row justify="center">
        <Col span={32}>
          <div className="flex justify-center">
            {/*<h1 className="text-3xl">
              {formMode === "login" ? "Log In" : "Sign Up"}
            </h1>*/}
            <img src={logo}/>
          </div>
          <Form
            name="authForm"
            initialValues={{ remember: true }}
            onFinish={formMode === "login" ? handleLogin : handleSignup}
          >
            <p className="pt-100">Email address</p>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email" }]}
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>
            <p className="pt-20">Password</p>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Form.Item>
              <Button
                className="w-310 h-60 mt-100 bg-darkGrey rounded-2xl text-2xl text-white font-fira"
                htmlType="submit"
              >
                {formMode === "login" ? "Log In" : "Sign Up"}
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center" }}>
            {formMode === "login" ? (
              <span className="font-fira text-xl">
                Don't have an account?{" "}
                <a
                  className="font-semibold"
                  onClick={toggleFormMode}
                >
                  Sign Up
                </a>
              </span>
            ) : (
              <span className="font-fira text-xl">
                Already have an account?
                <a
                  className="font-fira text-xl font-semibold"
                  onClick={toggleFormMode}
                >
                  Log In
                </a>
              </span>
            )}
          </div>
          {error && (
            <Alert
              message={error}
              type="error"
              style={{ marginBottom: "10px" }}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AuthPage;
