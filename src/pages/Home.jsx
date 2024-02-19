import React from 'react';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg';
import { Link } from 'react-router-dom';
import HomeImg from '../utils/img/header-img.jpg';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';

function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5 d-flex d-sm-block flex-column align-items-center' style={{"paddingTop":"50px"}} >

                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start' style={{"marginLeft":"120px"}}> <p className='text-primary' style={{'font-size': '95px'}}>DigiView</p><p style={{"color":'#606060','font-size': '65px' }}>Event<br/> Management <br/>Platform</p></h1>
                            {/* <MenuBtn /> */}
                        </div>
                        <div className='col-sm-7 d-flex d-sm-block flex-column align-items-center' style={{"borderRadius":"8px"}}>

                        <img src={HomeImg} className='img-fluid w-55' alt="about img"  style={{"mixBlendMode":"multiply"}}/>
                        </div>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident voluptate aut dolore ullam quasi numquam quod molestias cum officiis perspiciatis?</p>
                        <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni animi tenetur eaque vel accusamus placeat quaerat ad. Similique quaerat qui doloribus assumenda deserunt tenetur quas suscipit officiis quod sequi?</p>
                        {/* <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link> */}
                        <Link to="/about">
                <button type="button" className="btn btn-primary btn-lg" style={{width:200}}><b>More About Us</b></button>
            </Link>
                    </div>
                </div>
            </div>

            <div className='menu-section py-5 text-light shadow'>
                <div className='container d-flex flex-column align-items-left'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Powering the wow in events</h2>
                    {/* <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Food</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>English Breakfast</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Spicy Beef</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Saghetti Bolognese</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Drinks</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Coffee</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Juice</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Spirits</p>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className='row mb-5 w-100'> 
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>A powerful and centralized platform with the tools and processes you need to manage all aspects of your events, from start to finish.</p>
                                </li>
                                {/* <li> 
                                <MenuBtn />
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className='menu-section py-5 text-light shadow'>
                
            </div>
            {/* <ImageGallery /> */}

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;