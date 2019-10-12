import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetch_all_Products } from './redux/action';


class Productlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productlist: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.productlist !== state.productlist) {
            return {
                ...state,
                productlist: props.productlist
            }
        }
        else {
            props.fetch_all_productsDispatch();
            return { ...state }
        }
    }

    _addToCart = (e, data) => {
        e.preventDefault()
        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if (existingEntries == null) existingEntries = [];
        localStorage.setItem("entry", JSON.stringify(data));
        var item = {
            ...data,
            soluong: 1
        }
        console.log(item)

        if (JSON.parse(localStorage.getItem("allEntries")) === null) {
            existingEntries.push(item);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        }
        else {
            var flag = false;
            for (var i = 0; i < JSON.parse(localStorage.getItem("allEntries")).length; i++) {
                if (JSON.parse(localStorage.getItem("allEntries"))[i].ID_SP === data.ID_SP) {
                    var soluongtang = JSON.parse(localStorage.getItem("allEntries"))[i].soluong + 1
                    let item_edited = {
                        ...JSON.parse(localStorage.getItem("allEntries"))[i],
                        soluong: soluongtang
                    }
                    existingEntries.splice(i, 1, item_edited)
                    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
                    flag = true;
                }
            }
            if (flag === false) {
                existingEntries.push(item);
                localStorage.setItem("allEntries", JSON.stringify(existingEntries));
                flag = true;
            }
        }


        // else if (JSON.parse(localStorage.getItem("allEntries"))[data.ID_SP].ID_SP === data.ID_SP || JSON.parse(localStorage.getItem("allEntries"))!==null) {
        //     var soluongtang = JSON.parse(localStorage.getItem("allEntries"))[data.ID_SP-1].soluong
        //     let item_edited = {
        //         ...JSON.parse(localStorage.getItem("allEntries"))[data.ID_SP - 1],
        //         soluong: soluongtang + 1
        //     }
        //     existingEntries.splice(data.ID_SP-1, 1, item_edited)
        //     localStorage.setItem("allEntries", JSON.stringify(existingEntries));
        // }

    }


    render() {
        return (
            <div>
                <div className="section_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="products_container grid">
                                    {/* Product */}

                                    {this.state.productlist === null ? null : this.state.productlist.map((data, index) => {
                                        return (

                                            <div className="product grid-item hot"  >
                                                <div className="product_inner" >
                                                    <div className="product_image">
                                                        <img height='235px' width='188px' alt='hinhanh' src={`images/${data.HinhAnh}`}></img>
                                                        <div className="product_tag">hot</div>
                                                    </div>
                                                    <div className="product_content text-center">
                                                        <div className="product_title"><Link to='#'>{data.Ten_SP}</Link></div>
                                                        <div className="product_price">{`${data.GiaBan}VND`} </div>
                                                        <div className="product_button ml-auto mr-auto trans_200"><Link to='#' onClick={(e) => this._addToCart(e, data)}>add to cart</Link></div>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productlist: state.rootReducer.productlist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetch_all_productsDispatch: () => dispatch(fetch_all_Products())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productlist)