import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Homebanner extends Component {
    render() {
        return (
            <div>
                {/* Home */}
                <div className="home">
                    <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/categories.jpg" data-speed="0.8" />
                    <div className="home_container">
                        <div className="home_content">
                            <div className="home_title">Cửa hàng</div>
                            <div className="breadcrumbs">
                                <ul className="d-flex flex-row align-items-center justify-content-start">
                                    <li><Link to='/'>Trang chủ</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homebanner