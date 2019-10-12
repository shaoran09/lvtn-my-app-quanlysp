import React, { Component } from 'react'
import Navbarleft from './Navbarleft';
import Navbartop from './Navbartop';
import Menufilter from './menufilter';
import Productlist from './productlist';
import Homebanner from './Homebanner';
import Newsletter from './newsletter';
import Footer from './footer';


class Homepage extends Component {

    render() {
        return (
            <div>
                <Navbartop />
                <Navbarleft />
                <div className="super_container">
                    <Homebanner />
                    {/* Products */}
                    <Menufilter />

                    <div className="products">
                        <div className="section_container">
                            <div className="container">
                                <Productlist />
                            </div>
                        </div>
                    </div>

                    <div className="newsletter">
                        <Newsletter />
                    </div>
                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        )
    }
}



export default Homepage