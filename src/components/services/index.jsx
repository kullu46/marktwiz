import React, { Component } from "react";
import Imglogo from '../../assets/images/logo.png';
export default class Services extends Component {
	hashChange = (url, title) => {
		console.log(url, title);
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
				
				<div className="all-services">
					<div className="first-service">
						<div id="first_service">
							<div className="content-box">
								<h2>Digital Strategy</h2>
								<div className="content-single">
									<p>A digital strategy is a form of strategic management</p>
									<a href="#" onClick={this.hashChange('http://marktwiz.com/digital-strategy/', 'Digital Strategy - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a>
								</div>
							</div>
						</div>
					</div>
					<ul>
						<li className="Branding&amp;Identity-wrap">
							<div className="content-wrap">
								<div className="content-box">
									<h2>Branding &amp; Identity</h2>
									<div className="content-single">
										<p>A digital strategy is a form of strategic management</p>
										<a className="btn-more" href="#" onClick={this.hashChange('http://marktwiz.com/branding-identity/', 'Branding &amp; Identity - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
									</div>
								</div>
							</div>
						</li>
						<li className="Websites&amp;<br/>MobileApps-wrap">
							<div className="content-wrap">
								<div className="content-box">
									<h2>Websites &amp;<br/>Mobile Apps</h2>
									<div className="content-single">
										<p>A digital strategy is a form of strategic management</p>
										<a className="btn-more" href="#" onClick={this.hashChange('http://marktwiz.com/website-mobile-app/', 'Websites &amp;<br/>Mobile Apps - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
									</div>
								</div>
							</div>
						</li>
						<li className="SocialMedia<br/>Management-wrap">
							<div className="content-wrap">
								<div className="content-box">
									<h2>Social Media<br/>Management</h2>
									<div className="content-single">
										<p>A digital strategy is a form of strategic management</p>
										<a className="btn-more" href="#" onClick={this.hashChange('http://marktwiz.com/social-media-management/', 'Social Media<br/>Management - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
									</div>
								</div>
							</div>
						</li>
						<li className="LeadGeneration-wrap">
							<div className="content-wrap">
								<div className="content-box">
									<h2>Lead Generation </h2>
									<div className="content-single">
										<p>A digital strategy is a form of strategic management</p>
										<a className="btn-more" href="#" onClick={this.hashChange('http://marktwiz.com/lead-generation/', 'Lead Generation  - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
									</div>
								</div>
							</div>
						</li>
						<li className="Advertisment-wrap">
							<div className="content-wrap">
								<div className="content-box">
									<h2>Advertisment</h2>
									<div className="content-single">
										<p>A digital strategy is a form of strategic management</p>
										<a className="btn-more" href="#" onClick={this.hashChange('http://marktwiz.com/advertisement/', 'Advertisment - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
									</div>
								</div>
							</div>
						</li>
						<li className="RealEstate-wrap">
							<div className="content-wrap">
								<div className="content-box">
									<h2>Real Estate</h2>
									<div className="content-single">
										<p>A digital strategy is a form of strategic management</p>
										<a className="btn-more" href="#" onClick={this.hashChange('http://marktwiz.com/real-estate/', 'Real Estate - Digital Products &amp; services')}>Know More <i className="zmdi zmdi-long-arrow-right"></i></a> 
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
    );
  }
}
