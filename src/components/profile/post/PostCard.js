import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Button, Typography, Form, Input } from 'antd';
import { HeartOutlined, MailOutlined, HeartFilled, DeleteFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { getSinglePets, deletePost } from '../../../store/actions/getSinglePets';
import axios from 'axios';
import './postcard.css';
import { getPostComment, deleteComment } from '../../../store/actions/comment';
import { Link } from 'react-router-dom';

const { Text, Paragraph } = Typography

const PostCard = () => {

    const dispatch = useDispatch()
    const SenderId = localStorage.getItem('userID')
    const [comment, setCommentValue] = useState('')
    const [loading, setLoading] = useState(false)
    const postPets = useSelector(state => state.getSinglePets.petsDetail)

    useEffect(() => {
        dispatch(getSinglePets())
    }, [dispatch])

    const delPost = async (id) => {
        const res =
            setLoading(true)
        await dispatch(deletePost(id));
        setLoading(false)
        if (res) {
            // console.log('success delete')
        } else {
            // console.log("failed delete")
        }
    }
    //handling like
    const handleLike = async (pets_id) => {
        const token = localStorage.getItem('token')
        const likeUrl = `https://product-tinpet-app.herokuapp.com/api/v1/likes/${pets_id}`
        try {
            const res = await axios({
                method: 'post',
                url: likeUrl,
                headers: {
                    Authorization: token
                }
            })
            if (res.data.status === 'success') {
                dispatch(getSinglePets())
            } else {
            }
        } catch (error) {
        }
    }

    //handling comment post
    const sendComment = (id) => {
        const commentData = {
            comment
        }
        dispatch(getPostComment(commentData, id))
        setCommentValue('')
    }

    //handling delete comment
    const delComment = async (id) => {
        await dispatch(deleteComment(id));
    }


    //map card
    const postPetsList = postPets.map((item) => {

        //handle like
        const ituLah = item.Likes.reduce((result, option) => {
            if (option.isLike) {
                return result.concat(option.SenderId)
            }
            return result;
        }, [])


        //handle comment
        let commentView = item.Comments.map((cd) => {
            return (
                <li key={cd.id} className='comment-list'>
                    <Row style={{ marginTop: '-10px' }}>
                        <Col span={23} >
                            <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'more' }}>
                                <Text><span style={{ fontWeight: 'bold' }}>{cd.User.username}</span>   {cd.comment}</Text>
                            </Paragraph>
                        </Col>
                        <Col span={1}>
                            <DeleteFilled style={{ color: '#ff847c', float: 'right', cursor: 'pointer' }}
                                onClick={() => delComment(cd.id)}
                            />
                        </Col>
                    </Row>
                </li>
            )
        })


        return (
            <>
                <Row style={{ height: '', width: '100%' }} >
                    <Row style={{ width: '100%' }}>
                        <Col xl={{ offset: 1, span: 22 }} lg={{ offset: 2, span: 20 }} sm={{ offset: 2, span: 20 }} xs={{ span: 24 }} className='box box-post' style={{ borderRadius: '5px' }} >
                            <Row >
                                <Col xl={8} md={12} sm={{ span: 24 }} xs={{ span: 24 }} >
                                    <img alt='post' src={item.image_url} style={{ height: 248, width: '100%', borderRadius: '15px' }} />
                                </Col>
                                <Col className='pets-data' xl={{ span: 15, offset: 1 }} md={{ span: 11, offset: 1 }} sm={{ span: 24 }} xs={{ span: 24 }}  >
                                    <Row>
                                        <Col span={12}>
                                            <p style={{ fontSize: '14px', color: '#7B7B7B', lineHeight: '17px' }} >Name</p>
                                            <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '-5px', lineHeight: '22px' }}>{item.name}</p>
                                        </Col>
                                        <Col span={11}>
                                            <p style={{ fontSize: '14px', color: '#7B7B7B', lineHeight: '17px' }} >Gender</p>
                                            <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '-5px', lineHeight: '22px' }}>{item.gender}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <p style={{ fontSize: '14px', color: '#7B7B7B', lineHeight: '17px' }} >Age</p>
                                            <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '-5px', lineHeight: '22px' }}> {item.age} </p>
                                        </Col>
                                        <Col span={12}>
                                            <p style={{ fontSize: '14px', color: '#7B7B7B', lineHeight: '17px' }} >Category</p>
                                            <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '-5px', lineHeight: '22px' }}> {item?.Search?.category} </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <p style={{ fontSize: '14px', color: '#7B7B7B', lineHeight: '17px' }} >Location</p>
                                            <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '-5px', lineHeight: '22px', paddingRight: '20px' }}> {item?.Search?.location} </p>
                                        </Col>
                                        <Col span={12}>
                                            <p style={{ fontSize: '14px', color: '#7B7B7B', lineHeight: '17px' }} >Status</p>
                                            <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '-5px', lineHeight: '22px' }}> {item.status} </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <p style={{ fontSize: '14px', color: '#7B7B7B', lineHeight: '17px' }} >Description</p>
                                            <p style={{ fontWeight: '600', fontSize: '16px', marginTop: '-5px', lineHeight: '22px', textAlign: 'justify' }}>
                                                {item.description}
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='row-icon-and-delete'>
                                <Col xl={8} md={12} sm={{ span: 24 }} xs={{ span: 24 }} style={{ width: '297px', height: '80px', borderRadius: '15px' }}>
                                    <Row>
                                        <p className='likes-comment' > {item.likeCounter} Likes </p>
                                        <p className='likes-comment' > {item.commentCounter} Comments</p>
                                    </Row>
                                    <Row>
                                        <span onClick={() => { handleLike(item.id) }} style={{ fontSize: '1.7rem', marginRight: '1.2rem', color: '', cursor: 'pointer' }}>
                                            {(ituLah.includes(Number(SenderId)) === true ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />)}
                                            {/* {ituLah} */}
                                        </span>
                                        <span>
                                            <Link to='/message'>
                                                <MailOutlined style={{ fontSize: '1.7rem', marginTop: '.4rem', color: 'gray' }} />
                                            </Link>
                                        </span>
                                    </Row>
                                </Col>
                                <Col xl={{ span: 15, offset: 1 }} md={{ span: 11, offset: 1 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                                    <Button loading={loading} onClick={() => delPost(item.id)} block className='btn-rqsmeet' >Delete Post</Button>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '10px' }}>
                                <ul className='comment-view'>
                                    {commentView}
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                    <Col className='col-comment-post' xxl={{ span: 22 }} xl={{ span: 22 }} lg={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} xs={{ span: 24 }} style={{ marginTop: '10px' }}>
                        <Form onFinish={() => sendComment(item.id)}>
                            <Form.Item
                                name={item.id}
                                onChange={(e) => setCommentValue(e.target.value)}
                            >
                                <Input
                                    allowClear
                                    style={{ borderRadius: '5px' }}
                                    placeholder="Add a comment..."
                                    value={comment}
                                    suffix={<Button onClick={() => sendComment(item.id)} style={{ border: 'none', color: 'gray' }} >post</Button>}
                                />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    })

    return (
        <Fragment>
            {postPetsList}
        </Fragment>
    );
}

export default PostCard;
