import React from 'react';
import '../Store/store.scss';

function Store() {
    return (
        <div className="col-sm-12 p-0">
            <div className="col-sm-12 p-0">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="assets/featured-images/9.jpg" className='' alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src="assets/featured-images/oneodio.jpg" alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src="assets/featured-images/Logitech G213 Prodigy 4.jpg" className='' alt="" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-sm-10 mx-auto" >
                <div className="col-sm-12 p-0 row m-0">
                    <div className="col-sm-3 p-0">
                        <div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action active">
                                Categories
                            </button>
                            <button type="button" class="list-group-item list-group-item-action">Laptops</button>
                            <button type="button" class="list-group-item list-group-item-action">mouse</button>
                            <button type="button" class="list-group-item list-group-item-action">Headphones</button>
                            <button type="button" class="list-group-item list-group-item-action" >gaming desktops</button>
                        </div>
                    </div>
                    <div className="col-sm-9 p-0">
                        <h5 className='text-center'>
                            all pro
                        </h5>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Store;