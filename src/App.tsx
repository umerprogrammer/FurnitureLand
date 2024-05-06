import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import carousel1 from '../src/images/topbanner/carousel-1.jpg';
import carousel2 from '../src/images/topbanner/carousel-2.jpg';
import carousel3 from '../src/images/topbanner/carousel-3.jpg';
import logo1 from '../src/images/logo/logo1.png';
import category1 from '../src/images/topcategory/category.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faArrowRight } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <header className="App-header">


        {/******** Top Discount DiV ********/}
        <div className="main-discount bg-dark text-white d-flex justify-content-center">
          <h6>30% off - Shop now and save big</h6>
        </div>


        {/******* Top Menus *******/}
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container ">

            <a className="navbar-brand" href="#">
              <img src={logo1} alt="" className='image-logo' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-evenly " id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Categories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pages</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ">Contact Us</a>
                </li>
              </ul>

              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item"> <a className="nav-link" href="#">Login</a></li>
                <li className="nav-item"> <a className="nav-link" href="#">Sign Up</a></li>
              </ul>

            </div>
          </div>
        </nav>


        {/******* Top Main Banner *******/}


        <div id="carouselExampleIndicators" className="carousel slide ccarousel-image z-n1" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            {/*<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>  */}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} className="d-block w-100 ccarousel-image" alt="..." />
              <div className='overlay-text'>
                <h4>Furniture Land - Sofa Sets</h4>
                <h6>for stylish living</h6>
                <button type="button" className=' btn button-shopnow'>
                  Shop Now -
                </button>
              </div>
            </div>

            {/* <div className="carousel-item">
              <img src={carousel3} className="d-block w-100 carousel-image" alt="..."/>
            </div>
             <div className="carousel-item">
              <img src={carousel3} className="d-block w-100 carousel-image" alt="..."/>
            </div>  */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/******* Top Main Banner END *******/}


        {/******* Top Main Category Banner Start *******/}
        <div className="container d-flex justify-content-center gap-3  category-main mb-5">

          {/**** Category 1 ****/}
          <div className="category-banner">
            <img src={category1} alt="" />
            <h5>Category</h5>
          </div>

          {/**** Category 2 ****/}
          <div className="category-banner">
            <img src={category1} alt="" />
            <h5>Category</h5>
          </div>

          {/**** Category 3 ****/}
          <div className="category-banner">
            <img src={category1} alt="" />
            <h5>Category</h5>
          </div>


          {/**** Category 4 ****/}
          <div className="category-banner">
            <img src={category1} alt="" />
            <h5>Category</h5>
          </div>

          {/**** Category 5 ****/}
          <div className="category-banner">
            <img src={category1} alt="" />
            <h5>Category</h5>
          </div>

        </div>
        {/******* Top Main Category Banner End *******/}


        {/******* Section Elevate Your Living Room Start *******/}
        <div className="container d-flex justify-content-center mb-5">
          <div>
            <h4 className='text-center'>Elevate Your Living Room</h4>
            <div className="row mt-5 ">

              {/**** Card 1 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Comfortable Sofa</h6>
                    <h6 className='cardItemName'>$80.99</h6>
                  </div>
                </div>
              </div>

              {/**** Card 2 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Elegant Side Table</h6>
                    <h6 className='cardItemName'>$35.99</h6>
                  </div>
                </div>
              </div>
              {/**** Card 3 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Clasy Padded Chair</h6>
                    <h6 className='cardItemName'>$45.99</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/******* Section Elevate Your Living Room End *******/}


        {/******* Section Carousel Start *******/}
        <div className='container mb-5'>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carousel1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black" style={{ marginLeft: "324px", marginBottom: "30px" }}>
                  <h2>Luxurious Bed</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                  <button type="button" className='btn btn-outline-dark rounded-pill'>
                    <div className='d-flex justify-content-center align-items-center gap-1 fs-11'>
                      <span>Shop Now</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </button>
                </div>
              </div>
              <div className="carousel-item ">
              <img src={carousel2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black" style={{ marginRight: "450px", marginBottom: "50px" }}>
                  <h2>Luxurious Bed</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                  <button type="button" className='btn btn-outline-dark rounded-pill'>
                    <div className='d-flex justify-content-center align-items-center gap-1 fs-11'>
                      <span>Shop Now</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/******* Section Carousel End *******/}


        {/******* Section All Products Start *******/}
        <div className="container d-flex justify-content-center mb-5">
          <div>
            <h4 className='text-center'>All Products</h4>

            {/******** Row 1 ********/}

            <div className="row mt-5 ">

              {/**** Card 1 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Comfortable Sofa</h6>
                    <h6 className='cardItemName'>$80.99</h6>
                  </div>
                </div>
              </div>

              {/**** Card 2 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Elegant Side Table</h6>
                    <h6 className='cardItemName'>$35.99</h6>
                  </div>
                </div>
              </div>
              {/**** Card 3 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Clasy Padded Chair</h6>
                    <h6 className='cardItemName'>$45.99</h6>
                  </div>
                </div>
              </div>
            </div>

            {/******** Row 2 END ********/}

            {/******** Row 2 ********/}

            <div className="row mt-5 ">

              {/**** Card 1 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Comfortable Sofa</h6>
                    <h6 className='cardItemName'>$80.99</h6>
                  </div>
                </div>
              </div>

              {/**** Card 2 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Elegant Side Table</h6>
                    <h6 className='cardItemName'>$35.99</h6>
                  </div>
                </div>
              </div>
              {/**** Card 3 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Clasy Padded Chair</h6>
                    <h6 className='cardItemName'>$45.99</h6>
                  </div>
                </div>
              </div>
            </div>

            {/******** Row 2 ********/}

            <div className="row mt-5 ">

              {/**** Card 1 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Comfortable Sofa</h6>
                    <h6 className='cardItemName'>$80.99</h6>
                  </div>
                </div>
              </div>

              {/**** Card 2 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Elegant Side Table</h6>
                    <h6 className='cardItemName'>$35.99</h6>
                  </div>
                </div>
              </div>
              {/**** Card 3 ****/}
              <div className="col-md-4">
                <div className="mycard shadow ">
                  <div className="cardimage ">
                    <img src={category1} alt="" className='w-100 ' />
                  </div>
                  <div className="cardbody">
                    <div className='cardrating'>
                      <div className='d-flex gap-2  align-items-center  '>
                        <div className='item-color-choose ' style={{ background: "#000" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#ccc" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#343a40" }}> </div>
                        <div className='item-color-choose ' style={{ background: "#0dcaf0" }}> </div>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon>
                      </div>
                    </div>
                    <h6 className='cardItemName'>Clasy Padded Chair</h6>
                    <h6 className='cardItemName'>$45.99</h6>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/******* Section All Products End *******/}


        {/******* Section Carousel 2 Start *******/}
        <div className='container mb-5'>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src={carousel2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black" style={{ marginRight: "450px", marginBottom: "50px" }}>
                  <h2>Luxurious Bed</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                  <button type="button" className='btn btn-outline-dark rounded-pill'>
                    <div className='d-flex justify-content-center align-items-center gap-1 fs-11'>
                      <span>Shop Now</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </button>
                </div>
              </div>
              <div className="carousel-item ">
                <img src={carousel1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-black" style={{ marginLeft: "324px", marginBottom: "30px" }}>
                  <h2>Luxurious Bed</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                  <button type="button" className='btn btn-outline-dark rounded-pill'>
                    <div className='d-flex justify-content-center align-items-center gap-1 fs-11'>
                      <span>Shop Now</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/******* Section Carousel 2 End *******/}


        {/******* Section Blog & Insight Start *******/}
        <div className="container mb-5">
          <div className='d-flex justify-content-center flex-column  align-items-center '>
          <h3>Blogs & Insights</h3>            
          <h6>Explore Our Blog For Design Inspiration and Tips</h6>
          <div className="row d-flex gap-5 w-100">

            {/* Blogs 1 */}
            <div className="col-md-4 border border-black blog-design">
              <div>
                <img src={category1} alt="" className='blog-image'  />
              </div>
            </div>

            {/* Blogs 1 */}
            <div className="col-md-4 border border-black blog-design">
            <div className=' W-100'>
                <img src={category1} alt="" className='blog-image'  />
              </div>
            </div>

            {/* Blogs 1 */}
            <div className="col-md-4 border border-black blog-design">
            <div className=' W-100'>
                <img src={category1} alt="" className='blog-image'   />
              </div>
            </div>
          </div>
          </div>
        </div>

        {/******* Section Blog & Insight End *******/}
      </header>
    </div>

  );
}

export default App;
