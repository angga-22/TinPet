import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/nav/Nav';
import CreatePostModal from '../components/modals/CreatePostModal';
import { Row, Spin, } from 'antd';
import '../assets/styles/homepage.css';
import SearchComponent from '../components/search/SearchComponent';
import FeedDisplay from '../components/feed/FeedDisplay';

const HomePage = (props) => {
    const loading = useSelector(state => state.post.loading)

    if (loading) {
        return (
            <Spin size="large" style={{ marginTop: '150px' }}>
                <Fragment>
                    <Nav />
                    <Row className='row-homepage' >
                        <SearchComponent props={props} />
                        <FeedDisplay />
                    </Row>
                    <CreatePostModal />
                </Fragment>
            </Spin>
        )
    }
    return (
        <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <SearchComponent props={props} />
                <FeedDisplay />
            </Row>
            <CreatePostModal />
        </Fragment>
    );
}

export default HomePage;


