import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MainActions from "../../redux/actions/main-actions";
import imgPetals1 from '../../assets/images/home-slider/petals/1.png';
import imgPetals2 from '../../assets/images/home-slider/petals/2.png';
import imgPetals3 from '../../assets/images/home-slider/petals/3.png';
import imgPetals4 from '../../assets/images/home-slider/petals/4.png';
import imgPetals5 from '../../assets/images/home-slider/petals/5.png';
import imgContact from '../../assets/images/home-slider/slides/contact.png';
import imgDigitalProducts from '../../assets/images/home-slider/slides/digitalProductsServices.png';
import imgInnovative from '../../assets/images/home-slider/slides/innovative.png';
import imgMagic from '../../assets/images/home-slider/slides/magic.png';
import imgLoadingBg from '../../assets/images/background-images-landing.jpg';
import imgLoadingTextSep from '../../assets/images/Shape-638.png';
//import imgArrowWhite from '../../assets/images/home-slider/arrow.png';
import imgArrowBlack from '../../assets/images/home-slider/arrow-b.png';
import Imglogo from '../../assets/images/logo.png';

class Home extends Component {
  state = {
      jsLoaded: false,
      pageLoaded: false
    };
  componentDidMount(){    
    document.body.classList.remove('page-all-services');
    document.body.classList.add('modal-open');
    let scriptExist = document.getElementById("custom-js");
    if(scriptExist){
      scriptExist.parentElement.removeChild(scriptExist);
    }
		const script = document.createElement("script");
    script.src = "/assets/js/custom.js";
    script.id = "custom-js";
    script.async = true;
		document.body.appendChild(script);
  }    

  componentWillUnmount(){
    this.props.pageLoad();
  }

  render() {
    return (
      <div className="HomeSliderMain transition-item">
        {this.props.main.isAlreadyVisited === false ?
          <section id="loader" className="h-100"  style={{backgroundImage: "url(" + imgLoadingBg + ")"}}>
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
              <h3 className="text-uppercase"><span>Digitelizing Canada</span><img src={imgLoadingTextSep} alt="Marktwiz" className="img-fluid position-absolute"/></h3>
            </div>
          </section>
          : ''
        }
        {this.props.main.isAlreadyVisited === false ?
          <section id="splash" className="h-100">
            <div className="content d-flex align-items-center justify-content-center flex-column h-100">
              <div className="text-center">
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
              </div>
              <div className="circle-2"></div>
              <div className="circle-1"></div>
            </div>
          </section>
          : ''
        }

        <section id="slider-wrapper" className="position-relative">
          <div className="headerMain position-absolute text-center text-lg-left w-100" style={{zIndex: "10"}}>
            <div className="container-fluid">
              <div className="row">
                <div className="main-logo">
                  <a onClick={() => this.props.history.push("./")}>
                    <img src={Imglogo} alt="Marktwiz" className="img-fluid" /></a>
                </div>
              </div>
            </div>
          </div>
          <div id="slides" className="h-100">
              <div id="slide-1" className="section content d-flex align-items-center justify-content-center flex-column h-100">
              <div className="container-fluid h-100">
                <div className="row h-100">
                  <div className="align-items-center col-lg-6 d-flex content-slider">
                    <h3>Digital Products & Services</h3>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end align-items-center P-0">
                    <img src={imgDigitalProducts} alt="Marktwiz" className="img-fluid movingImg" />
                  </div>
                </div>
              </div>
            </div>
              <div id="slide-2" className="section content d-flex align-items-center justify-content-center flex-column h-100">
              <div className="container-fluid h-100">
                <div className="row h-100">
                  <div className="align-items-center col-lg-7 d-flex content-slider">
                    <h3>Innovative <br></br>Approach & Strategy</h3>
                  </div>
                  <div className="col-lg-5 d-flex justify-content-end align-items-end">
                    <img src={imgInnovative} alt="Marktwiz" className="img-fluid movingImg" />
                  </div>
                </div>
              </div>
            </div>
              <div id="slide-3" className="section content d-flex align-items-center justify-content-center flex-column h-100">
              <div className="container-fluid h-100">
                <div className="row h-100">
                  <div className="align-items-start col-lg-7 d-flex flex-column justify-content-center content-slider">
                    <h3>Together <br></br>We Create Magic</h3>
                    <button className="btn checkServiceBtn" onClick={() => this.props.history.push('/services/')}>Check Services <img src={imgArrowBlack} alt="arrow" className="img-fluid" /></button>
                  </div>
                  <div className="col-lg-5 d-flex justify-content-end align-items-end">
                    <img src={imgMagic} alt="Marktwiz" className="img-fluid checkAllServiceSlide movingImg" />
                  </div>
                </div>
              </div>
            </div>
              <div id="slide-4" className="section content d-flex align-items-center justify-content-center flex-column h-100">
              <div className="container-fluid h-100">
                <div className="row h-100 curious-page">
                  <img src={imgContact} alt="Marktwiz" className="img-fluid movingImg" style={{width: "100%", position: "absolute", maxWidth: " 50%", top: "-30px"}}/>
                  <div className="align-items-start col-lg-6 d-flex flex-column justify-content-center  content-slider">
                    <h3>Curious enough <br></br>to know more?</h3>
                    <form action="" className="d-flex flex-column pt-5 w-100">
                      <label className="formTitle">Schedule A Coffee</label>
                      <div className="formGroup">
                        <input type="text" placeholder="Full Name" name="Full Name" />
                      </div>
                      <div className="formGroup">
                      <input type="email" placeholder="Email" name="email" />
                      </div>
                      <div className="formGroup">
                        <input type="text" placeholder="Phone Number" name="phone number" />
                      </div>
                      <a href="#!" className="btn submitFromBtn">Let's Meet <img src={imgArrowBlack} alt="arrow" className="img-fluid" /></a>
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
Home.propTypes = {
  pageLoad: PropTypes.func
};
function mapStateToProps(state){
  return {...state};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...MainActions }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);