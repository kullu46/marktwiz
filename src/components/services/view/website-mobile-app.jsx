import React, { Component } from "react";
import Imglogo from '../../../assets/images/logo.png';
import ImgLogoPages from '../../../assets/images/logo-for-pages.png';
import imgArrowBlack from '../../../assets/images/home-slider/arrow-b.png';
export default class WebisteMobileApp extends Component {
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
<section id="website-mobile-section">
   <div className="wrap">
      <div className="row">
         <div className="inner-content">
            <h1>Website &#038; Mobile App</h1>
            <p>First point of connection of your clientele is, retention wise the most vital digital interaction. With distinct designs, intelligent development, on-target content, and a user friendly interface we ensure the perfect first impression.</p>
                     <ul>
             
             
            <li className="ModernDesign-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Modern Design	</h3>
                </div> 
            </div> 
            </li> 
             
             
            <li className="VersatileDevelopment-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Versatile Development	</h3>
                </div> 
            </div> 
            </li> 
             
             
            <li className="FriendlyUI/UX-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Friendly UI/UX</h3>
                </div> 
            </div> 
            </li> 
             
             
            <li className="Responsive&RetinaReady-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Responsive & Retina Ready	</h3>
                </div> 
            </div> 
            </li> 
             
             
            <li className="iOS/Android-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>iOS/Android	</h3>
                </div> 
            </div> 
            </li> 
             
             
            <li className="CrispIcons-wrap"> 
            <div className="content-wrap">
               <div className="content-box">
                  <h3>Crisp Icons</h3>
                </div> 
            </div> 
            </li> 
             
         </ul>
               </div>
      </div>
   </div>
   <div id="image-wrapper">
   <div id="scroling-img" className="bottom-right-image kenburns">
      <img width="720" height="706" src="http://marktwiz.com/wp-content/uploads/2019/09/web-mobile.png" className="attachment-full size-full wp-post-image" alt="" srcset="http://marktwiz.com/wp-content/uploads/2019/09/web-mobile.png 720w, http://marktwiz.com/wp-content/uploads/2019/09/web-mobile-300x294.png 300w" sizes="100vw" />   
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