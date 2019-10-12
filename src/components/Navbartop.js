import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Navbartop extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Header */}
                    <header className="header">
                        <div className="header_content d-flex flex-row align-items-center justify-content-start">
                            {/* Hamburger */}
                            <div className="hamburger menu_mm"><i className="fa fa-bars menu_mm" aria-hidden="true" /></div>
                            {/* Logo */}
                            <div className="header_logo">
                                <Link to='/'><div>a<span>star</span></div></Link>
                            </div>
                            {/* Navigation */}
                            <nav className="header_nav">
                                <ul className="d-flex flex-row align-items-center justify-content-start">
                                    <li><Link to='/'>Trang chủ</Link></li>
                                    <li><a href="#">Nữ</a></li>
                                    <li><a href="#">Nam</a></li>
                                    <li><a href="#">blog</a></li>
                                    <li><Link to='/login'>Đăng nhập</Link></li>
                                </ul>
                            </nav>
                            {/* Header Extra */}
                            <div className="header_extra ml-auto d-flex flex-row align-items-center justify-content-start">
                                {/* Language */}
                                <div className="info_languages has_children">
                                    <div className="language_flag"><img src="images/flag_1.svg" alt="flag" /></div>
                                    <div className="dropdown_text">english</div>
                                    <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true" /></div>
                                    {/* Language Dropdown Menu */}
                                    <ul>
                                        <li><a href="#">
                                            <div className="language_flag"><img src="images/flag_2.svg" alt="flag" /></div>
                                            <div className="dropdown_text">french</div>
                                        </a></li>
                                        <li><a href="#">
                                            <div className="language_flag"><img src="images/flag_3.svg" alt="flag" /></div>
                                            <div className="dropdown_text">japanese</div>
                                        </a></li>
                                        <li><a href="#">
                                            <div className="language_flag"><img src="images/flag_4.svg" alt="flag" /></div>
                                            <div className="dropdown_text">russian</div>
                                        </a></li>
                                        <li><a href="#">
                                            <div className="language_flag"><img src="images/flag_5.svg" alt="flag" /></div>
                                            <div className="dropdown_text">spanish</div>
                                        </a></li>
                                    </ul>
                                </div>
                                {/* Currency */}
                                <div className="info_currencies has_children">
                                    <div className="dropdown_text">usd</div>
                                    <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true" /></div>
                                    {/* Currencies Dropdown Menu */}
                                    <ul>
                                        <li><a href="#"><div className="dropdown_text">EUR</div></a></li>
                                        <li><a href="#"><div className="dropdown_text">YEN</div></a></li>
                                        <li><a href="#"><div className="dropdown_text">GBP</div></a></li>
                                        <li><a href="#"><div className="dropdown_text">CAD</div></a></li>
                                    </ul>
                                </div>
                                {/* Cart */}
                                <div className="cart d-flex flex-row align-items-center justify-content-start">
                                    <div className="cart_icon"><Link to='/cart'>
                                        <img src="images/bag.png" alt='bag' />
                                        <div className="cart_num">{localStorage.getItem('allEntries')!==null?JSON.parse(localStorage.getItem('allEntries')).length:0}</div>
                                    </Link></div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* Menu */}
                    <div className="menu d-flex flex-column align-items-start justify-content-start menu_mm trans_400">
                        <div className="menu_close_container"><div className="menu_close"><div /><div /></div></div>
                        <div className="menu_top d-flex flex-row align-items-center justify-content-start">
                            {/* Language */}
                            <div className="info_languages has_children">
                                <div className="language_flag"><img src="images/flag_1.svg" alt="flag" /></div>
                                <div className="dropdown_text">english</div>
                                <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true" /></div>
                                {/* Language Dropdown Menu */}
                                <ul>
                                    <li><a href="#">
                                        <div className="language_flag"><img src="images/flag_2.svg" alt="flag" /></div>
                                        <div className="dropdown_text">french</div>
                                    </a></li>
                                    <li><a href="#">
                                        <div className="language_flag"><img src="images/flag_3.svg" alt="flag" /></div>
                                        <div className="dropdown_text">japanese</div>
                                    </a></li>
                                    <li><a href="#">
                                        <div className="language_flag"><img src="images/flag_4.svg" alt="flag" /></div>
                                        <div className="dropdown_text">russian</div>
                                    </a></li>
                                    <li><a href="#">
                                        <div className="language_flag"><img src="images/flag_5.svg" alt="flag"/></div>
                                        <div className="dropdown_text">spanish</div>
                                    </a></li>
                                </ul>
                            </div>
                            {/* Currency */}
                            <div className="info_currencies has_children">
                                <div className="dropdown_text">usd</div>
                                <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true" /></div>
                                {/* Currencies Dropdown Menu */}
                                <ul>
                                    <li><a href="#"><div className="dropdown_text">EUR</div></a></li>
                                    <li><a href="#"><div className="dropdown_text">YEN</div></a></li>
                                    <li><a href="#"><div className="dropdown_text">GBP</div></a></li>
                                    <li><a href="#"><div className="dropdown_text">CAD</div></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu_search">
                            <form action="#" className="header_search_form menu_mm">
                                <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
                                <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                                    <i className="fa fa-search menu_mm" aria-hidden="true" />
                                </button>
                            </form>
                        </div>
                        <nav className="menu_nav">
                            <ul className="menu_mm">
                                <li className="menu_mm"><Link to='/'>Trang chủ</Link></li>
                                <li className="menu_mm"><Link to='/'>Nữ</Link></li>
                                <li className="menu_mm"><Link to='/'>Nam</Link></li>
                                <li className="menu_mm"><Link to='/'>blog</Link></li>
                                <li className="menu_mm"><Link to='/login'>Đăng nhập</Link></li>
                            </ul>
                        </nav>
                        <div className="menu_extra">
                            <div className="menu_social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbartop