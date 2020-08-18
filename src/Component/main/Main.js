import React, { Component } from 'react'
import NavBar from '../navbar/Nav'
import Header from '../header/Header'
import Vision from '../vision/Vision'
import Options from '../options/Options'
import Features from '../features/Features'
import Product from '../product/Product'
import Portfolio from '../portfolio/Portfolio'
import Disclosure from '../disclosure/Disclosure'
import Footer from '../footer/Footer'
import './main.css'


class Main extends Component {
    render() {
        return (
            <>
                <NavBar></NavBar>
                <Header></Header>
                <Vision></Vision>
                <Options></Options>
                <Features></Features>
                <Product></Product>
                <Portfolio></Portfolio>
                <Disclosure/>
                <Footer/>

            </>
        )
    }
}

export default Main


