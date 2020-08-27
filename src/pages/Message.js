import React, { Fragment } from 'react';
import Nav from '../components/nav/Nav';
import { Row } from 'antd';
import '../assets/styles/homepage.css';
import ProfileComponent from '../components/profile/ProfileComponent';
import RightMessage from '../components/message/RightMessage';


const Notification = () => {
    return (
        <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <ProfileComponent />
                <RightMessage />
            </Row>
        </Fragment>
    );
}

export default Notification;

