import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {img,course,description, cost} = props.courses;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="fs-3 fw-bold pb-2">{course}</Card.Title>
                    <Card.Text>
                        <p className="fs-5"> {description}</p>
                        <p className="fs-5 fw-bold">Cost : $ {cost}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;