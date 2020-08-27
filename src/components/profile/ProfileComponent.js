import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './profile-comp.css';
import { Col, Avatar, Row, Button } from 'antd';
import UpdateProfileModal from './../modals/UpdateProfileModal';
import { getProfile } from '../../store/actions/profile';


const ProfileComponent = (props) => {
    const [updateProfileModal, setUpdateProfileModal] = useState(false);
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.profileDetail)

    const openUpdateProfileModal = async () => {
        await setUpdateProfileModal(true)
    }

    useEffect(() => {
        dispatch(getProfile())
        return () => {
        }
    }, [dispatch])

    return (
        <Fragment>
            <Col className='profile-component box-profile' lg={6} md={24} sm={24} xs={24}>
                <Row justify="center" style={{ marginTop: 50 }}>
                    <Avatar className='img-profile' src={profile.image_url} />
                </Row>
                <Row style={{ textAlign: 'center' }} >
                    <Col className='name-profile' xl={24} xs={24}>
                        {profile.full_name}
                    </Col>
                    <Col className='desc-profile' xl={24} xs={24}>
                        {profile.description}
                    </Col>
                    <Col style={{ marginTop: '1%' }} xl={24} xs={24} >
                        <Button type='text' style={{ margin: '2em 0px' }} onClick={openUpdateProfileModal}>
                            <p className='text-edit-profile'>
                                Edit Profile
                                </p>
                        </Button>
                        <UpdateProfileModal
                            dispatch={dispatch}
                            updateProfileModal={updateProfileModal}
                            setUpdateProfileModal={setUpdateProfileModal}
                        />
                    </Col>
                </Row>

            </Col>
        </Fragment>
    );
}
// {profile.description}
export default ProfileComponent;
