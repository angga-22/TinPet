import React, { useCallback, useEffect, useState, Fragment } from 'react';
import { Form, Input, Button, Modal, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../store/actions/reqmeeting';
import { useHistory } from 'react-router-dom';
import './RequestMeeting.scss';

const RequestMeeting = (props) => {

    const { setRequestMeeting, requestMeeting } = props
    const dispatch = useDispatch()
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("")
    const [message, setMessage] = useState("")
    const [location, setLocation] = useState("")
    const history = useHistory();
    const [loading, setLoading] = useState(false)

    const { TextArea } = Input;

    //store
    const isAuthenticate = useSelector(state => state.auth.isAuthenticate)
    // const updateStatus = useSelector( state => state.auth.updateStatus)
    const closeModal = useCallback(
        () => {
            setRequestMeeting(false)
        }, [setRequestMeeting],
    )

    useEffect(() => {
        if (isAuthenticate) {
            closeModal()
        }
    }, [isAuthenticate, closeModal])

    const submitRequest = async (e) => {
        e.preventDefault()
        const userData = {
            date,
            hour,
            message,
            location
        }
        // console.log("data", userData)
        setLoading(true)
        await dispatch(request(userData, props.id, { history }))
        setLoading(false)
        setRequestMeeting(false)
    }


    return (
        <Modal style={{ transition: "all .4s ease" }}
            onCancel={() => setRequestMeeting(false)}
            visible={requestMeeting}
            className="modal-reqmeeting"
            footer={null}
        >
            <Spin size="large" style={{ marginTop: '200px' }} spinning={loading}>
                <Fragment>
                    <div className="reqmeeting">
                        <div className="reqmeeting__header">
                            <h1> Request a Meeting </h1>
                        </div>

                        <div className="reqmeeting-wrapper__form">
                            <Form labelCol={{ span: 5, }} wrapperCol={{ span: 35, }} layout="vertical"
                                onFinish={submitRequest}>

                                <Form.Item className="form">
                                    <Form.Item
                                        label="Date"
                                        name="date"
                                        onChange={(e) => setDate(e.target.value)}
                                        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                                    >
                                        <Input type="date" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Hour"
                                        name="hour"
                                        onChange={(e) => setHour(e.target.value)}
                                        style={{ display: 'inline-block', width: '50%', marginLeft: '8px' }}
                                    >
                                        <Input type="time" />
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item
                                    className="form"
                                    label="Message"
                                    onChange={(e) => setMessage(e.target.value)}>
                                    <TextArea rows={6} placeholder="Leave a Message
						" required />
                                </Form.Item>

                                <Form.Item label="Location" className="form"
                                    onChange={(e) => setLocation(e.target.value)}>
                                    <Input placeholder="Input your location" />
                                </Form.Item>
                                <hr />

                                <Form.Item className="button_post">
                                    <Button
                                        loading={loading}
                                        onClick={submitRequest}
                                        type="primary"
                                        style={{
                                            fontWeight: 'bold',
                                            backgroundColor: '#FF65C5',
                                            width: '200px',
                                            height: '40px',
                                            fontSize: '20px',
                                            border: 'none',
                                            borderRadius: '5px'
                                        }}
                                        key="submit">Request</Button>
                                </Form.Item>

                                <Form.Item className="button_cancel">
                                    <Button style={{
                                        width: '200px',
                                        fontSize: '20px',
                                        height: '40px',
                                        borderRadius: '5px'
                                    }}
                                        onClick={() => setRequestMeeting(false)}>Cancel</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Fragment>
            </Spin>
        </Modal>
    );
};

export default RequestMeeting;


