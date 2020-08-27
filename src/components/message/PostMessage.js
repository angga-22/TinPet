import React, { useState, Fragment } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { postMessages } from '../../store/actions/messages';
import './PostMessage.scss';

const PostMessages = (props) => {
    const { postMessage, setPostMessage } = props
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const sendMessage = async () => {
        const userData = {
            message
        }
        setLoading(true)
        await dispatch(postMessages(userData, props.id))
        setLoading(false)
        setPostMessage(false)
    }


    const { TextArea } = Input;

    return (
        <Modal style={{ transition: "all .4s ease" }}
            onCancel={() => setPostMessage(false)}
            visible={postMessage}
            className="modal-post-message"
            footer={null}
        >
            <Fragment>
                <div className="post-message">
                    <h1> Send a Message </h1>
                    <Form labelCol={{ span: 5, }} wrapperCol={{ span: 35, }} layout="vertical" onFinish={sendMessage}>
                        <Form.Item
                            label=""
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            className="form-message"
                        >
                            <TextArea allowClear="true" rows={6} placeholder="Type your message here" required />
                            <div className="button-message">
                                <Button onClick={() => setPostMessage(false)}
                                    style={{
                                        width: '200px',
                                        fontSize: '20px',
                                        height: '40px',
                                        borderRadius: '5px'
                                    }}
                                >Cancel</Button>
                                <Button
                                    loading={loading}
                                    style={{
                                        fontWeight: 'bold',
                                        backgroundColor: '#FF65C5',
                                        color: 'white',
                                        width: '200px',
                                        height: '40px',
                                        fontSize: '20px',
                                        border: 'none',
                                        borderRadius: '5px'
                                    }}
                                    onClick={sendMessage}>Send</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        </Modal>
    )
}

export default PostMessages;