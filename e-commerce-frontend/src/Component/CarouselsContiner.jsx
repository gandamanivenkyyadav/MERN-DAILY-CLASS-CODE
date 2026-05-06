import Carousel from 'react-bootstrap/Carousel';
import CarouselsImage from './CarouselsImage';


function CarouselsContiner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselsImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmlzhxxXGgeTFmCgH278aE1JiGLT6n8mt24__yyPBonh4oUQRQzIzT9zUjscMxtlwl5jfonqNSnO2b8p23Q&s&ec=121643169" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselsImage text="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-37691.jpg?semt=ais_hybrid&w=740&q=80" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselsImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLupW0d4J-2KWdZg7f9A0WDbUq-6GMIQVtg&s" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsContiner;