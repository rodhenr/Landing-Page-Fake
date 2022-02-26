import { Carousel } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <Carousel className={styles.slideContainer}>
      <Carousel.Item>
        <Image
          className=""
          src="/images/slider1.jpg"
          alt="First slide"
          height="2000"
          width="2000"
          objectFit="cover"
        />
        <Carousel.Caption>
          <fieldset className="bg-dark opacity-75 p-3">
            <h3>O melhor para sua casa</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              tempore consequatur est, nihil ipsum assumenda?
            </p>
          </fieldset>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className=""
          src="/images/slider2.jpg"
          alt="Second slide"
          height="2000"
          width="2000"
          objectFit="cover"
        />

        <Carousel.Caption>
          <fieldset className="bg-dark opacity-75 p-3">
            <h3>Economize na sua conta de energia</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              tempore consequatur est, nihil ipsum assumenda?
            </p>
          </fieldset>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className=""
          src="/images/slider3.jpg"
          alt="Third slide"
          height="2000"
          width="2000"
          objectFit="cover"
        />

        <Carousel.Caption>
          <fieldset className="bg-dark opacity-75 p-3">
            <h3>Ajude o meio-ambiente</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              tempore consequatur est, nihil ipsum assumenda?
            </p>
          </fieldset>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
