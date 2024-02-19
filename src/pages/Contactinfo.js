import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

export function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">Where To Find Us</h2>

            <h4 className="text-uppercase fw-bold" style={{ "marginTop": "60px" }}><IoLocationSharp /> Location</h4>
            <p className="mb-5"> 47 Baker Street, London LD1 0ND</p>
            <h4 className="text-uppercase fw-bold" ><IoMdMail /> EMAIL</h4>
            <p className="mb-5" > companyname@gmail.com</p>
            <h4 className="text-uppercase fw-bold" ><MdCall /> CALL US</h4>
            <p className="mb-5"> 1(234)567-891, 1(234)987-654</p>
            <h4 className="text-uppercase fw-bold"  ><IoTimeSharp /> Opening Hours</h4>
            <p className="m-0">Mon - Fri: 09:00 - 17:00</p>
        </div>
    )
}