import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MobileStoreButton from 'react-mobile-store-button';
import { Link } from 'react-router-dom';
import { register } from "../store/actions/authentication";
import './RegisterPage.scss';



const RegisterPage = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const androidUrl = "https://play.google.com/store?hl=en"
    const iosUrl = 'https://www.apple.com/ios/app-store/'
    const submitRegister = async () => {
        const userData = {
            username: name,
            email,
            password,
            confirm_password: confirmPassword
        }
        // console.log('userdata', userData) 
        setLoading(true)
        await dispatch(register(userData, props))
        setLoading(false)
    }


    // const validatePassword = (value, callback ) => {
    // 	if( validateStatus === "success"){
    // 		callback('success')
    // 	} else {
    // 		callback()
    // 	}
    // }


    return (
        <div>
            <div className="register">
                <div className="register__images">
                    <img className="register__images--image-catdog" src={require('../assets/images/cat&dog.svg')} alt='catdog' />
                    <img className="register__images--image-tinpet" src={require('../assets/images/tinpet-logo.svg')} alt='tinpet' />
                    <h5 className="register__images--description" > Find Your Pet's Soulmate </h5>
                </div>
                <div className="register__form">
                    <Form
                        name="register-form"
                        className="register__form--form-wrapper"
                        initialValues={{ remember: true }}
                        onFinish={submitRegister}
                    >
                        <h1> Sign Up </h1>
                        <Form.Item
                            name="name"
                            // onFieldsChange={name}
                            onChange={(e) => setName(e.target.value)}
                            rules={[{ required: true, message: 'Please input your Name!' }]}
                        >
                            <Input className="register__form--form-input" placeholder="Name" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            // onFieldsChange={email}
                            onChange={(e) => setEmail(e.target.value)}
                            rules={[{ required: true, message: 'Please input a valid Email!' }]}
                        >
                            <Input className="register__form--form-input"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Email"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            rules={[{ required: true, message: 'Password must be at least 8 characters!' }]}
                        >
                            <Input
                                className="register__form--form-input"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password must be at least 8 characters"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm-password"
                            onChange={(e) => setConfirmPassword(e.target.value)}

                            rules={[{ required: true, message: 'Please confirm your Password!' }]}
                        >
                            <Input
                                className="register__form--form-input"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </Form.Item>

                        <Form.Item className="register__form--form-button">
                            <h5> By signing up, you agree to our <Link to='/'> Terms </Link> and <Link to='/'> Privacy Policy </Link> </h5>
                        </Form.Item>

                        <Form.Item>
                            <Button className="register__form--submit-button"
                                loading={loading}
                                style={{
                                    fontWeight: 'bold',
                                    backgroundColor: '#FF65C5',
                                    width: '100%',
                                    height: '50px',
                                    borderRadius: '5px',
                                    border: 'none'
                                }} type="primary" htmlType="submit">
                                Sign Up
	                        </Button>
                        </Form.Item>

                        <Form.Item className="register__form--form-button">
                            <h5> Already have account? <Link to='/login'> Sign in </Link> </h5>
                        </Form.Item>
                    </Form>

                    <div className='store'>
                        <MobileStoreButton
                            store='android' url={androidUrl} className='android-register' />
                        <MobileStoreButton
                            store='ios' url={iosUrl} className='ios-register' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;

