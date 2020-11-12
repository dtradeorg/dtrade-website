import React, { Component } from 'react'
import NavBar from '../navbar/Nav'
import Header from '../header/Header'
import Options from '../options/Options'
import Features from '../features/Features'
import Portfolio from '../portfolio/Portfolio'
import Disclosure from '../disclosure/Disclosure'
import Footer from '../footer/Footer'
import './main.css'
import Improvement from '../imporvement/Improvement'
import Specs from '../specs/Specs'

class Main extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Header/>
                <Specs/>
                <Improvement/>
                <Features/>
                <Options/>
                <Portfolio/>
                <Disclosure/>
                <Footer/>

            </>
        )
    }
}

export default Main


