import React, { Component } from 'react'
import './css/checkout.css';
import './css/checkout_responsive.css'
import Navbartop from './Navbartop';
import Navbarleft from './Navbarleft';
import Homebanner from './Homebanner';


class Checkout extends Component {
    render() {
        return (<div>
            <div className="super_container">
                <Navbartop />
                <Navbarleft />
                <Homebanner />
                {/* Checkout */}
                <div className="checkout">
                    <div className="section_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="checkout_container d-flex flex-xxl-row flex-column align-items-start justify-content-start">
                                        {/* Billing */}
                                        <div className="billing checkout_box">
                                            <div className="checkout_title">Billing Address</div>
                                            <div className="checkout_form_container">
                                                <form action="#" id="checkout_form" className="checkout_form">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            {/* Name */}
                                                            <label htmlFor="checkout_name">First Name*</label>
                                                            <input type="text" id="checkout_name" className="checkout_input" required="required" />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            {/* Last Name */}
                                                            <label htmlFor="checkout_last_name">Last Name*</label>
                                                            <input type="text" id="checkout_last_name" className="checkout_input" required="required" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {/* Company */}
                                                        <label htmlFor="checkout_company">Company</label>
                                                        <input type="text" id="checkout_company" className="checkout_input" />
                                                    </div>
                                                    <div>
                                                        {/* Country */}
                                                        <label htmlFor="checkout_country">Country*</label>
                                                        <select name="checkout_country" id="checkout_country" className="dropdown_item_select checkout_input" require="required">
                                                            <option />
                                                            <option>Lithuania</option>
                                                            <option>Sweden</option>
                                                            <option>UK</option>
                                                            <option>Italy</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        {/* Address */}
                                                        <label htmlFor="checkout_address">Address*</label>
                                                        <input type="text" id="checkout_address" className="checkout_input" required="required" />
                                                        <input type="text" id="checkout_address_2" className="checkout_input checkout_address_2" required="required" />
                                                    </div>
                                                    <div>
                                                        {/* Zipcode */}
                                                        <label htmlFor="checkout_zipcode">Zipcode*</label>
                                                        <input type="text" id="checkout_zipcode" className="checkout_input" required="required" />
                                                    </div>
                                                    <div>
                                                        {/* City / Town */}
                                                        <label htmlFor="checkout_city">City/Town*</label>
                                                        <select name="checkout_city" id="checkout_city" className="dropdown_item_select checkout_input" require="required">
                                                            <option />
                                                            <option>City</option>
                                                            <option>City</option>
                                                            <option>City</option>
                                                            <option>City</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        {/* Province */}
                                                        <label htmlFor="checkout_province">Province*</label>
                                                        <select name="checkout_province" id="checkout_province" className="dropdown_item_select checkout_input" require="required">
                                                            <option />
                                                            <option>Province</option>
                                                            <option>Province</option>
                                                            <option>Province</option>
                                                            <option>Province</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        {/* Phone no */}
                                                        <label htmlFor="checkout_phone">Phone no*</label>
                                                        <input type="phone" id="checkout_phone" className="checkout_input" required="required" />
                                                    </div>
                                                    <div>
                                                        {/* Email */}
                                                        <label htmlFor="checkout_email">Email Address*</label>
                                                        <input type="phone" id="checkout_email" className="checkout_input" required="required" />
                                                    </div>
                                                    <div className="checkout_extra">
                                                        <ul>
                                                            <li className="billing_info d-flex flex-row align-items-center justify-content-start">
                                                                <label className="checkbox_container">
                                                                    <input type="checkbox" id="cb_1" name="billing_checkbox" className="billing_checkbox" />
                                                                    <span className="checkbox_mark" />
                                                                    <span className="checkbox_text">Terms and conditions</span>
                                                                </label>
                                                            </li>
                                                            <li className="billing_info d-flex flex-row align-items-center justify-content-start">
                                                                <label className="checkbox_container">
                                                                    <input type="checkbox" id="cb_2" name="billing_checkbox" className="billing_checkbox" />
                                                                    <span className="checkbox_mark" />
                                                                    <span className="checkbox_text">Create an account</span>
                                                                </label>
                                                            </li>
                                                            <li className="billing_info d-flex flex-row align-items-center justify-content-start">
                                                                <label className="checkbox_container">
                                                                    <input type="checkbox" id="cb_3" name="billing_checkbox" className="billing_checkbox" />
                                                                    <span className="checkbox_mark" />
                                                                    <span className="checkbox_text">Subscribe to our newsletter</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* Cart Total */}
                                        <div className="cart_total">
                                            <div className="cart_total_inner checkout_box">
                                                <div className="checkout_title">Cart total</div>
                                                <ul className="cart_extra_total_list">
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div className="cart_extra_total_title">Subtotal</div>
                                                        <div className="cart_extra_total_value ml-auto">$29.90</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div className="cart_extra_total_title">Shipping</div>
                                                        <div className="cart_extra_total_value ml-auto">Free</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div className="cart_extra_total_title">Total</div>
                                                        <div className="cart_extra_total_value ml-auto">$29.90</div>
                                                    </li>
                                                </ul>
                                                {/* Payment Options */}
                                                <div className="payment">
                                                    <div className="payment_options">
                                                        <label className="payment_option clearfix">Paypal
                            <input type="radio" name="radio" />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="payment_option clearfix">Cach on delivery
                            <input type="radio" name="radio" />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="payment_option clearfix">Credit card
                            <input type="radio" name="radio" />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="payment_option clearfix">Direct bank transfer
                            <input type="radio" defaultChecked="checked" name="radio" />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </div>
                                                </div>
                                                {/* Order Text */}
                                                <div className="order_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra temp or so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</div>
                                                <div className="checkout_button trans_200"><a href="checkout.html">place order</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Checkout