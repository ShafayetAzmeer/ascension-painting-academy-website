import React from 'react';
import { Card, Col } from 'react-bootstrap';

const InstructorsItem = (props) => {
    const { img,name, expertise, paint, xp} = props.instructorsItems;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{name}</Card.Title>
                    <Card.Text>
                        <p className="fs-5">Expertise : {expertise}</p>
                        <p className="fs-5">Exhibition : {paint}</p>
                        <p className="fs-5">Experience : {xp} years</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default InstructorsItem;