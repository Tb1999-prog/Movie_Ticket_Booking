import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

function ImageSlider() {
  const coverLinks = [
    "https://i.ibb.co/1Q2b6m1/black-adam-2021-poster-6173-scaled.jpg",
    "https://i.ibb.co/fS94P5v/black-panther.jpg",
    "https://i.ibb.co/FJXGCRj/oppenhimer.jpg",
    "https://i.ibb.co/wsRGvp1/vikram-Vedha.jpg",
  ];
  const Title=[
    "Black Adam",
    "Black Panther",
    "Oppnehiemer",
    "Vikram Vedha"
  ]
  const Description=[
    "Black Adam is a 2022 American superhero film based on the DC Comics character of the same name. Produced by New Line Cinema, DC Films, ...",
    "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt ...",
    "Physicist J Robert Oppenheimer works with a team of scientists during the Manhattan Project, leading to the development of the atomic bomb.",
    "Vikram Vedha is a 2022 Indian Hindi-language neo-noir action thriller film written-directed by Pushkar–Gayathri, based on their 2017 Tamil film of the same ..."
  ]
  const interval = 3000;
  return (
    <Carousel fade>
      <Carousel.Item interval={interval} className="carousel_item_container">
        <div className="carousel_image_container">
          <img className="d-flex  movieImg" src={coverLinks[0]} alt="First slide" />
        </div>
        <Carousel.Caption className="carousel_captions">
          <div className="carousel_captions">
          <div className="movieDetails">
            <h3>{Title[0]}</h3>
            <p>{Description[0]} </p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={interval} className="carousel_item_container">
        <div className="carousel_image_container">
          <img className="d-flex  movieImg" src={coverLinks[1]} alt="First slide" />
        </div>
        <Carousel.Caption className="carousel_captions">
          <div className="carousel_captions">
          <div className="movieDetails">
          <h3>{Title[1]}</h3>
            <p>{Description[1]} </p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={interval} className="carousel_item_container">
        <div className="carousel_image_container">
          <img className="d-flex  movieImg" src={coverLinks[2]} alt="First slide" />
        </div>
        <Carousel.Caption className="carousel_captions">
          <div className="carousel_captions">
          <div className="movieDetails">
          <h3>{Title[2]}</h3>
            <p>{Description[2]} </p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={interval} className="carousel_item_container">
        <div className="carousel_image_container">
          <img className="d-flex  movieImg" src={coverLinks[3]} alt="First slide" />
        </div>
        <Carousel.Caption className="carousel_captions">
          <div className="carousel_captions">
          <div className="movieDetails">
          <h3>{Title[3]}</h3>
            <p>{Description[3]} </p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;

{
  /* <a href="https://ibb.co/3dhkzC2"><img src="https://i.ibb.co/1Q2b6m1/black-adam-2021-poster-6173-scaled.jpg" alt="black-adam-2021-poster-6173-scaled" border="0"></a>
<a href="https://ibb.co/b3Fz8ZJ"><img src="https://i.ibb.co/fS94P5v/black-panther.jpg" alt="black-panther" border="0"></a>
<a href="https://ibb.co/92hRSQC"><img src="https://i.ibb.co/FJXGCRj/oppenhimer.jpg" alt="oppenhimer" border="0"></a>
<a href="https://ibb.co/tX4jdY5"><img src="https://i.ibb.co/wsRGvp1/vikram-Vedha.jpg" alt="vikram-Vedha" border="0"></a> */
}
