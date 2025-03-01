import React from 'react';
import './../About/about.scss';

function About(){
    return(
        <div className="col-sm-9 mt-5 container">

            <h1 className="heading-text" >About Us : Your Ultimate Destination for Laptops & Accessories</h1>
            <div className="text-center pb-5 mb-5">
                
                <div className="col-sm-12 p-0">
                    <img src="assets/Home-images/about-us.png" alt="home" className="about-img" />
                </div>

                <h4 className="text-center pt-5 body-text" >
                    Welcome !
                    Explore a wide range of laptops from top brands like Apple, Dell, HP, and Lenovo, along with essential accessories designed to complement your computing needs. Whether you're a professional, student, or gamer, we have the perfect tech solutions for you.

                </h4>
                <h4 className="text-center pb-3 body-text mt-5">
                At our Ecommerce App, we stay ahead of the curve, keeping up with the latest innovations and trends in technology. Our goal is to bring you cutting-edge products, competitive prices, and a hassle-free shopping experience, All in one place !!
                </h4>
                <h4 className="text-center pb-5 body-text">
                    Thank you for choosing us ! If you have any questions or feedback, feel free to reach out, We'd love to hear from you !
                </h4>
                

            </div>

        </div>
    )
}

export default About;