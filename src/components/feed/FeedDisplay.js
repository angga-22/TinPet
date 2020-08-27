import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import CreatePostModal from '../modals/CreatePostModal'
import './feed.scss';
import CardFeed from './CardFeed';

const FeedDisplay = (props) => {

    const [createPostModal, setCreatePostModal] = useState(false);
    const dispatch = useDispatch();
    // const pets = useSelector(state => state.post.pets)
    // console.log(pets, 'ini data pets')

    const openCreatePostModal = async () => {
        await setCreatePostModal(true)
    }

    return (
        <Fragment>
            <Col className='box feed-component' xl={{ span: 17, offset: 1 }} lg={{ span: 18, offset: 1 }} md={24} sm={24} xs={24}>
                <Row className='row-btn-post' style={{ marginBottom: '40px' }} >
                    <Col lg={24} xs={24}>
                        <Button className='btn-post' block onClick={openCreatePostModal}>
                            <span style={{ float: 'left', marginRight: '20px' }}><PlusSquareOutlined /></span>
                            Write a post
                        </Button>
                        <CreatePostModal
                            dispatch={dispatch}
                            createPostModal={createPostModal}
                            setCreatePostModal={setCreatePostModal}
                        />

                    </Col>
                </Row>
                <Row className='feed-post'>
                    <CardFeed />
                </Row>
            </Col>
        </Fragment>
    );
}

export default FeedDisplay;
