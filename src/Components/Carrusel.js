import Carousel from 'react-bootstrap/Carousel';
const Carrusel = () => {

    

    return (
        
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 c-img"
                    style={{objectFit: 'cover', maxHeight: '80vh'}}
                    src="https://www.cronista.com/files/image/425/425268/61f4bcbd7215e.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color: 'black', fontSize:"70px"}}>BIENVENIDOS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 c-img"
                    style={{opacity: 0.5}}
                    src="https://www.springboard.com/blog/wp-content/uploads/2018/10/what-is-ux-design.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color: 'black', fontSize:"100px"}}>¿Que es el UX?</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 c-img"
                    style={{opacity: 0.5}}
                    src="https://miro.medium.com/v2/resize:fit:2000/1*9XS362rDFnLXxRDbTrLMxQ.jpeg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color: 'black', fontSize:"80px"}}>¿DCU?</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}
 
export default Carrusel;