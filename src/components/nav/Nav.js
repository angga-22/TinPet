import React, { Fragment, useEffect } from 'react';
import { Layout, Menu, Row, Avatar, Badge, Dropdown } from 'antd';
import './nav.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../store/actions/profile';
import { notifCount } from '../../store/actions/notif';
import { getCountMessage } from '../../store/actions/messages';


const { Header } = Layout;

const Nav = () => {
    
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.profileDetail)
    const notifShow = useSelector (state => state?.notif?.countNotif)
    const countM = useSelector (state=> state?.mesCount?.countMessage )
    

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    useEffect(() => {
        dispatch(notifCount())
    },[dispatch])

    useEffect(() => {
        dispatch(getCountMessage())
    },[dispatch])
    
    const menu = () => {
        return (
            <Menu>
            <Menu.Item key="0">
                <Link to='/profile'>
                    <p>Profile</p>
                </Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to='/login'>
                    <p onClick={(()=>dispatch({type:"SIGNOUT"}))} >Logout</p>
                </Link>
            </Menu.Item>
        </Menu>
        )
    };


    return (
        <Fragment>
            <Header className="header navBar" >
                <Link to='/homepage'>
                    <div className="logo" >
                        <img className="logo-img" src={require('../../assets/images/tinpet-navbar-logo.svg')} alt='tinpet-logo' />
                    </div>
                </Link>
                <Row justify="end">
                <Menu  mode="horizontal" className='menu-item'>
                    <Menu.Item key="1" >
                        <Badge count={countM?.MessagesCount} overflowCount={10}>
                            <Link to='/message'>
                                <img src={require('../../assets/images/icons8-important-mail-50.png')} style={{width:'35px', height:'35px'}}  alt='message-icon' />
                            </Link>
                        </Badge>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Badge count={notifShow?.NotifCount} overflowCount={10}>
                            <Link to='/notif'>
                                <img src={require('../../assets/images/notification-icon.svg')}  alt='notif-icon' />
                            </Link>
                        </Badge>
                    </Menu.Item>
                    <Menu.Item key="3" >
                        <Dropdown overlay={menu}  trigger={['click']}>
                            <a href='/profile'>
                                <Avatar size={35} src={profile.image_url}  alt='avatar-icon' />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
                </Row>
            </Header>
        </Fragment>
    );
}

export default Nav;
