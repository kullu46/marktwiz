import React, { Component } from "react";
import Imglogo from '../../../assets/images/logo.png';
import ImgLogoPages from '../../../assets/images/logo-for-pages.png';
import imgArrowBlack from '../../../assets/images/home-slider/arrow-b.png';
export default class Advertisement extends Component {
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
<section id="advertisement-section">
    <div className="wrap">
        <div className="row">
            <div className="inner-content">
                <h1>Advertisement</h1>
                <p>A core component of your marketing mix, advertising demands a robust online to offline presence. A research driven ad placement process generates a pervasive brand image.</p>
                                <ul>
                                                            <li className="VideoAds-wrap">
                        <div className="content-wrap">
                            <div className="content-box">
                                <h3>Video Ads	</h3>
                            </div>
                        </div>
                    </li>
                                                            <li className="PrintMedia-wrap">
                        <div className="content-wrap">
                            <div className="content-box">
                                <h3>Print Media</h3>
                            </div>
                        </div>
                    </li>
                                                            <li className="2D-3DAnimations-wrap">
                        <div className="content-wrap">
                            <div className="content-box">
                                <h3>2D-3D Animations	</h3>
                            </div>
                        </div>
                    </li>
                                                            <li className="ServicesCatalogue-wrap">
                        <div className="content-wrap">
                            <div className="content-box">
                                <h3>Services Catalogue</h3>
                            </div>
                        </div>
                    </li>
                                    </ul>
                            </div>
        </div>
    </div>
    <div id="image-wrapper">
        <div id="scroling-img" className="bottom-right-image kenburns">
            <img width="670" height="713" src="http://marktwiz.com/wp-content/uploads/2019/09/advertizment-image.jpg" className="attachment-full size-full wp-post-image" alt="" srcset="http://marktwiz.com/wp-content/uploads/2019/09/advertizment-image.jpg 670w, http://marktwiz.com/wp-content/uploads/2019/09/advertizment-image-282x300.jpg 282w" sizes="100vw" />        </div>
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