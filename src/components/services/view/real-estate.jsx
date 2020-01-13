import React, { Component } from "react";
import Imglogo from '../../../assets/images/logo.png';
import ImgLogoPages from '../../../assets/images/logo-for-pages.png';
import imgArrowBlack from '../../../assets/images/home-slider/arrow-b.png';
export default class RealEstate extends Component {
  componentDidMount() {
    document.body.classList.add('page-all-services');
}
  render() {
      return (
        <div className="page-services page-branding-identity">
        <div className="headerMain position-absolute text-center text-lg-left w-100" style={{zIndex: "10"}}>
          <div className="wrap">
          <div className="row">
            <div className="main-logo">
            <a onClick={() => this.props.history.push("/")}>
              <img src={Imglogo} alt="Marktwiz" className="img-fluid" /></a>
            </div>
          </div>
          </div>
        </div>
        <section id="real-estate">
           <div className="wrap">
              <div className="row">
                 <div className="inner-content">
                    <h1>Real Estate</h1>
                    <p>We understand real estate and understand the specific skill sets needed to achieve success. Hence we provide tailor-made strategies to brokerages and builders.</p>
        <p>Our experience with the intricate minutia of a brokerage&#8217;s operations allows us to provide all services to a 100% completion, hence time on your hands to focus on your growth.</p>
                 </div>
              </div>
           </div>
           <div id="image-wrapper">
           <div id="scroling-img" className="bottom-right-image kenburns">
              <img width="700" height="567" src="http://marktwiz.com/wp-content/uploads/2019/09/real-estate.png" className="attachment-full size-full wp-post-image" alt="" srcset="http://marktwiz.com/wp-content/uploads/2019/09/real-estate.png 700w, http://marktwiz.com/wp-content/uploads/2019/09/real-estate-300x243.png 300w" sizes="100vw" />   
           </div>
           </div>
        </section>
        <div className="view-service-wrap">				
          <a onClick={() => this.props.history.push("/services/")} className="btn AllServiceBtn">All Services <img src={imgArrowBlack} alt="arrow" className="img-fluid" /></a>
        </div>
        <div className="top-image kenburns">
          <img src={ImgLogoPages} alt="" width="" height=""/>
        </div>
      </div>
      );
  }
}