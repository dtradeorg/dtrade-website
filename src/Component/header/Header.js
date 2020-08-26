import React, { Component } from 'react'
import './Header.css'
// import Progress from '../ProgressBar/Progress'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
    render() {
        return (
            <div  className="conatiner-fluid header">

                <div className="container text-center"> 

                    <h1>Trade Any Market</h1>
                    <div className="sub-heading">A protocol for trading synthetic assets on Edgeware<sup className="sup-1">1</sup></div>

                    <div className="row justify-content-center">
                        <a href="#!">
                            Start Trading
                            <img  className="arrow-ml mb-1" src="./assets/images/chevron-right-small-blue.svg" alt="arrow"></img>
                        
                        </a>
                        <a href="#!" className="ml-4">
                            Start Staking
                            <img className="arrow-ml mb-1" src="./assets/images/chevron-right-small-blue.svg" alt="arrow"></img>
                        </a>
                    </div>
                    <img className="map img-fluid" src="./assets/images/Header/map.png" alt="map"></img>

                    

                </div>

                <div className="text-center align-bottom" id="progress-div">
                    {/* <Progress></Progress> */}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={false}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        closeButton={false}
                    />
                </div>
                
                
                
            </div>
        )
    }

    componentWillMount(){
        let toastContent  = <div className="toast-content">
            {/* <span role="img" aria-label="cookie">🍪</span> We are using cookies on this site. <a href="/#">Learn how. </a>  */}
            <span role="img" aria-label="info">
                <img src="./assets/images/info.png" alt="info" className="img-fluid mr-3 mb-1"/>
            </span>
            The content of this site will be updated with the launch. 
            <span role="img" aria-label="info">
                <img src="./assets/images/close.png" alt="x" className="img-fluid ml-3"/>
            </span>
        </div>;
        toast.dark(toastContent, {
           
            progress: 0,
        });
    }
}

export default Header
