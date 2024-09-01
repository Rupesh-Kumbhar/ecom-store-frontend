import React from "react";
import "../Store/store.scss";
import Carousel from "react-bootstrap/Carousel";

function Store() {
  return (
    <div className="col-sm-12 p-0">
      <Carousel>
        <Carousel.Item>
          <img src="assets/featured-images/laptop-9.jpg" className="carousel-img" alt="First slide"/>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="assets/featured-images/oneodio.jpg" className="carousel-img" alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="assets/featured-images/Logitech G213 Prodigy 4.jpg" className="carousel-img" alt="First slide"/>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="col-sm-10 mx-auto mt-5 pt-5">
        <div className="col-sm-12 p-0 row m-0">
          <div className="col-sm-3 p-0">
            <div className="list-group">
              <button type="button"className="list-group-item list-group-item-action active text-center p-3 category-font">Categories</button>

              <button type="button" className="list-group-item list-group-item-action text-center p-3 category-font">All</button>

              <button type="button" className="list-group-item list-group-item-action text-center p-3 category-font">Laptops</button>

              <button type="button" className="list-group-item list-group-item-action text-center p-3 category-font" >Mouse</button>

              <button type="button" className="list-group-item list-group-item-action text-center p-3 category-font" > Headphones </button>

              <button type="button" className="list-group-item list-group-item-action text-center p-3 category-font" > Gaming Desktops </button> 
              </div>
          </div>
          <div className="col-sm-9 p-0">
            <h2 className="text-center">All Products</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Store;
