import React, { Fragment } from 'react';
import Nav from '../components/landingpage/Nav';
import { Row, Col, Space, Collapse } from 'antd';
import { GithubOutlined, MailOutlined, GitlabOutlined } from '@ant-design/icons';
import './landingPage.css';

const { Panel } = Collapse;

const LandingPage = () => {

    function callback(key) {
        console.log(key);
    }

    const frontEnd =
        <>
            <Row justify='center'>
                <Space className="image-team" align='center' size='large'>
                    <div className="container">
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../assets/images/member/[FE] - Angga Saputra.JPG')} alt="angga"></img>
                            </div>
                            <div className="content">
                                <h2>Angga Saputra</h2>
                                <a href="https://github.com/angga-22"> <GithubOutlined /> Angga</a>
                                <br></br>
                                <p> <MailOutlined /> anggasp.unib@gmail.com</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../assets/images/member/[FE] Ibnu Bagus S.jpg')} alt="ibnu"></img>
                            </div>
                            <div className="content">
                                <h2>Ibnu Bagus</h2>
                                <a href="https://github.com/ibnubs"> <GithubOutlined /> Ibnu Bagus</a>
                                <br></br>
                                <p> <MailOutlined /> ibnubs@gmail.com</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../assets/images/member/[FE] Radhiyah Fahra.jpg')} alt="rara"></img>
                            </div>
                            <div className="content">
                                <h2>Rahdiyah</h2>
                                <a href="https://github.com/rahdiyahfahra"> <GithubOutlined /> Rahdiyah</a>
                                <br></br>
                                <p> <MailOutlined /> Radhiyah.td@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Space>
            </Row>
        </>

    const backEnd =
        <>
            <Row justify='center'>
                <Space className="image-team" align='center' size='large'>
                    <div className="container">
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../assets/images/member/[BE] Christina Natalia Puspita.jpg')} alt="nat"></img>
                            </div>
                            <div className="content">
                                <h2>Natalia</h2>
                                <a href="https://github.com/nattooo"> <GithubOutlined /> Natalia</a>
                                <br></br>
                                <p> <MailOutlined /> cnpuspita@gmail.com</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../assets/images/member/[BE] Titanio Yudista.png')} alt="titan"></img>
                            </div>
                            <div className="content">
                                <h2>Titan</h2>
                                <p>lorem5</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../assets/images/member/[BE] Imam Taufiq Hermawan.JPG')} alt="imam"></img>
                            </div>
                            <div className="content">
                                <h2>Imam</h2>
                                <a href="https://gitlab.com/ImamTaufiqHermawan/glints-x-binar-batch-6"> <GitlabOutlined /> Imam</a>
                                <br></br>
                                <p> <MailOutlined /> Imamtaufiq133@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Space>
            </Row>
        </>

    const reactNative =
        <>
            <Row justify='center'>
                <Space align='center' size='large'>
                    <div className="container">
                        <div className="card">
                            <div className="imgBx">
                                <img src={require('../assets/images/member/[Mobile] Muhammad Afnur.jpg')} alt="Afnur"></img>
                            </div>
                            <div className="content">
                                <h2>Afnur</h2>
                                <p>lorem5</p>
                            </div>
                        </div>
                    </div>
                </Space>
            </Row>
        </>

    return (
        <Fragment>
            <Nav />
            <div style={{ backgroundColor: '#ffff' }}>
                <Row className='jumbortron-ant' style={{ minHeight: 'auto', paddingTop: '10px', backgroundColor: '#ffff' }}>
                    <div className="background-display">
                        <Col span={1}></Col>
                        <Col sm={22} xs={22} md={17} >
                            <div className="web-background">
                                <img className='web-display' src={require("../assets/images/background.jpg")} alt="tinpet-web" />

                            </div>
                            <img className="web-display-title" src={require("../assets/images/tinpet-logo.svg")} alt="title" />

                        </Col>
                        <Col sm={0} xs={0} md={5} className='hidden-xs' >
                            <img className='mobile-display' src={require('../assets/images/iphone.png')} alt='tinpet-mobile' />
                        </Col>
                        <Col span={1}></Col>
                    </div>
                </Row>
                <Row className='jumbortron-ant' style={{ minHeight: 'auto', paddingBottom: '20px' }}>
                    <Col span={1}></Col>
                    <Col span={22} >
                        <Row className="title" style={{ border: '1px solid red', margin: '1% auto', width: '100%' }} justify='center'>
                            <h1> Who are behind this application?</h1>
                        </Row>
                        <Collapse accordion onChange={callback}>
                            <Panel showArrow={false} header="Front End" key="1">
                                <Row style={{ margin: '1% auto' }} justify='center'>
                                    <p>{frontEnd}</p>
                                </Row>
                            </Panel>
                            <Panel showArrow={false} header="Back End" key="2">
                                <Row style={{ margin: '1% auto' }} justify='center'>
                                    <p>{backEnd}</p>
                                </Row>
                            </Panel>
                            <Panel showArrow={false} header="React Native" key="3">
                                <Row style={{ margin: '1% auto' }} justify='center'>
                                    <p>{reactNative}</p>
                                </Row>
                            </Panel>
                        </Collapse>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <Row>
                    <h2 className="footer">Glints Academy X Binar Bootcamp 2020 </h2>
                </Row>
            </div>
        </Fragment>
    );
}

export default LandingPage;

