import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeItem from '../HomeItem/HomeItem';

const HomeItems = () => {
    const [homeItems, setHomeItems] = useState([]);

      useEffect(()=> {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setHomeItems(data.home));
      }, [])  
         
    return (
        <Container>
            <div className="Container Fluid">
                <Row xs={1} md={4} className="g-4 gs-4">
                    {
                        homeItems.map(item => <HomeItem
                        homeItems = {item}
                        ></HomeItem> )
                    }
                </Row> 
            </div>
        </Container>
    );
};

export default HomeItems;