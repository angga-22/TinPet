import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import './search.css';
import { Row, Col, Button, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { searchPet } from '../../store/actions/searchPet';


const SearchComponent = () => {

    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch()

    const searchButton = async (e) => {
        e.preventDefault()
        const userData = {
            location, category
        }
        setLoading(true)
        await dispatch(searchPet(userData))
        setLoading(false)
        history.push("/searchresult")
    }

    return (
        <Fragment>
            <Col className='search-component box-search' xl={6} lg={5} md={24} sm={24} xs={24}>
                <Row justify='center' style={{ marginTop: 32 }} >
                    <Form onChange={(e) => setLocation(e.target.value)} className="btn-search">
                        <Input className="input-search" type='text' placeholder='Search Location' />
                    </Form>
                </Row>
                <Row justify='center' style={{ marginTop: 20 }} >
                    <Form onChange={(e) => setCategory(e.target.value)} className="btn-search">
                        <Input className="input-search" type='text' placeholder='Input Animal Type' />
                    </Form>
                </Row>
                <Row justify='center' style={{ marginTop: 20 }} >
                    <Button block loading={loading} onClick={searchButton} className='btn-search btn-search-color' >
                        Search
                        </Button>
                </Row>
            </Col>
        </Fragment>
    );
}

export default SearchComponent;


