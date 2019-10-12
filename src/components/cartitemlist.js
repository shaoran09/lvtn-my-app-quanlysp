import React, { Component } from 'react'

class Cartitemlist extends Component {

    render() {
        return (
            <div>
                <ul className="cart_items_list">
                    {/* Cart Item */}
                    <li className="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                        <div className="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                            <div><div className="product_image"><img width='120px' height='148px' src={`images/${this.props.data.HinhAnh}`} alt="hinhanh" /></div></div>
                            <div className="product_name">{this.props.data.Ten_SP}</div>
                        </div>
                        <div className="product_color text-lg-center product_text"><span>Màu: </span>{this.props.data.Ten_Mau}</div>
                        <div className="product_size text-lg-center product_text"><span>Kích Thước: </span>{this.props.data.Ten_Size}</div>
                        <div className="product_price text-lg-center product_text"><span>Giá: </span>{this.props.data.GiaBan.toLocaleString(undefined,{maximumFractionDigits:0})}</div>
                        <div className="product_quantity_container">
                            <div className="product_quantity ml-lg-auto mr-lg-auto text-center">
                                <span className="product_text product_num">{this.props.data.soluong}</span>
                                {/* <div className="qty_sub qty_button trans_200 text-center"><span>-</span></div>
                                <div className="qty_add qty_button trans_200 text-center"><span>+</span></div> */}
                            </div>
                        </div>
                        <div className="product_total text-lg-center product_text"><span>Total: </span>{(this.props.data.soluong*this.props.data.GiaBan).toLocaleString(undefined,{maximumFractionDigits:0})}</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Cartitemlist