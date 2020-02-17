import React, { Component } from "react";
import Imglogo from '../../../assets/images/logo.png';
import ImgLogoPages from '../../../assets/images/logo-for-pages.png';
import imgArrowBlack from '../../../assets/images/home-slider/arrow-b.png';
export default class BrandingIdentity extends Component {
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
        <section id="branding-identity-section">
           <div className="wrap">
              <div className="row">
                 <div className="inner-content">
                    <h1>Branding &#038; Identity</h1>
                    <p>Creation of uniformity in your graphics helps the clientele to connect with your brand on every platform building brand recognition. Creation of uniformity in your graphics helps the clientele to connect with your brand on every platform building brand recognition.</p>
                    <ul>
                      <li className="Logo-wrap"> 
                        <div className="content-wrap">
                          <div className="content-box">
                              <h3>Logo	</h3>
                            </div> 
                        </div> 
                      </li> 
                      <li className="UniformBranding-wrap"> 
                      <div className="content-wrap">
                        <div className="content-box">
                            <h3>Uniform Branding</h3>
                          </div> 
                      </div> 
                      </li> 
                      <li className="BrandBook-wrap"> 
                      <div className="content-wrap">
                        <div className="content-box">
                            <h3>Brand Book</h3>
                          </div> 
                      </div> 
                      </li> 
                      <li className="EffectiveDesigns-wrap"> 
                      <div className="content-wrap">
                        <div className="content-box">
                            <h3>Effective Designs</h3>
                          </div> 
                      </div> 
                      </li> 
                      <li className="BrandAwareness-wrap"> 
                        <div className="content-wrap">
                          <div className="content-box">
                              <h3>Brand Awareness</h3>
                            </div> 
                        </div> 
                      </li> 
                    </ul>
                  </div>
              </div>
           </div>
           <div id="image-wrapper">
           <div id="scroling-img" className="bottom-right-image kenburns">
              <img width="861" height="547" src="http://marktwiz.com/wp-content/uploads/2019/09/branding-identity.png" className="attachment-full size-full wp-post-image" alt="" srcset="http://marktwiz.com/wp-content/uploads/2019/09/branding-identity.png 861w, http://marktwiz.com/wp-content/uploads/2019/09/branding-identity-300x191.png 300w, http://marktwiz.com/wp-content/uploads/2019/09/branding-identity-768x488.png 768w" sizes="100vw" />   
           </div>
           </div>
        </section>
        <div class="view-service-wrap">				
				<a onClick={() => this.props.history.push("/services/")} className="btn AllServiceBtn">All Services <img src={imgArrowBlack} alt="arrow" className="img-fluid" /></a>
			</div>
			<div className="top-image kenburns">
				<img src={ImgLogoPages} alt="" width="" height=""/>
			</div>
            </div>
      
        );
  }
}