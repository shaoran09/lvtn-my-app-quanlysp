import React, { Component } from 'react'
import Navbartop from './Navbartop';
import Navbarleft from './Navbarleft';
import Homebanner from './Homebanner';
import './css/cart.css';
import './css/cart_responsive.css';
import Cartitemlist from './cartitemlist';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { proceed_Cart, fetch_User } from './redux/action';

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ship_tax: 20000,
            datakh: null
        }
    }

    static getDerivedStateFromProps(props,state)
    {
        if(props.datakh !== state.datakh)
        {
            return{...state , datakh:props.datakh}
        }
        else{
            return{...state}
        }
    }

    componentDidMount(){
        if(this.state.datakh===null || this.props.datakh===null)
        {
            let payload={
                token: localStorage.getItem('token'),
                type_member: localStorage.getItem('type_member'),
                account: localStorage.getItem('account'),
            }
            this.props.fetch_UserDispatch(payload)
        }
    }

    _clearCart = (e) => {
        e.preventDefault();
        localStorage.removeItem('allEntries')
        localStorage.removeItem('entry')
        this.props.history.push('/')
    }

    _totalCart = () => {
        var total_cart = 0;
        if (JSON.parse(localStorage.getItem('allEntries')) !== null) {
            for (var i = 0; i < JSON.parse(localStorage.getItem('allEntries')).length; i++) {
                total_cart += (JSON.parse(localStorage.getItem('allEntries'))[i].GiaBan * JSON.parse(localStorage.getItem('allEntries'))[i].soluong)
            }
        }
        return (total_cart+this.state.ship_tax).toLocaleString(undefined,{maximumFractionDigits:0})
    }

    _ProceedCart = (e) => {
        e.preventDefault()
        if(localStorage.getItem('type_member')==='khachhang' && localStorage.getItem('token')!==null)
        {
            let payload = {
                type_member : localStorage.getItem('type_member'),
                token : localStorage.getItem('token'),
                cart : localStorage.getItem('allEntries'),
                id_kh : this.state.datakh.datakh[0].ID_KH,
                diachi_kh : this.state.datakh.datakh[0].DiaChi
            }
            this.props.proceedCartDispatch(payload)
        }
        else
        {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <Navbartop />
                <Navbarleft />
                <div className="super_container">
                    <Homebanner />
                    {/* Cart */}
                    <div className="cart_section">
                        <div className="section_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="cart_container">
                                            {/* Cart Bar */}
                                            <div className="cart_bar">
                                                <ul className="cart_bar_list item_list d-flex flex-row align-items-center justify-content-start">
                                                    <li>Sản phẩm</li>
                                                    <li>Màu</li>
                                                    <li>Kích thước</li>
                                                    <li>Giá</li>
                                                    <li>Số lượng</li>
                                                    <li>Tổng</li>
                                                </ul>
                                            </div>
                                            {/* Cart Items */}
                                            <div className="cart_items">
                                                {
                                                    JSON.parse(localStorage.getItem('allEntries')) !== null ?
                                                        JSON.parse(localStorage.getItem('allEntries')).map((data, index) => {
                                                            return <Cartitemlist data={data} key={index} />
                                                        }) : null
                                                }
                                            </div>
                                            {/* Cart Buttons */}
                                            <div className="cart_buttons d-flex flex-row align-items-start justify-content-start">
                                                <div className="cart_buttons_inner ml-auto d-flex flex-row align-items-start justify-content-start flex-wrap">
                                                    <div className="button button_continue trans_200"><Link to='/'>continue shopping</Link></div>
                                                    <div className="button button_clear trans_200"><Link to='#' onClick={(e) => this._clearCart(e)}>clear cart</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section_container cart_extra_container">
                            <div className="container">
                                <div className="row">
                                    {/* Cart Total */}
                                    <div className="col-xxl-6">
                                        <div className="cart_extra cart_extra_2">
                                            <div className="cart_extra_content cart_extra_total">
                                                <div className="cart_extra_title">Cart Total</div>
                                                <ul className="cart_extra_total_list">
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div className="cart_extra_total_title">Subtotal</div>
                                                        <div className="cart_extra_total_value ml-auto">{this._totalCart().toLocaleString(undefined,{maximumFractionDigits:0})}</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div className="cart_extra_total_title">Shipping</div>
                                                        <div className="cart_extra_total_value ml-auto">{this.state.ship_tax.toLocaleString(undefined,{maximumFractionDigits:0})}</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div className="cart_extra_total_title">Total</div>
                                                        <div className="cart_extra_total_value ml-auto">{this._totalCart()}</div>
                                                    </li>
                                                </ul>
                                                <div className="checkout_button trans_200"><Link to='#' onClick={(e)=>this._ProceedCart(e)}>proceed to checkout</Link></div>
                                            </div>
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

function mapStateToProps(state)
{
    return{
        datakh: state.rootReducer.datakh
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        proceedCartDispatch : (payload) => dispatch(proceed_Cart(payload)),
        fetch_UserDispatch:    (payload)=>{dispatch(fetch_User(payload))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)