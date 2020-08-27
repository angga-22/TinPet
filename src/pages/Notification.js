import React, { Fragment } from 'react';
import Nav from '../components/nav/Nav';
import { Row } from 'antd';
import '../assets/styles/homepage.css';
import ProfileComponent from '../components/profile/ProfileComponent';
import RightNotif from '../components/notification/RightNotif';


const Notification = () => {
    return (
        <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <ProfileComponent />
                <RightNotif />
            </Row>
        </Fragment>
    );
}

export default Notification;

