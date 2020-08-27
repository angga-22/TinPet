import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MobileStoreButton from 'react-mobile-store-button';
import { Link } from 'react-router-dom';
import './LoginPage.scss';
import { login } from '../store/actions/authentication'
import { useDispatch } from "react-redux";
//import { useForm } from "react-hook-form";


const LoginPage = (props) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const androidUrl = "https://play.google.com/store?hl=en"
    const iosUrl = 'https://www.apple.com/ios/app-store/'

    const submitLogin = async () => {
        const userData = {
            email,
            password
        }
        setLoading(true)
        await dispatch(login(userData, props))
        setLoading(false)
    }


    return (
        <div>
            <div className="login">
                <div className="login__images">
                    <img className="login__images--image-catdog" src={require('../assets/images/cat&dog.svg')} alt='' />
                    <img className="login__images--image-tinpet" src={require('../assets/images/tinpet-logo.svg')} alt='' />
                    <h5 className="login__images--description" > Find Your Pet's Soulmate </h5>
                </div>
                <div className="login__form">

                    <Form
                        name="login-form"
                        className="login__form--form-wrapper"
                        initialValues={{ remember: true }}
                        onFinish={submitLogin}
                    >
                        <h1> Log In </h1>
                        <Form.Item
                            name="email"
                            // onFieldsChange={email}
                            onChange={(e) => setEmail(e.target.value)}
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input className="login__form--form-input"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Email"
                            //value={email}
                            //onChange={(e)=> setEmail(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            // onFieldsChange={password}
                            onChange={(e) => setPassword(e.target.value)}
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input className="login__form--form-input"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            //value={password}
                            //nChange={(e)=> setPassword(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="unchecked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button className="login__form--submit-button"
                                loading={loading}
                                style={{
                                    fontWeight: 'bold',
                                    backgroundColor: '#FF65C5',
                                    width: '100%',
                                    height: '50px',
                                    borderRadius: '5px',
                                    border: 'none'
                                }}
                                type="primary" htmlType="submit">
                                Log In
					</Button>
                        </Form.Item>

                        <Form.Item>
                            <Button className="login__form--submit-button"
                                type="primary"
                                style={{
                                    width: '100%',
                                    height: '50px',
                                    borderRadius: '5px',
                                    backgroundColor: '#3E4C6F',
                                    border: 'none'
                                }}>
                                <Link to='/'> Create New Account </Link>
                            </Button>
                        </Form.Item>

                    </Form>

                    <div className='store'>
                        <MobileStoreButton
                            store='android' url={androidUrl} className='android' />
                        <MobileStoreButton
                            store='ios' url={iosUrl} className='ios' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginPage;
