import React, { Component } from "react";
import Imglogo from '../../assets/images/logo.png';
export default class SingleService extends Component {
	componentDidMount() {
		document.body.classList.add('page-all-services');
	}
	hashChange (url, title) {
		this.props.history.push(url);
	}
	mouseleave = (e) => {
		e.target.classList.remove('active');
	}
	mouseenter = (e) => {
		e.target.classList.add('active');
	}
  render() {
    return (
			<div className="page-services">
				<div className="logo position-absolute text-center text-lg-left w-100" style={{zIndex: "10"}}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 pl-lg-5 pl-md-2 p-4">
							<a onClick={() => this.props.history.push("./")}>
							<img src={Imglogo} alt="Marktwiz" className="img-fluid" /></a>
						</div>
					</div>
				</div>
			</div>
			<section id="website-mobile-section">
				<div class="wrap">
					<div class="row">
						<div class="inner-content">
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
			</div>
    );
  }
}
