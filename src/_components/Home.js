import React from 'react';
import './styles/Home.css';
import Carousel from 'react-bootstrap/Carousel'
import diary1 from './images/diary1.jpg';
import diary2 from './images/diary2.jpg';
import diary3 from './images/diary3.jpg';
import diary4 from './images/diary4.jpg';

const Home = () => {
    return (
        <div>
            <div className="home wrap">
                <h1 className="ui home">Welcome to Panda Diary!</h1>
                <p id="text1"> Create and Customise your own diary on the fly</p>
            </div>
            <Carousel className="carousel" interval={1800}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={diary1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={diary2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={diary3}
                        alt="Third slide"
                    />
                 
                    <Carousel.Caption>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={diary4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <p>Vivamus mollis massa sit amet urna interdum vulputate. Curabitur pulvinar est ut consequat scelerisque.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default Home;
