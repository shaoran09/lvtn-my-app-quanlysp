import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="footer">
                    <div className="footer_content">
                        <div className="section_container">
                            <div className="container">
                                <div className="row">
                                    {/* About */}
                                    <div className="col-xxl-3 col-md-6 footer_col">
                                        <div className="footer_about">
                                            {/* Logo */}
                                            <div className="footer_logo">
                                                <a href="#"><div>a<span>star</span></div></a>
                                            </div>
                                            <div className="footer_about_text">
                                                <p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam fringilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
                                            </div>
                                            <div className="cards">
                                                <ul className="d-flex flex-row align-items-center justify-content-start">
                                                    <li><a href="#"><img src="images/card_1.jpg" alt /></a></li>
                                                    <li><a href="#"><img src="images/card_2.jpg" alt /></a></li>
                                                    <li><a href="#"><img src="images/card_3.jpg" alt /></a></li>
                                                    <li><a href="#"><img src="images/card_4.jpg" alt /></a></li>
                                                    <li><a href="#"><img src="images/card_5.jpg" alt /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Questions */}
                                    <div className="col-xxl-3 col-md-6 footer_col">
                                        <div className="footer_questions">
                                            <div className="footer_title">questions</div>
                                            <div className="footer_list">
                                                <ul>
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">Track Orders</a></li>
                                                    <li><a href="#">Returns</a></li>
                                                    <li><a href="#">Jobs</a></li>
                                                    <li><a href="#">Shipping</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Partners</a></li>
                                                    <li><a href="#">Bloggers</a></li>
                                                    <li><a href="#">Support</a></li>
                                                    <li><a href="#">Terms of Use</a></li>
                                                    <li><a href="#">Press</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog */}
                                    <div className="col-xxl-3 col-md-6 footer_col">
                                        <div className="footer_blog">
                                            <div className="footer_title">blog</div>
                                            <div className="footer_blog_container">
                                                {/* Blog Item */}
                                                <div className="footer_blog_item d-flex flex-row align-items-start justify-content-start">
                                                    <div className="footer_blog_image"><a href="blog.html"><img src="images/footer_blog_1.jpg" alt /></a></div>
                                                    <div className="footer_blog_content">
                                                        <div className="footer_blog_title"><a href="blog.html">what shoes to wear</a></div>
                                                        <div className="footer_blog_date">june 06, 2018</div>
                                                        <div className="footer_blog_link"><a href="blog.html">Read More</a></div>
                                                    </div>
                                                </div>
                                                {/* Blog Item */}
                                                <div className="footer_blog_item d-flex flex-row align-items-start justify-content-start">
                                                    <div className="footer_blog_image"><a href="blog.html"><img src="images/footer_blog_2.jpg" alt /></a></div>
                                                    <div className="footer_blog_content">
                                                        <div className="footer_blog_title"><a href="blog.html">trends this year</a></div>
                                                        <div className="footer_blog_date">june 06, 2018</div>
                                                        <div className="footer_blog_link"><a href="blog.html">Read More</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Contact */}
                                    <div className="col-xxl-3 col-md-6 footer_col">
                                        <div className="footer_contact">
                                            <div className="footer_title">contact</div>
                                            <div className="footer_contact_list">
                                                <ul>
                                                    <li className="d-flex flex-row align-items-start justify-content-start"><span>C.</span><div>Your Company Ltd</div></li>
                                                    <li className="d-flex flex-row align-items-start justify-content-start"><span>A.</span><div>1481 Creekside Lane  Avila Beach, CA 93424, P.O. BOX 68</div></li>
                                                    <li className="d-flex flex-row align-items-start justify-content-start"><span>T.</span><div>+53 345 7953 32453</div></li>
                                                    <li className="d-flex flex-row align-items-start justify-content-start"><span>E.</span><div>office@youremail.com</div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Social */}
                    <div className="footer_social">
                        <div className="section_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="footer_social_container d-flex flex-row align-items-center justify-content-between">
                                            {/* Instagram */}
                                            <a href="#">
                                                <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                                    <div className="footer_social_icon"><i className="fa fa-instagram" aria-hidden="true" /></div>
                                                    <div className="footer_social_title">instagram</div>
                                                </div>
                                            </a>
                                            {/* Google + */}
                                            <a href="#">
                                                <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                                    <div className="footer_social_icon"><i className="fa fa-google-plus" aria-hidden="true" /></div>
                                                    <div className="footer_social_title">google +</div>
                                                </div>
                                            </a>
                                            {/* Pinterest */}
                                            <a href="#">
                                                <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                                    <div className="footer_social_icon"><i className="fa fa-pinterest" aria-hidden="true" /></div>
                                                    <div className="footer_social_title">pinterest</div>
                                                </div>
                                            </a>
                                            {/* Facebook */}
                                            <a href="#">
                                                <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                                    <div className="footer_social_icon"><i className="fa fa-facebook" aria-hidden="true" /></div>
                                                    <div className="footer_social_title">facebook</div>
                                                </div>
                                            </a>
                                            {/* Twitter */}
                                            <a href="#">
                                                <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                                    <div className="footer_social_icon"><i className="fa fa-twitter" aria-hidden="true" /></div>
                                                    <div className="footer_social_title">twitter</div>
                                                </div>
                                            </a>
                                            {/* YouTube */}
                                            <a href="#">
                                                <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                                    <div className="footer_social_icon"><i className="fa fa-youtube" aria-hidden="true" /></div>
                                                    <div className="footer_social_title">youtube</div>
                                                </div>
                                            </a>
                                            {/* Tumblr */}
                                            <a href="#">
                                                <div className="footer_social_item d-flex flex-row align-items-center justify-content-start">
                                                    <div className="footer_social_icon"><i className="fa fa-tumblr-square" aria-hidden="true" /></div>
                                                    <div className="footer_social_title">tumblr</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Credits */}
                    <div className="credits">
                        <div className="section_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="credits_content d-flex flex-row align-items-center justify-content-end">
                                            <div className="credits_text">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer