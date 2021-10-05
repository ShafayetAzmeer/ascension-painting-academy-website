import React from 'react';
import { Row } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Navigationbar.css'

const Navigationbar = () => {
    return (
            <div>
             <Row xs={1} md={4} className="g-4 fs-1 nav pb-3">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/instructors">Instructors</NavLink>
            </Row>
                        
            </div>
    );
};

export default Navigationbar;