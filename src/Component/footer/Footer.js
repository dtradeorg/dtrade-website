import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <footer>
            <div class="container-fluid footer-switch mb-12">
                <div class="container footer-box">
                    <div class="d-flex justify-content-center container px-0 ">
                        <div class=" d-inline-flex copy-right pl-0 pr-0 position-absoltute " style={{left:"19%"}}>
                            <h6 class="mb-0">20 Bay Street, 11th Floor, Toronto, ON</h6>
                        </div>
                        <div class="mx-auto d-inline-flex copy-right pl-0 pr-0">

                            <h6 class="mb-0">Copyright &copy; 2020 &nbsp;
                                <a href="#!"><img src="assets/images/footer/logo.svg" alt="sc" class="img-fluid mb-1"/></a>&nbsp;</h6>
                            <h6 class="mb-0"> - All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="container footer-box-mobile">
                    <div class="row text-center">
                        <div class="col-12 d-inline-flex copy-right-phone pl-0 pr-0  justify-content-center">
                            <h6 class="mb-0">Copyright &copy; 2020 &nbsp; 
                            <a href="#!"><img src="assets/images/footer/logo.svg" alt="sc"  class="img-fluid"/></a> &nbsp;
                            </h6>

                            

                        </div>
                        <div class="col-12 d-inline-flex rights-reserved-phone pl-0 pr-0  justify-content-center">
                            All rights reserved.
                        </div>
                        
                        <div class="col-12 d-inline-flex rights-reserved-phone pl-0 pr-0  justify-content-center my-3">
                            20 Bay Street, 11th Floor, Toronto, ON
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
