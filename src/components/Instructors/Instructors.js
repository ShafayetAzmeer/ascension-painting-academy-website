import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import InstructorsItems from '../InstructorsItems/InstructorsItems';
import './instructors.css'

const Instructors = () => {
    return (
            <div className="mb-5 mt-5 instructor pt-5 pb-5">
                <h1 className="fs-1 fw-bold mb-5">Our Iconic Instructors</h1>
                <InstructorsItems></InstructorsItems>
            </div>
       
    );
};

export default Instructors;