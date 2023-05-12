import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

function Item({photo, name, description}) {
  return (
    <Carousel.Item interval={3000} className="carousel_item_container">
        <div className="carousel_image_container">
          <img className="d-flex  movieImg" src={photo} alt="First slide" />
        </div>
        <Carousel.Caption >
          <div className="carousel_captions">
          <div className="movieDetails">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
  )
}

export default Item;