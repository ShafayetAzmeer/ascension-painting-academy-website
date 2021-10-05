import React, { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import { Container, Row } from 'react-bootstrap';

const Courses = () => {

      const [courses, setCourses] = useState([]);

      useEffect(()=> {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data.services));
      }, [])  
         
    return (
        <Container>
            <div className="Container Fluid">
                <Row xs={1} md={3} className="g-4 gs-4">
                    {
                        courses.map(course => <Course
                        courses = {course}
                        ></Course> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default Courses;