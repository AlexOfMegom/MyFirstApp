import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestSlide1 from '../../Assets/forestSlide1.jpg';
import forestSlide2 from '../../Assets/forestSlide2.jpg';

const CauroselBox = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                     height ='650'
                        className='d-block w-100'
                        src={forestSlide1}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo autem soluta aliqui</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        height ='650'
                        className='d-block w-100'
                        src={forestSlide2}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo autem soluta aliqui</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CauroselBox;