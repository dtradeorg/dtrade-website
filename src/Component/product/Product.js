import React from 'react'
import './Product.css'

const data = [
    {
        r1:"tEDG Uniswap Rate",
        r2:"1.008 ",
        r3:"Pool size: 1513.76 tEDG / 1526.15 EDG",
    },
    {
        r1:"tEDG Uniswap Rate",
        r2:"1.008 ",
        r3:"Pool size: 1513.76 tEDG / 1526.15 EDG",
    },
    {
        r1:"Total Assets Supply",
        r2:"$69.934.069 ",
        r3:"The total value of all circulating assets.",
    },
    {
        r1:"Network Collateralization",
        r2:"365.91%",
        r3:"The aggregate collateralisation ratio of all TDT wallets.",
    },
    {
        r1:"tEDG Uniswap Rate",
        r2:"1.008 ",
        r3:"Pool size: 1513.76 tEDG / 1526.15 EDG",
    },
    {
        r1:"Total Assets Supply",
        r2:"$69.934.069 ",
        r3:"The total value of all circulating assets.",
    },
    {
        r1:"Network Collateralization",
        r2:"365.91%",
        r3:"The aggregate collateralisation ratio of all TDT wallets.",
    },
    {
        r1:"Active Collateralization",
        r2:"214.11%",
        r3:"Theaggregate collaterlistion ratio of TDT wallets that are currently staking.",
    },
]


export default function Product() {
    return (
        <div className="contianer product-div text-center ">
            <h1 className="mx-auto">Decentralized Exposure, dTrade Exhange.</h1>
            <h2>The first DeFi platform on Substrate.</h2>
            <img src="./assets/images/Product/product.svg" alt="Product" className="img-fluid "></img>

            <div className="row d-none d-md-flex container mx-auto product-row">
                <Card data={data.slice(0,4)}/>
                

                
            </div>
            <div className="row d-none d-md-flex container mx-auto product-row">
                <Card data={data.slice(4,8)}/>

                
            </div>

            <div className="mobile-scroll d-md-none">
                <div className="row container mx-auto">
                    <Card data={data}/>

                    
                </div>
                
            </div>

            <div className="under-card">Launching Soon</div>

        </div>
    )
}




function Card({data}){
    

    return data.map((row,index)=>{
        return(
            <div className={(index+1)%4 !== 0 ? "col product-card mb-3 mr-md-3 ":"col product-card mb-3"} key={index}>
                    <div className="r1">{row.r1}</div>

                    <div className="r2">{row.r2}</div>

                    <div className="r3">{row.r3} </div>

            </div>
        )
    });
}

