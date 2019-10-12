import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navbarleft.css';
import { connect } from 'react-redux';
import { logout,fetch_User } from './redux/action'


class Navbarleft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar_login: null,
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.navbar_login_props !== state.navbar_login) {
            return { ...state
                , navbar_login: props.navbar_login_props
            }
        }
        else {
            return { ...state}
        }
    }

    // componentDidMount()
    // {
    //     if(localStorage.getItem('token')!==null && localStorage.getItem('type_member')!==null)
    //     {
    //         let payload = {
    //             access_token: localStorage.getItem('token'),
    //             type_name: localStorage.getItem('type_member')
    //         }
    //         this.props.fetchUserDispatch(payload)
    //     }
    // }


    logout() {
        this.props.logoutDispatch();
        this.props.history.push('/')
    }

    _totalCart = () => {
        var total_item = 0 ;
        var total_cart = 0;
        if (JSON.parse(localStorage.getItem('allEntries')) !== null) {
            for (var i = 0; i < JSON.parse(localStorage.getItem('allEntries')).length; i++) {
                total_item += (JSON.parse(localStorage.getItem('allEntries'))[i].GiaBan * JSON.parse(localStorage.getItem('allEntries'))[i].soluong)
            }
        }
        return total_item
    }

    

    render() {

        return (
            <div>
                {console.log(this.state)}
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Info */}
                    <div className="info">
                        <div className="info_content d-flex flex-row align-items-center justify-content-start">
                            {/* Language */}
                            <div className="info_languages has_children">
                                <div className="language_flag"><img src="images/flag_1.svg" alt="flag"/></div>
                                <div className="dropdown_text">english</div>
                                <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true" /></div>
                                {/* Language Dropdown Menu */}
                                <ul>
                                    <li>
                                        <div className="language_flag"><img src="images/flag_2.svg" alt="flag"/></div>
                                        <div className="dropdown_text">french</div>
                                    </li>
                                    <li>
                                        <div className="language_flag"><img src="images/flag_3.svg" alt="flag"/></div>
                                        <div className="dropdown_text">japanese</div>
                                    </li>
                                    <li>
                                        <div className="language_flag"><img src="images/flag_4.svg" alt="flag"/></div>
                                        <div className="dropdown_text">russian</div>
                                    </li>
                                    <li>
                                        <div className="language_flag"><img src="images/flag_5.svg" alt="flag"/></div>
                                        <div className="dropdown_text">spanish</div>
                                    </li>
                                </ul>
                            </div>
                            {/* Currency */}
                            <div className="info_currencies has_children">
                                <div className="dropdown_text">usd</div>
                                <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true" /></div>
                                {/* Currencies Dropdown Menu */}
                                <ul>
                                    <li><div className="dropdown_text">EUR</div></li>
                                    <li><div className="dropdown_text">YEN</div></li>
                                    <li><div className="dropdown_text">GBP</div></li>
                                    <li><div className="dropdown_text">CAD</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Logo */}
                    <div className="sidebar_logo">
                        <Link to='/'><div>a<span>star</span></div></Link>
                    </div>
                    {/* Sidebar Navigation */}
                    <nav className="sidebar_nav">
                        <ul>
                            <li><Link to='/'>Trang chủ<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                            <li><Link to='/woman'>Nữ<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                            <li><Link to='/man'>Nam<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                            <li><Link to='/blog'>blog<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                            {(localStorage.getItem('type_member')===null)?<li></li>:<li><Link to='/mypage'>Cá Nhân<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>}
                            {(localStorage.getItem('token') === null) ? <li><Link to='/login'>Đăng nhập<i className="fa fa-angle-right" aria-hidden="true" /></Link></li> :
                                <li><Link onClick={() => this.logout()}>Đăng xuất<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>}
                        </ul>
                    </nav>
                    {/* Search */}
                    <div className="search">
                        <form action="#" className="search_form" id="sidebar_search_form">
                            <input type="text" className="search_input" placeholder="Search" required="required" />
                            <button className="search_button"><i className="fa fa-search" aria-hidden="true" /></button>
                        </form>
                    </div>
                    {/* Cart */}
                    <div className="cart d-flex flex-row align-items-center justify-content-start">
                        <div className="cart_icon"><Link to='/cart'>
                            <img src="images/bag.png" />
                            <div className="cart_num"> {localStorage.getItem('allEntries')!==null?JSON.parse(localStorage.getItem('allEntries')).length:0} </div>
                        </Link></div>
                        <div className="cart_text">Túi</div>
                        <div className="cart_price">{this._totalCart()}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        navbar_login_props: state.rootReducer.login_payload,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logoutDispatch: () => dispatch(logout()),
        fetchUserDispatch : (payload) => dispatch(fetch_User(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbarleft)