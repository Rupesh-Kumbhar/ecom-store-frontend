import React from "react";
import './../Footer/footer.scss'

function Footer(){
    return(
        <div className="col-sm-12 p-0 mt-5">
            <footer className="footer">
                <div className="container px-3">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <h3 className="mb-4">About Us</h3>
                            <p>
                                "Shop with confidence at our E-commerce store. Our team is dedicated to providing the best online shopping experience possible."
                            </p>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3 className="mb-4">Contact Us</h3>
                            <p>Pune, 411037 </p>
                            <p>Maharashtra, India</p>
                            <p>Phone: (+91) 92847 43488</p>
                            <p>Email: rp.kumbhar2001@gmail.com</p>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h3 className="mb-4">Follow Us</h3>
                            <p>
                                <a  href='https://www.facebook.com/rupesh.kumbhar.58173' target='_blank' rel="noopener noreferrer" >Facebook</a>
                            </p>
                            
                            <p>
                                <a  href='https://www.instagram.com/rupesh_kumbhar_/?igshid=ZDdkNTZiNTM%3D' target='_blank' rel="noopener noreferrer">Instagram</a>
                            </p>
                            <p>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter </a>
                            </p>
                            <p>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> YouTube </a>
                            </p>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;