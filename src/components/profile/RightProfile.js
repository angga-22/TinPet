import React, { Fragment, useState } from 'react';
import { Col, Row, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './right-profile.css';
import PostCard from './post/PostCard';

const RightProfile = () => {
    const [current, setcurrent] = useState('post')

    const handleClick = e => {
        // console.log('click ', e);
        setcurrent({ current: e.key });
    }

    return (
        <Fragment>
            <Col className='box-right-profile feed-component' lg={{ span: 17, offset: 1 }} md={24} sm={24} xs={24}>
                <Row className='row-profile' justify='center' style={{ marginBottom: '40px' }} >
                    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="post" className='menu-profile'>
                            <Link to='/profile'>
                                Post
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="notif" className='menu-profile'>
                            <Link to='/notif'>
                                Notification
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="message" className='menu-profile'>
                            <Link to='/message'>
                                Message
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Row>
                <Row className='feed-post'>
                    <PostCard />
                </Row>
            </Col>
        </Fragment>
    );
}

export default RightProfile;
