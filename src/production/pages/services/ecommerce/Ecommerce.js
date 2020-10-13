import React, { Component } from "react";

import Header from "../../components/Header/header";
import HeroSection from "../../components/HeroSection/HeroSection3";
import PromoSection from "../../components/PromoSection";
import AboutSection from "../../components/AboutUs";
import FeatureSection from "../../components/Features/Feature3";
import ContactSection from "../../components/Contact";
import TrustedCompany from "../../landing/components/TrustedCompany";
import SubscribeSection from "../../components/Subscribe";
import FooterSection from "../../components/Footer";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header bgColor="white" />
        <div className="main">
          <HeroSection />
          <PromoSection />
          <AboutSection />
          <FeatureSection />
          <TrustedCompany />
          <ContactSection />
        </div>
        <SubscribeSection />
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Layout;
