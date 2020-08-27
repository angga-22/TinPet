import React, { Fragment } from 'react';
import Nav from '../components/nav/Nav';
import {useSelector} from 'react-redux';
import { Row, Spin} from 'antd';
import '../assets/styles/homepage.css';
import ProfileComponent from '../components/profile/ProfileComponent';
import RightProfile from '../components/profile/RightProfile';


const Profile = () => {

	const loading = useSelector(state => state.profile.loading)

	if(loading){
		return(
			<Spin>
				 <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <ProfileComponent />
                <RightProfile />
            </Row>
        </Fragment>
			</Spin>
		)
	}
    return (
        <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <ProfileComponent />
                <RightProfile />
            </Row>
        </Fragment>
    );
}

export default Profile;

