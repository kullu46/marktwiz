import React, { Component } from "react";
import DigitalStrategy from "./view/digital-strategy";
import Advertisement from "./view/advertisement";
import BrandingIdentity from "./view/branding-identity";
import LeadGeneration from "./view/lead-generation";
import RealEstate from "./view/real-estate";
import SocialMediaManagement from "./view/social-media-management";
import WebsiteMobileApp from "./view/website-mobile-app";
import NotFound from "./../404/index";
export default class SingleService extends Component {
	componentDidMount(){
    let scriptExist = document.getElementById("custom-js");
    if(scriptExist){
      scriptExist.parentElement.removeChild(scriptExist);
    }
		const script = document.createElement("script");
    script.src = "/assets/js/custom.js";
    script.id = "custom-js";
    script.async = true;
		document.body.appendChild(script);
  }
	render() {
		let classesDigitalStrategy = "section content d-flex align-items-center justify-content-center flex-column h-100";
		let classesBrandingIdentity = "section content d-flex align-items-center justify-content-center flex-column h-100";
		let classesWebsiteMobileApp = "section content d-flex align-items-center justify-content-center flex-column h-100";
		let classesSocialMediaManagement = "section content d-flex align-items-center justify-content-center flex-column h-100";
		let classesLeadGeneration = "section content d-flex align-items-center justify-content-center flex-column h-100";
		let classesAdvertisement = "section content d-flex align-items-center justify-content-center flex-column h-100";
		let classesRealEstate = "section content d-flex align-items-center justify-content-center flex-column h-100";
		switch(this.props.match.params.slug){
			case "digital-strategy":
				classesDigitalStrategy = "section content d-flex align-items-center justify-content-center flex-column h-100 active";
				break;
			case "advertisement":
				classesAdvertisement = "section content d-flex align-items-center justify-content-center flex-column h-100 active";
				break;
			case "branding-identity":
				classesBrandingIdentity = "section content d-flex align-items-center justify-content-center flex-column h-100 active";
				break;
			case "lead-generation":
				classesLeadGeneration = "section content d-flex align-items-center justify-content-center flex-column h-100 active";
				break;
			case "real-estate":
				classesRealEstate = "section content d-flex align-items-center justify-content-center flex-column h-100 active";
				break;
			case "social-media-management":
				classesSocialMediaManagement = "section content d-flex align-items-center justify-content-center flex-column h-100 active";
				break;
			case "website-mobile-app":
				classesWebsiteMobileApp = "section content d-flex align-items-center justify-content-center flex-column h-100 active";
				break;
			default:
				break;
		}
		
		return (
			<div className="HomeSliderMain transition-item">
				<section id="slider-wrapper" className="position-relative">
					<div id="services" className="h-100">
						<div id="slide-1" className={classesDigitalStrategy}>
							<DigitalStrategy {...this.props}/>
						</div>
						<div id="slide-2" className={classesBrandingIdentity}>
							<BrandingIdentity {...this.props}/>
						</div>
						<div id="slide-3" className={classesWebsiteMobileApp}>
							<WebsiteMobileApp {...this.props}/>
						</div>
						<div id="slide-4" className={classesSocialMediaManagement}>
							<SocialMediaManagement {...this.props}/>
						</div>
						<div id="slide-5" className={classesLeadGeneration}>
							<LeadGeneration {...this.props}/>
						</div>
						<div id="slide-6" className={classesAdvertisement}>
							<Advertisement {...this.props}/>
						</div>
						<div id="slide-7" className={classesRealEstate}>
							<RealEstate {...this.props}/>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
