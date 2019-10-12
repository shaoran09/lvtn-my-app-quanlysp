import React, { Component } from 'react'
import './css/product.css'
import './css/product_responsive.css'
import Navbartop from './Navbartop';
import Navbarleft from './Navbarleft';
import Homebanner from './Homebanner';
import Menufilter from './menufilter';

class Productdetail extends Component {
    render() {
        return (
            <div className="super_container">
            <Navbartop />
            <Navbarleft />
            <Homebanner />
            <Menufilter/>
                <div className="section_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="product_content_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                                    <div className="product_content order-lg-1 order-2">
                                        <div className="product_content_inner">
                                            <div className="product_image_row d-flex flex-md-row flex-column align-items-md-end align-items-start justify-content-start">
                                                <div className="product_image_1 product_image">
                                                    <img src="images/product_single_1.jpg" alt />
                                                </div>
                                                <div className="product_image_2 product_image"><img src="images/product_single_2.jpg" alt /></div>
                                            </div>
                                            <div className="product_image_row">
                                                <div className="product_image_3 product_image"><img src="images/product_single_3.jpg" alt /></div>
                                            </div>
                                            <div className="product_image_row d-flex flex-md-row flex-column align-items-start justify-content-start">
                                                <div className="product_image_4 product_image"><img src="images/product_single_4.jpg" alt /></div>
                                                <div className="product_image_5 product_image"><img src="images/product_single_5.jpg" alt /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_sidebar order-lg-2 order-1">
                                        <form action="#" id="product_form" className="product_form">
                                            <div className="product_name">Brown Shoulder Bag</div>
                                            <div className="product_price">$19.50</div>
                                            <div className="product_color">Color: <span>Brown</span></div>
                                            <div className="product_size">
                                                <div className="product_size_title">Select Size</div>
                                                <div className="product_size_list">
                                                    <ul>
                                                        <li className="size_available">
                                                            <input type="radio" id="radio_1" name="product_radio" className="regular_radio radio_1" />
                                                            <label htmlFor="radio_1">35</label>
                                                        </li>
                                                        <li className="size_available">
                                                            <input type="radio" id="radio_2" name="product_radio" className="regular_radio radio_2" />
                                                            <label htmlFor="radio_2">36</label>
                                                        </li>
                                                        <li className="size_available">
                                                            <input type="radio" id="radio_3" name="product_radio" className="regular_radio radio_3" />
                                                            <label htmlFor="radio_3">37</label>
                                                        </li>
                                                        <li className="size_available">
                                                            <input type="radio" id="radio_4" name="product_radio" className="regular_radio radio_4" />
                                                            <label htmlFor="radio_4">38</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="radio_5" name="product_radio" className="regular_radio radio_5" disabled />
                                                            <label htmlFor="radio_5">39</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="radio_6" name="product_radio" className="regular_radio radio_6" disabled />
                                                            <label htmlFor="radio_6">40</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <button className="cart_button trans_200">add to cart</button>
                                            <div className="similar_products_button trans_200"><a href="categories.html">see similar products</a></div>
                                        </form>
                                        <div className="product_links">
                                            <ul className="text-center">
                                                <li><a href="#">See guide</a></li>
                                                <li><a href="#">Shipping</a></li>
                                                <li><a href="#">Returns</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Productdetail