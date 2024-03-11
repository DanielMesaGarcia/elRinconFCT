import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient'; // Make sure you have your Supabase client set up
import { Form, Input, Button, Row, Col, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


const AuthPage = () => {
  const [error, setError] = useState(null);
  const [formMode, setFormMode] = useState('login');

  const toggleFormMode = () => {
    setFormMode(formMode === 'login' ? 'signup' : 'login');
    setError(null); // Clear any previous errors
  };

  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        setError(error.message);
      }else{
        localStorage.setItem('currentUser', JSON.stringify(data));
        navigate(`/home`);
      }
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const handleSignup = async ({ email, password }) => {
    try {

      
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      const { data } = await supabase.from('userTable').insert({
        email,
      });
      if (error) {
        setError(error.message);
      }else{
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate(`/home`);
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="  w-390 h-844 bg-grey flex justify-center items-center">

    <Row justify="center" >
      
      <Col span={32}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="text-2xl font-bold mb-6">{formMode === 'login' ? 'Log In' : 'Sign Up'}</h1>
        </div>
        <Form
          name="authForm"
          initialValues={{ remember: true }}
          onFinish={formMode === 'login' ? handleLogin : handleSignup}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button  htmlType="submit" style={{ width: '100%' }}>
              {formMode === 'login' ? 'Log In' : 'Sign Up'}
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          {formMode === 'login' ? (
            <span>
              Don't have an account?{' '}
              <a onClick={toggleFormMode}>Sign Up</a>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <a onClick={toggleFormMode}>Log In</a>
            </span>
          )}
        </div>
        {error && (
          <Alert message={error} type="error" style={{ marginBottom: '10px' }} />
        )}
      </Col>
    </Row>
    </div>
  );
};


export default AuthPage;
