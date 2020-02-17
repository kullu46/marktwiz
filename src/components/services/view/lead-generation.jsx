import React, { Component } from "react";
import Imglogo from '../../../assets/images/logo.png';
import ImgLogoPages from '../../../assets/images/logo-for-pages.png';
import imgArrowBlack from '../../../assets/images/home-slider/arrow-b.png';
export default class LeadGeneration extends Component {
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

<section id="lead-generation-section">
   <div className="wrap">
      <div className="row">
         <div className="inner-content">
            <h1>Lead Generation</h1>
            <p>Segmenting the market post-performance of a comprehensive analysis to reach your target audience with chique designs generating fresh practicable clientele.</p>
                     <ul>
             
             
            <li className="GoogleAdwords-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Google Adwords	</h3>
                </div> 
            </div> 
            </li> 
             
             
            <li className="FacebookCampaigns-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Facebook Campaigns	</h3>
                </div> 
            </div> 
            </li> 
             
             
            <li className="EmailMarketing-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Email Marketing	</h3>
                </div> 
            </div> 
            </li> 
             
             
            <li className="Re-Targeting-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Re-Targeting</h3>
                </div> 
            </div> 
            </li> 
             
             
            <li className="Re-Marketing-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Re-Marketing</h3>
                </div> 
            </div> 
            </li> 
             
         </ul>
               </div>
      </div>
   </div>
   <div id="image-wrapper">
   <div id="scroling-img" className="bottom-right-image kenburns">
      <img width="600" height="406" src="http://marktwiz.com/wp-content/uploads/2019/09/Lead-Generation.png" className="attachment-full size-full wp-post-image" alt="" srcset="http://marktwiz.com/wp-content/uploads/2019/09/Lead-Generation.png 600w, http://marktwiz.com/wp-content/uploads/2019/09/Lead-Generation-300x203.png 300w" sizes="100vw" />   
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