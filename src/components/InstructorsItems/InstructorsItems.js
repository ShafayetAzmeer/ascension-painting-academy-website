import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import InstructorsItem from '../InstructorsItem/InstructorItem';

const InstructorsItems = () => {
    const [instructorsItems, setInstructorsItems] = useState([]);

      useEffect(()=> {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setInstructorsItems(data.instructors));
      }, [])  
         
    return (
        <Container>
            <div className="Container mb-5">
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        instructorsItems.map(item => <InstructorsItem
                        instructorsItems = {item}
                        ></InstructorsItem> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default InstructorsItems;