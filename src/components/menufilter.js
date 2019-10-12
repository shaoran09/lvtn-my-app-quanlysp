import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class Menufilter extends Component{
    render()
    {
        return (
            <div>
                 {/* Sorting & Filtering */}
                 <div className="products_bar">
                            <div className="section_container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="products_bar_content d-flex flex-column flex-xxl-row align-items-start align-items-xxl-center justify-content-start">
                                                <div className="product_categories">
                                                    <ul className="d-flex flex-row align-items-start justify-content-start flex-wrap">
                                                        <li className="active"><Link to="#">Tất cả</Link></li>
                                                        <li><Link to="#">Sản phẩm hot</Link></li>
                                                        <li><Link to="#">Sản phẩm mới</Link></li>
                                                        <li><Link to="#">Đang hạ giá</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="products_bar_side ml-xxl-auto d-flex flex-row align-items-center justify-content-start">
                                                    <div className="products_dropdown product_dropdown_sorting">
                                                        <div className="isotope_sorting_text"><span>Default Sorting</span><i className="fa fa-caret-down" aria-hidden="true" /></div>
                                                        <ul>
                                                            <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }">Default</li>
                                                            <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }">Price</li>
                                                            <li className="item_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }">Name</li>
                                                        </ul>
                                                    </div>
                                                    <div className="product_view d-flex flex-row align-items-center justify-content-start">
                                                        <div className="view_item active"><img src="images/view_1.png" alt /></div>
                                                        <div className="view_item"><img src="images/view_2.png" alt /></div>
                                                        <div className="view_item"><img src="images/view_3.png" alt /></div>
                                                    </div>
                                                    <div className="products_dropdown text-right product_dropdown_filter">
                                                        <div className="isotope_filter_text"><span>Filter</span><i className="fa fa-caret-down" aria-hidden="true" /></div>
                                                        <ul>
                                                            <li className="item_filter_btn" data-filter="*">All</li>
                                                            <li className="item_filter_btn" data-filter=".hot">Hot</li>
                                                            <li className="item_filter_btn" data-filter=".new">New</li>
                                                            <li className="item_filter_btn" data-filter=".sale">Sale</li>
                                                        </ul>
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

export default Menufilter