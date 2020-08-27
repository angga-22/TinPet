import React, { useState } from 'react';
import { Modal, Form, Input, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './UpdateProfileModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../../store/actions/editProfile';
const { TextArea } = Input;

const UpdateProfileModal = (props) => {

    const { setUpdateProfileModal, updateProfileModal } = props
    const dispatch = useDispatch();
    const [full_name, setFull_name] = useState('')
    const [image, setImage] = useState(null)
    const [email, setEmail] = useState('')
    const [mobile_number, setMobile_number] = useState('')
    const [full_address, setFull_address] = useState('')
    const [description, setDescription] = useState('');
    const [imagePreview, setImagePreview] = useState('')
    const [loading, setLoading] = useState(false)

    //selector
    const profile = useSelector(state => state.profile.profileDetail)
    // console.log(profile, ' ini data profile')

    const saveChanges = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("full_name", full_name)
        data.append("email", email)
        data.append("image", image)
        data.append("mobile_number", mobile_number)
        data.append("full_address", full_address)
        data.append("description", description)
        setLoading(true)
        await dispatch(editProfile(data))
        setLoading(false)
        setUpdateProfileModal(false)
    }

    const onChangeImage = (e) => {
        // console.log('image', e.target.files) 
        setImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    // const currentProfile = profile.map((item) =>{

    return (
        <Modal style={{ transition: "all .4s ease" }}
            onCancel={() => setUpdateProfileModal(false)}
            visible={updateProfileModal}
            className="modal-updateprofile"
            footer={null}
        >
            <div className="updateprofile-wrapper">

                <h1> Edit Profile </h1>
                <div className="updateprofile-wrapper__changepicture">
                    <label for="image" className="updateprofile-wrapper__changepicture--image">
                        <Avatar icon={<UserOutlined />}
                            style={{ cursor: "pointer", borderRadius: "50%" }} src={imagePreview || profile.image_url} size={200} /> </label>
                    <input
                        id="image"
                        type="file"
                        name="image"
                        onChange={onChangeImage}
                        style={{ display: 'none' }}
                        placeholder="Upload your photo"
                    />
                </div>

                <Form labelCol={{ span: 5, }} wrapperCol={{ span: 35, }} layout="vertical" className="updateprofile-wrapper__form">
                    <Form.Item label="Full Name" onChange={(e) => setFull_name(e.target.value)}>
                        <Input type="text" defaultValue={profile.full_name} className="updateprofile-wrapper__form--input" />
                    </Form.Item>

                    <Form.Item label="Email" onChange={(e) => setEmail(e.target.value)}>
                        <Input type="email" defaultValue={profile.email} className="updateprofile-wrapper__form--input" />
                    </Form.Item>

                    <Form.Item label="Mobile Number" onChange={(e) => setMobile_number(e.target.value)}>
                        <Input type="number" className="updateprofile-wrapper__form--input" defaultValue={profile.mobile_number} />
                    </Form.Item>

                    <Form.Item label="Full Address" onChange={(e) => setFull_address(e.target.value)}>
                        <Input type="text" className="updateprofile-wrapper__form--input" defaultValue={profile.full_address} />
                    </Form.Item>

                    <Form.Item label="Description" onChange={(e) => setDescription(e.target.value)}>
                        <TextArea type="text" className="updateprofile-wrapper__form--input" defaultValue={profile.description}
                            placeholder="About Me" />
                    </Form.Item>

                    <Form.Item className="updateprofile-wrapper__form--button-post">
                        <Button
                            loading={loading}
                            onClick={saveChanges}
                            type="primary"
                            style={{
                                fontWeight: 'bold',
                                backgroundColor: '#FF65C5',
                                width: '200px',
                                height: '40px',
                                fontSize: '20px',
                                border: 'none',
                                borderRadius: '5px'
                            }} key="submit">Save Changes</Button>
                    </Form.Item>

                    <Form.Item className="updateprofile-wrapper__form--button-cancel">
                        <Button
                            style={{
                                width: '200px',
                                fontSize: '20px',
                                height: '40px',
                                borderRadius: '5px'
                            }}
                            onClick={() => setUpdateProfileModal(false)}>Cancel</Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    )
};

export default UpdateProfileModal;