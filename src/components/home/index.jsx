import React, { Component } from "react";
import imgPetals1 from '../../assets/images/home-slider/petals/1.png';
import imgPetals2 from '../../assets/images/home-slider/petals/2.png';
import imgPetals3 from '../../assets/images/home-slider/petals/3.png';
import imgPetals4 from '../../assets/images/home-slider/petals/4.png';
import imgPetals5 from '../../assets/images/home-slider/petals/5.png';
import imgContact from '../../assets/images/home-slider/slides/contact.png';
import imgDigitalProducts from '../../assets/images/home-slider/slides/digitalProductsServices.png';
import imgInnovative from '../../assets/images/home-slider/slides/innovative.png';
import imgMagic from '../../assets/images/home-slider/slides/magic.png';
import imgArrowWhite from '../../assets/images/home-slider/arrow.png';
import imgArrowBlack from '../../assets/images/home-slider/arrow-b.png';
import Imglogo from '../../assets/images/logo.png';

//import imgBg from '../../assets/images/home-slider/bg.png';
export default class Home extends Component {
  state = {
      jsLoaded: false
    };

componentDidMount(){
  document.body.classList.add('modal-open');
}    

  render() {
    return (
      <div className="HomeSliderMain">
        <section id="loader" className="h-100">
          <div className="petals">
            <img src={imgPetals1} alt="Marktwiz" className="img-fluid petal-1"/>
            <img src={imgPetals2} alt="Marktwiz" className="img-fluid petal-2"/>
            <img src={imgPetals3} alt="Marktwiz" className="img-fluid petal-3"/>
            <img src={imgPetals4} alt="Marktwiz" className="img-fluid petal-4"/>
            <img src={imgPetals5} alt="Marktwiz" className="img-fluid petal-5"/>
          </div>
          <div className="content d-flex align-items-center justify-content-center flex-column h-100">
            <h2 className="text-uppercase">Proudly</h2>
            <h1 className="text-uppercase p-c">Canadian</h1>
            <h3 className="text-uppercase">Digitelizing Canada</h3>
          </div>
        </section>

        <section id="splash" className="h-100">
          <div className="content d-flex align-items-center justify-content-center flex-column h-100">
            <h3 className="text-uppercase">We are</h3>
            <h2 className="text-uppercase p-c">
                <span>M</span>
                <span>a</span>
                <span>r</span>
                <span>k</span>
                <span>t</span>
                <span>w</span>
                <span>i</span>
                <span>z</span>
            </h2>
            <div className="circle-2"></div>
            <div className="circle-1"></div>
          </div>
        </section>

        <section id="slider-wrapper" className="position-relative">
          <div className="logo position-absolute text-center text-lg-left w-100" style={{zIndex: "10"}}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 pl-lg-5 pl-md-2 p-4">
                  <a href="index.html">
                    <img src={Imglogo} alt="Marktwiz" className="img-fluid" /></a>
                </div>
              </div>
            </div>
          </div>
          <div id="slides" className="h-100">
              <div id="slide-1" className="section content d-flex align-items-center justify-content-center flex-column h-100">
              <div className="container-fluid h-100">
                <div className="row h-100">
                  <div className="align-items-center col-lg-5 d-flex pl-lg-5 pl-md-2">
                    <h3>Digital Products & Services</h3>
                  </div>
                  <div className="col-lg-7 d-flex justify-content-end align-items-center">
                    <img src={imgDigitalProducts} alt="Marktwiz" className="img-fluid movingImg" />
                  </div>
                </div>
              </div>
            </div>
              <div id="slide-2" className="section content d-flex align-items-center justify-content-center flex-column h-100">
              <div className="container-fluid h-100">
                <div className="row h-100">
                  <div className="align-items-center col-lg-5 d-flex pl-lg-5 pl-md-2">
                    <h3>Innovative Approach & Strategy</h3>
                  </div>
                  <div className="col-lg-7 d-flex justify-content-end align-items-end">
                    <img src={imgInnovative} alt="Marktwiz" className="img-fluid movingImg" />
                  </div>
                </div>
              </div>
            </div>
              <div id="slide-3" className="section content d-flex align-items-center justify-content-center flex-column h-100">
              <div className="container-fluid h-100">
                <div className="row h-100">
                  <div className="align-items-start col-lg-5 d-flex flex-column justify-content-center pl-lg-5 pl-md-2">
                    <h3>Together We Create Magic</h3>
                    <a href="#!" className="btn mt-5">Check Services <img src={imgArrowBlack} alt="arrow" className="img-fluid" /></a>
                  </div>
                  <div className="col-lg-7 d-flex justify-content-end align-items-end">
                    <img src={imgMagic} alt="Marktwiz" className="img-fluid movingImg" />
                  </div>
                </div>
              </div>
            </div>
              <div id="slide-4" className="section content d-flex align-items-center justify-content-center flex-column h-100">
              <div className="container-fluid h-100">
                <div className="row h-100">
                  <img src={imgContact} alt="Marktwiz" className="img-fluid movingImg" style={{width: "100%", position: "absolute", maxWidth: " 70%", top: "-30px"}}/>
                  <div className="align-items-start col-lg-6 d-flex flex-column justify-content-center pl-lg-5 pl-md-2">
                    <h3>Curious enough to know more?</h3>
                    <form action="" className="d-flex flex-column pt-5 w-100" autocomplete="off">
                      <label className="p-c font-weight-bolder">Schedule A Coffee</label>
                      <input type="text" placeholder="Full Name" name="Full Name" />
                      <input type="email" placeholder="Email" name="email" />
                      <input type="text" placeholder="Phone Number" name="phone number" />
                      <a href="#!" className="btn mt-5">Let's Meet <img src={imgArrowBlack} alt="arrow" className="img-fluid" /></a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
