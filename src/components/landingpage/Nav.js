import React, { Fragment } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import './nav.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Nav = () => {


    return (
        <Fragment>
            <Header className="header navBar" >
                <Link to='/homepage'>
                    <div className="logo" >
                        <img className="logo-img" src={require('../../assets/images/tinpet-navbar-logo.svg')} alt='tinpet-logo' />
                    </div>
                </Link>
                <Row justify="end">
                    <Menu mode="horizontal" className='menu-item'>
                        <Menu.Item key="1" >
                            <Link to='/'>
                                <Col flex='auto' >
                                    <p className='text-menu'>Home</p>
                                </Col>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/register'>
                                <Col flex='auto' >
                                    <p className='text-menu'>Apps</p>
                                </Col>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Row>
            </Header>
        </Fragment>
    );
}

export default Nav;
