import React, { Component } from 'react';

// import template components
import Header from "../../components/Header/header";
import HeroSection from "../../components/HeroSection/HeroSection4";
import PromoSection from "../../components/PromoSection/";
import TrustedCompany from "../../components/TrustedCompany/TrustedCompany"
import ContactSection from "../../components/Contact/";
import Subscribe from "../../components/Subscribe/";
import Footer from "../../components/Footer/";

export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="main">
                    <HeroSection/>
                    <PromoSection/>
                    <TrustedCompany/>
                    <ContactSection/>
                </div>
                <Subscribe/>
                <Footer/>
            </React.Fragment>
        )
    }
}
