import React from 'react';
import HomeItems from '../HomeItems/HomeItems';
import logo from '../../images/2586.webp';
import './Home.css'

const Home = () => {

    return (
            <div className="mb-5 mt-5">

                <div className="d-flex justify-content-between mt-5 mb-5 home">
                    <div className="d-flex text-center align-items-center">
                        <p className="fs-4 ps-5 pe-5">Painting is the practice of applying paint, pigment, color or other medium to a solid surface (called the "matrix" or "support").The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used.

                        In art, the term painting describes both the act and the result of the action (the final work is called "a painting"). The support for paintings includes such surfaces as walls, paper, canvas, wood, glass, lacquer, pottery, leaf, copper and concrete, and the painting may incorporate multiple other materials, including sand, clay, paper, plaster, gold leaf, and even whole objects.
</p>
                    </div>
                        <img src={logo} alt="" className="img-fluid" />
                </div>

                <div>
                    <h1 className="fs-1 fw-bold mb-5">Our Services</h1>
                </div>

                <div>
                    <HomeItems></HomeItems>
                </div>
                
            </div>
    
    );
};

export default Home;