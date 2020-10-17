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

                    <div className="col text-center switch-bar-col pl-0">
                        
                        <div className="row switch-bar-padding-bottom">
                            <div className="col">
                                <img 
                                     className="img-fluid arrow-spec" 
                                     src="./assets/images/Specs/arrow-up.svg" 
                                     alt=""
                                     onClick={()=>UpArrowFunc()}
                                />
                            </div>
                            
                        </div>

                        <div className="row ">
                            <div className="col" >
                                <img 
                                src="./assets/images/Specs/stake-active.svg" 
                                alt=""
                                className = { tab === 0 ? "active" : "inactive" }
                                onClick={()=>RewardClick()}
                                />
                            </div>
                            
                        </div>

                        <div className="row switch-bar-padding-between">
                            <div className="col" >
                            <img 
                                src="./assets/images/Specs/trade-active.svg" 
                                alt=""
                                className = { tab === 1 ? "active" : "inactive" }
                                onClick={()=>TradeClick()}
                               />
                            </div>
                            
                        </div>

                        <div className="row switch-bar-padding-between" >
                            <div className="col " >
                            <img 
                                src="./assets/images/Specs/lp-active.svg" 
                                alt=""
                                className = { tab === 2 ? "active" : "inactive" }
                                onClick={()=>LPClick()}
                                />
                            </div>
                            
                        </div>

                        <div className="row switch-bar-padding-top">
                            <div className="col" >
                                <img 
                                className="img-fluid arrow-spec" 
                                src="./assets/images/Specs/arrow-down.svg" 
                                alt=""
                                onClick={()=>DownArrowFunc()}
                                />
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

                        </div>
                    </div>
                    <div className="row mt-2 mb-2">
                                <div className="col my-auto text-right">
                                    <img  className="img-fluid arrow-spec text-left" src="./assets/images/Specs/arrow-left.svg" onClick={()=>UpArrowFunc()} alt=""></img>
                                </div>
                                <div className="col justify-content-center text-center">
                                <img 
                                src="./assets/images/Specs/stake-active.svg" 
                                alt=""
                                className = { tab === 0 ? "active" : "inactive" }
                                onClick={()=>RewardClick()}
                                />                              </div>
                                <div className="col justify-content-center text-center">
                                <img 
                                src="./assets/images/Specs/trade-active.svg" 
                                alt=""
                                className = { tab === 1 ? "active" : "inactive" }
                                onClick={()=>TradeClick()}
                                />                             </div>
                                <div className="col my-auto justify-content-center text-center">
                                <img 
                                src="./assets/images/Specs/lp-active.svg" 
                                alt=""
                                className = { tab === 2 ? "active" : "inactive" }
                                onClick={()=>LPClick()}
                                />                              </div>
                                <div className="col my-auto text-left">
                                <img  className="img-fluid arrow-spec text-right" src="./assets/images/Specs/arrow-right.svg" alt="" onClick={()=>DownArrowFunc()} ></img>
                                </div>
                            </div>
            </div>

        </div>
    )
}

export default Specs
