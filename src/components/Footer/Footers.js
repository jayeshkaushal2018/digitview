import React from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiBorderBottom } from 'react-icons/bi';


const Footers = () => {
    return (
        <>
            <div className="container"
            //  style={{"backgroundColor":"#f1f5f9"}}
            >
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center pb-3 mb-3">
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-muted">
                                <b>Home</b></a></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-muted">
                                <b> Features</b></a></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-muted">
                                <b> Pricing</b></a></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-muted">
                                <b>  FAQs</b></a></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-muted">
                                <b>  About</b></a></li>
                    </ul>
                    <ul className=" justify-content-center pb-3 mb-3" style={{ "borderBottom": "none" }}>
                        <li className="nav-item">

                            <BsDribbble size={25} />
                        </li>
                        <li className="nav-item">

                            <BsFacebook size={25} /></li>
                        <li className="nav-item">

                            <BsGithub size={25} /></li>
                        <li className="nav-item">

                            <BsInstagram size={25} /></li>
                        <li className="nav-item">

                            <BsTwitter size={25} /></li>
                    </ul>
                    <p className="text-center text-muted">© 2021 Company, Inc</p>
                </footer>
            </div>

        </>
    )
}

export default Footers
