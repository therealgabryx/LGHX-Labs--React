import React, { Component } from 'react'; 

// import styles 
import "../landing/Landing.css";  

// import template and custom components
/* custom */ import Header from "./components/Header/header";
/* custom */ import HeroSection from "./components/HeroSection/HeroSection4";
/* custom */ import PromoSection from "./components/PromoSection/";
/* custom */ import TrustedCompany from "./components/TrustedCompany/TrustedCompany"
import ContactSection from "../../components/Contact/"; 
import Subscribe from "../../components/Subscribe/"; 
import Footer from "../../components/Footer/"; 

export default class Landing extends Component { 
    render() { 
        return ( 
            <React.Fragment> 
                <Header/> 
                <div className="main landing"> 
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
