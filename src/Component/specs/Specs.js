import React, { useState } from 'react'
import './Specs.css'
import LP from './Tabs/LP';
import LPMobile from './Tabs/LPMobile';
import Reward from './Tabs/Reward'
import RewardMobile from './Tabs/RewardMobile'
import Trade from './Tabs/Trade';
import TradeMobile from './Tabs/TradeMobile';

function Specs() {


    const [tab, setTab] = useState(0);

    const setTabFunc = () => {

        switch(tab){

            case 0:
                return <Reward/>
            case 1:
                return <Trade/>
            case 2:
                return <LP/>
            default:
                return <Reward/>

        }

       
    }

    const setTabFuncMobile = () => {

        switch(tab){

            case 0:
                return <RewardMobile/>
            case 1:
                return <TradeMobile/>
            case 2:
                return <LPMobile/>
            default:
                return <RewardMobile/>

        }

       
    }

    const RewardClick = () => {
        console.log("REWARD")
        setTab(0);
    }

    const TradeClick = () => {
        console.log("TRADE")
        setTab(1);
    }

    const LPClick = () => {
        console.log("LP")
        setTab(2);
    }


    const DownArrowFunc = () => {
        console.log('sda')
        setTab( (tab + 1) % 3 );
    }

    const UpArrowFunc = () => {
        setTab( 
            tab === 0 ? 2 : (tab - 1)  );
    }

    return (
        <div id="stake" className="container-fluid">

            <div className="container desktopview">
                <div className="row align-items-center">

                    <div className="col-1 text-center">
                        
                        <div className="row">
                            <div className="col">
                                <img type="button" 
                                     id="arrow-up" 
                                     className="img-fluid" 
                                     src="./assets/images/Specs/arrow-up.svg" 
                                     alt=""
                                     onClick={()=>UpArrowFunc()}
                                ></img>
                            </div>
                            
                        </div>

                        <div className="row pt-5">
                            <div className="col">
                                <img type="button" 
                                src="./assets/images/Specs/Frame 145.svg" 
                                alt=""
                                onClick={()=>RewardClick()}
                                ></img>
                            </div>
                            
                        </div>

                        <div className="row pt-5">
                            <div className="col">
                                <img type="button" 
                                src="./assets/images/Specs/Frame 146.svg" 
                                alt=""
                                onClick={()=>TradeClick()}
                                ></img>
                            </div>
                            
                        </div>

                        <div className="row pt-5">
                            <div className="col">
                                <img type="button" 
                                src="./assets/images/Specs/Frame 147.svg" 
                                alt=""
                                onClick={()=>LPClick()}
                                ></img>
                            </div>
                            
                        </div>

                        <div className="row pt-5">
                            <div className="col">
                                <img type="button" 
                                id="arrow-down" 
                                className="img-fluid" 
                                src="./assets/images/Specs/arrow-down.svg" 
                                alt=""
                                onClick={()=>DownArrowFunc()}
                                ></img>
                            </div>
                            
                        </div>

                        
                        
                    </div>
                    
                    { setTabFunc() }

                </div>
                
                
            </div>
       
            <div className="container mobileview">
                    <div className="row align-items-center">
                        <div className="col-12">

                            {setTabFuncMobile()}

                        
                        <div className="row mt-2">
                                <div className="col my-auto">
                                    <img id="arrow-up" type="button" className="img-fluid" src="./assets/images/Specs/arrow-left.svg" onClick={()=>UpArrowFunc()} alt=""></img>
                                </div>
                                <div className="col">
                                    <img type="button" src="./assets/images/Specs/Frame 145.svg" alt="" onClick={()=>RewardClick()} ></img>
                                </div>
                                <div className="col">
                                    <img type="button" src="./assets/images/Specs/Frame 146.svg" alt="" onClick={()=>TradeClick()} ></img>
                                </div>
                                <div className="col my-auto">
                                <img type="button" src="./assets/images/Specs/Frame 147.svg" alt="" onClick={()=>LPClick()} ></img>
                                </div>
                                <div className="col my-auto">
                                <img type="button" id="arrow-down" className="img-fluid" src="./assets/images/Specs/arrow-right.svg" alt="" onClick={()=>DownArrowFunc()} ></img>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Specs
