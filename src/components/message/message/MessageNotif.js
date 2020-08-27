import React, { Fragment, useEffect } from 'react';
import { Row, Col, Avatar } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import './MessageNotif.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessage, deleteMessage } from '../../../store/actions/messages';

const MessageNotif = () => {
    const dispatch = useDispatch()
    const getAllM = useSelector(state => state?.messageTampung?.allMessage)

    useEffect(() => { dispatch(getAllMessage()) }, [dispatch])

    const delMessage = async (id) => {
        const res = await dispatch(deleteMessage(id));
        if (res) {
            // console.log('success delete')
        } else {
            // console.log("failed delete")
        }
    }

    const mList = getAllM.map(m => {
        return (
            <>
                <Row style={{ height: '', width: '100%', margin: '0px 0px 20px 0px' }} >
                    <Row style={{ width: '100%' }}>
                        <Col xl={{ offset: 1, span: 22 }} lg={{ offset: 2, span: 20 }} sm={{ offset: 2, span: 20 }} xs={{ offset: 4, span: 18 }} className='box box-post' style={{ borderRadius: '5px' }} >
                            <Row >
                                <Col xl={4} md={4} sm={4} xs={4} style={{ marginTop: '2vh' }} >
                                    <Avatar size={90} src={m?.User?.Profile?.image_url} />
                                </Col>
                                <Col className='pets-data' xl={{ span: 19, offset: 0 }} md={{ span: 18, offset: 1 }} sm={{ span: 17, offset: 2 }} xs={{ span: 15, offset: 4 }}   >
                                    <Row >
                                        <p className='m-notif' style={{ fontWeight: 'bold' }} > {m?.User?.Profile?.full_name} </p>
                                    </Row>
                                    <Row >
                                        <p> {m.message} </p>
                                    </Row>
                                </Col>
                                <Col className="delete-message" xl={1} sm={1} xs={1} justify='end'>

                                    <DeleteFilled style={{ color: '#ff847c' }} onClick={() => delMessage(m.id)} />

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </>
        )
    })

    return (
        <Fragment>
            {mList}
        </Fragment>
    );
}

export default MessageNotif;
