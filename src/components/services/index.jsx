import React, { Component } from "react";
import Imglogo from '../../assets/images/logo.png';
import ImgLogoPages from '../../assets/images/logo-for-pages.png';

export default class Services extends Component {
	componentDidMount() {
		document.body.classList.add('page-all-services');
	}
	hashChange (url, title) {
		this.props.history.push(url);
		//console.log(url, title);
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
			<section className="services-list">
				<div className="wrap">
					<div className="row">
						<div className="content-top">
							<p>A digital strategy is a form of strategic management and a business answer or response to a digital question, often best addressed as part of an overall business strategy.</p>
						</div>
						<div className="all-services">
							<div className="first-service">
								<div id="first_service">
									<div className="content-box">
										<h2>Digital Strategy</h2>
										<div className="content-single">
											<p>A digital strategy is a form of strategic management</p>
											<a onClick={() => this.hashChange('digital-strategy/', 'Digital Strategy - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a>
										</div>
									</div>
								</div>
							</div>
							<ul>
								<li className="Branding&amp;Identity-wrap" onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
									<div className="content-wrap">
										<div className="content-box">
											<h2>Branding &amp; Identity</h2>
											<div className="content-single">
												<p>A digital strategy is a form of strategic management</p>
												<a className="btn-more" onClick={() => this.hashChange('branding-identity/', 'Branding &amp; Identity - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
											</div>
										</div>
									</div>
								</li>
								<li className="Websites&amp;<br/>MobileApps-wrap" onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
									<div className="content-wrap">
										<div className="content-box">
											<h2>Websites &amp;<br/>Mobile Apps</h2>
											<div className="content-single">
												<p>A digital strategy is a form of strategic management</p>
												<a className="btn-more" onClick={() => this.hashChange('website-mobile-app/', 'Websites &amp;<br>Mobile Apps - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
											</div>
										</div>
									</div>
								</li>
								<li className="SocialMedia<br/>Management-wrap" onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
									<div className="content-wrap">
										<div className="content-box">
											<h2>Social Media<br/>Management</h2>
											<div className="content-single">
												<p>A digital strategy is a form of strategic management</p>
												<a className="btn-more" onClick={() => this.hashChange('social-media-management/', 'Social Media<br>Management - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
											</div>
										</div>
									</div>
								</li>
								<li className="LeadGeneration-wrap" onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
									<div className="content-wrap">
										<div className="content-box">
											<h2>Lead Generation </h2>
											<div className="content-single">
												<p>A digital strategy is a form of strategic management</p>
												<a className="btn-more" onClick={() => this.hashChange('lead-generation/', 'Lead Generation  - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
											</div>
										</div>
									</div>
								</li>
								<li className="Advertisment-wrap" onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
									<div className="content-wrap">
										<div className="content-box">
											<h2>Advertisment</h2>
											<div className="content-single">
												<p>A digital strategy is a form of strategic management</p>
												<a className="btn-more" onClick={() => this.hashChange('advertisement/', 'Advertisment - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
											</div>
										</div>
									</div>
								</li>
								<li className="RealEstate-wrap" onMouseEnter={this.mouseenter} onMouseLeave={this.mouseleave}>
									<div className="content-wrap">
										<div className="content-box">
											<h2>Real Estate</h2>
											<div className="content-single">
												<p>A digital strategy is a form of strategic management</p>
												<a className="btn-more" onClick={() => this.hashChange('real-estate/', 'Real Estate - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div className="top-image kenburns">
				<img src={ImgLogoPages} alt="" width="" height=""/>
			</div>
		</div>
    );
  }
}
