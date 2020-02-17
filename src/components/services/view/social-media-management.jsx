import React, { Component } from "react";
import Imglogo from '../../../assets/images/logo.png';
import ImgLogoPages from '../../../assets/images/logo-for-pages.png';
import imgArrowBlack from '../../../assets/images/home-slider/arrow-b.png';
export default class SocialMediaManagement extends Component {
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

        <section id="smm-section">
           <div className="wrap">
              <div className="row">
                 <div className="inner-content">
                    <h1>Social Media Management</h1>
                    <p>Social networks&#8217; large stores of curated data and users allow for parameter defined targeted marketing. Comprehensive content creation based on specific Branding to ensure your online presence.</p>
                             <ul>
                     
                     
                    <li className="BrandMaintanence-wrap"> 
                    <div className="content-wrap">
                       <div className="content-box">
                          <h3>Brand Maintanence	</h3>
                        </div> 
                    </div> 
                    </li> 
                     
                     
                    <li className="GuidelineSpecific-wrap"> 
                    <div className="content-wrap">
                       <div className="content-box">
                          <h3>Guideline Specific	</h3>
                        </div> 
                    </div> 
                    </li> 
                     
                     
                    <li className="AudienceBuilding-wrap"> 
                    <div className="content-wrap">
                       <div className="content-box">
                          <h3>Audience Building</h3>
                        </div> 
                    </div> 
                    </li> 
                     
                     
                    <li className="TimelineGraphics-wrap"> 
                    <div className="content-wrap">
                       <div className="content-box">
                          <h3>Timeline Graphics	</h3>
                        </div> 
                    </div> 
                    </li> 
                     
                     
                    <li className="IncreasedEngagements-wrap"> 
                    <div className="content-wrap">
                       <div className="content-box">
                          <h3>Increased Engagements</h3>
                        </div> 
                    </div> 
                    </li> 
                     
                 </ul>
                       </div>
              </div>
           </div>
           <div id="image-wrapper">
           <div id="scroling-img" className="bottom-right-image kenburns">
              <img width="878" height="800" src="http://marktwiz.com/wp-content/uploads/2019/09/smm-page.png" className="attachment-full size-full wp-post-image" alt="" srcset="http://marktwiz.com/wp-content/uploads/2019/09/smm-page.png 878w, http://marktwiz.com/wp-content/uploads/2019/09/smm-page-300x273.png 300w, http://marktwiz.com/wp-content/uploads/2019/09/smm-page-768x700.png 768w" sizes="100vw" />   
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