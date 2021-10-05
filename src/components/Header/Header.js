import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const header = () => {
    return (

        <div className="header">

            
            
            <Container>

            <Row xs={1} md={1} className="g-4 gs-4 mb-5">
                <h1 className="pt-5 mt-5 text-light pb-5">Ascension Painting Academy </h1>
            </Row>             
            </Container>
        </div>
    );
};

export default header;