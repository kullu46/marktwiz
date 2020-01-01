import React, { Component } from "react";
import Imglogo from '../../../assets/images/logo.png';
import ImgLogoPages from '../../../assets/images/logo-for-pages.png';
import imgArrowBlack from '../../../assets/images/home-slider/arrow-b.png';
export default class DigitalStrategy extends Component {
    componentDidMount() {
        document.body.classList.add('page-all-services');
    }
  render() {
    return (
		<div className="page-services">
			<div className="headerMain position-absolute text-center text-lg-left w-100" style={{zIndex: "10"}}>
				<div className="container-fluid">
				<div className="row">
					<div className="main-logo">
					<a onClick={() => this.props.history.push("/")}>
						<img src={Imglogo} alt="Marktwiz" className="img-fluid" /></a>
					</div>
				</div>
				</div>
			</div>
			<section id="website-mobile-section">
				<div class="wrap">
					<div class="row">
						<div class="inner-content p-0">
								<h1>Website &amp; Mobile App</h1>
								<p>First point of connection of your clientele is, retention wise the most vital digital interaction. With distinct designs, intelligent development, on-target content, and a user friendly interface we ensure the perfect first impression.</p>
												<ul>
								
								
								<li class="ModernDesign-wrap"> 
								<div class="content-wrap">
									<div class="content-box">
											<h3>Modern Design	</h3>
										</div> 
								</div> 
								</li> 
								
								
								<li class="VersatileDevelopment-wrap"> 
								<div class="content-wrap">
									<div class="content-box">
											<h3>Versatile Development	</h3>
										</div> 
								</div> 
								</li> 
								
								
								<li class="FriendlyUI/UX-wrap"> 
								<div class="content-wrap">
									<div class="content-box">
											<h3>Friendly UI/UX</h3>
										</div> 
								</div> 
								</li> 
								
								
								<li class="Responsive&amp;RetinaReady-wrap"> 
								<div class="content-wrap">
									<div class="content-box">
											<h3>Responsive &amp; Retina Ready	</h3>
										</div> 
								</div> 
								</li> 
								
								
								<li class="iOS/Android-wrap"> 
								<div class="content-wrap">
									<div class="content-box">
											<h3>iOS/Android	</h3>
										</div> 
								</div> 
								</li> 
								
								
								<li class="CrispIcons-wrap"> 
								<div class="content-wrap">
									<div class="content-box">
											<h3>Crisp Icons</h3>
										</div> 
								</div> 
								</li> 
								
							</ul>
						</div>
					</div>
				</div>
				<div id="image-wrapper">
					<div id="scroling-img" class="bottom-right-image kenburns">
							<img width="720" height="706" src="http://marktwiz.com/wp-content/uploads/2019/09/web-mobile.png" class="attachment-full size-full wp-post-image" alt="" srcset="http://marktwiz.com/wp-content/uploads/2019/09/web-mobile.png 720w, http://marktwiz.com/wp-content/uploads/2019/09/web-mobile-300x294.png 300w" sizes="100vw"/>   
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
