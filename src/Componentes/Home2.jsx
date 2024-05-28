
import Carousel from 'react-bootstrap/Carousel';
import styles from './Home2.module.css'

   export function Home2() {
        return(
    
            <Carousel className={styles.Home2}>
      <Carousel.Item>
            <h3>Bem-vindos ao nosso site:</h3>
            <h6>Destaques da semana:</h6>
        <img
          className="d-block w-100"
          src="https://www.designi.com.br/images/preview/10295190.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Headset Gamer Onikuma K19</h5>
          <h6>R$ 49,99</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.designi.com.br/images/preview/10295187.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Headset Gamer Onikuma X10</h5>
          <h6>R$ 29,99</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.designi.com.br/images/preview/10295191.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Headset Gamer Onikuma X10</h3>
          <h6>R$ 10,99</h6>
          <p>Navegue e ache mais promoções!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        );
      }
