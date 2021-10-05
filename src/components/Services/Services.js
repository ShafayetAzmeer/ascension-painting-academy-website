import React from 'react';
import Courses from '../Courses/Courses';
import './Services.css'

const Services = () => {
    return (
        <div className="mb-5 mt-5 services pt-5 pb-5">
            <h1 className="fs-1 fw-bold mb-5">Our Courses For You</h1>
            <Courses></Courses>
        </div>
    );
};

export default Services;