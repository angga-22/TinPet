import React, { Fragment } from 'react';
import Nav from '../components/nav/Nav';
import SearchComponent from '../components/search/SearchComponent';
import { Row, Spin } from 'antd';
import { useSelector } from 'react-redux';
import '../assets/styles/homepage.css';
import SearchDisplay from '../components/search/SearchDisplay';

const SearchResult = (props) => {

    const loading = useSelector(state => state.searchPet.loading)
    if (loading) {
        return (
            <Spin size="large" style={{ marginTop: '150px' }}>
                <Fragment>
                    <Nav />
                    <Row className='row-homepage' >
                        <SearchComponent props={props} />
                        <SearchDisplay />
                    </Row>
                </Fragment>
            </Spin>
        )
    }

    return (
        <Fragment>
            <Nav />
            <Row className='row-homepage' >
                <SearchComponent props={props} />
                <SearchDisplay />
            </Row>
        </Fragment>
    )
}

export default SearchResult;



