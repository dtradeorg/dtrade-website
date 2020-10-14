import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <footer>
            <div className="container-fluid footer-switch mb-12">
                <div className="container footer-box">
                    <div className="d-flex justify-content-center container px-0 ">
                        <div className=" d-inline-flex copy-right pl-0 pr-0 position-absolute " style={{left:"9%"}}>
                            <h6 className="mb-0">20 Bay Street, 11th Floor, Toronto, ON</h6>
                        </div>
                        <div className="mx-auto d-inline-flex copy-right pl-0 pr-0">

                            <h6 className="mb-0">Copyright &copy; 2020 &nbsp;
                                <a href="#!"><img src="./assets/images/footer/logo.png" alt="sc" className="img-fluid mb-1"/></a>&nbsp;</h6>
                            <h6 className="mb-0"> - All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container footer-box-mobile">
                    <div className="row text-center">
                        <div className="col-12 d-inline-flex copy-right-phone pl-0 pr-0  justify-content-center">
                            <h6 className="mb-0">Copyright &copy; 2020 &nbsp; 
                            <a href="#!"><img src="./assets/images/footer/logo.png" alt="sc"  className="img-fluid"/></a> &nbsp;
                            </h6>

                            

                        </div>
                        <div className="col-12 d-inline-flex rights-reserved-phone pl-0 pr-0  justify-content-center">
                            All rights reserved.
                        </div>
                        
                        <div className="col-12 d-inline-flex rights-reserved-phone pl-0 pr-0  justify-content-center my-3">
                            20 Bay Street, 11th Floor, Toronto, ON
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
