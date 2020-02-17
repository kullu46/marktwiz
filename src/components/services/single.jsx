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
	render() {
		let path = "";
		switch(this.props.match.params.slug){
			case "digital-strategy":
				path = <DigitalStrategy {...this.props}/>;
				break;
			case "advertisement":
				path = <Advertisement {...this.props}/>;
				break;
			case "branding-identity":
				path = <BrandingIdentity {...this.props}/>;
				break;
			case "lead-generation":
				path = <LeadGeneration {...this.props}/>;
				break;
			case "real-estate":
				path = <RealEstate {...this.props}/>;
				break;
			case "social-media-management":
				path = <SocialMediaManagement {...this.props}/>;
				break;
			case "website-mobile-app":
				path = <WebsiteMobileApp {...this.props}/>;
				break;
			default:
				path = <NotFound {...this.props}/>;
				break;
		}
		return path;
	}
}
