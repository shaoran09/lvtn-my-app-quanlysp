import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Table, Button, Modal, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import { fetch_DonHang, fetch_Admin, confirm_DonHang, fetch_Detail_DH } from './redux/action';
import { connect } from 'react-redux'

class QuanlyDH extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datadh: null,
            datanv: null,
            datadetail: null,
            tinhtrang: 0,
            refetch: false,
            modalshow: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.datadh !== state.datadh || props.datanv !== state.datanv || props.refetch !== state.refetch || props.datadetail !== state.datadetail) {
            return { ...state, datadh: props.datadh, datanv: props.datanv, refetch: props.refetch, datadetail: props.datadetail }
        }
        else {
            return { ...state, refetch: false }
        }
    }

    componentDidMount() {
        this.props.fetchdonhangDispatch();
        let payload = {
            type_member: localStorage.getItem('type_member'),
            token: localStorage.getItem('token'),
            account: localStorage.getItem('account')
        }
        this.props.fetchAdminDispatch(payload);
    }


    _handleTinhTrang = (index) => {
        if (this.state.datadh[index].xacNhan === 1) {
            return 'Đang giao';
        }
        else if (this.state.datadh[index].xacNhan === 2) {
            return 'Đã giao';
        }
        else {
            return 'Chưa xác nhận'
        }
    }


    _confirmDH = (e, index) => {
        var ID_DH = index + 1;
        let ID_NV = null;
        console.log(ID_DH)
        console.log(this.state.datanv.length)
        for (var i = 0; i < this.state.datanv.length; i++) {
            if (this.state.datanv[i].account === localStorage.getItem('account')) {
                ID_NV = this.state.datanv[i].ID_NV
            }
        }
        let payload = {
            tinhtrang: this.state.tinhtrang,
            ID_NV: ID_NV,
            ID_DH: ID_DH,
        }
        this.props.confirmDHDispatch(payload)
    }

    _selectedConfirm = (eventKey, index) => {
        this.setState({ ...this.state, tinhtrang: eventKey })
    }

    _fetchDetail = (e, ID_DH) => {
        let payload = {
            ID_DH: ID_DH
        }
        this.props.fetchDetailDispatch(payload)
        this.setState({ ...this.state, modalshow: !this.state.modalshow })
    }

    _TongTien = (data) => {
        if (data === null) { return }
        else {
            var tongtien = 0;
            for (var i = 0; i < data.length; i++) {
                tongtien += (data[i].GiaBan * data[i].SoLuong)
            }
            return tongtien.toLocaleString(undefined,{maximumFractionDigits:0});
        }
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <div className="super_container">
                    <Modal
                        size="lg"
                        show={this.state.modalshow}>
                        <Modal.Header closeButton>
                            <Modal.Title>Chi tiết đơn hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>TÊN SẢN PHẨM</th>
                                        <th>HÌNH ẢNH</th>
                                        <th>LOẠI</th>
                                        <th>MÀU</th>
                                        <th>KÍCH CỠ</th>
                                        <th>GIÁ BÁN</th>
                                        <th>SỐ LƯỢNG</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {this.state.datadetail === null ? null : this.state.datadetail.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{data.Ten_SP}</th>
                                                <th><img height='120px' width='80px' src={`/images/${data.HinhAnh}`}></img></th>
                                                <th>{data.Ten_Loai}</th>
                                                <th>{data.Ten_Mau}</th>
                                                <th>{data.Ten_Size}</th>
                                                <th>{data.GiaBan.toLocaleString(undefined,{maximumFractionDigits:0})}</th>
                                                <th>{data.SoLuong}</th>
                                            </tr>
                                        )
                                    })}
                                </tbody>

                            </Table>
                            <tr>
                                <th>Tổng cộng: {this._TongTien(this.state.datadetail)}</th>
                            </tr>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => this.setState({ ...this.state, modalshow: false })}>
                                Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Logo */}
                        <div className="sidebar_logo">
                            <Link to='/administrator'><div>A<span>dmin</span></div></Link>
                        </div>
                        {/* Sidebar Navigation */}
                        <nav className="sidebar_nav">
                            <ul>
                                <li><Link to='/quanlysp'>DS Sản phẩm<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                                <li><Link to='#'>DS Thành viên<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                                <li><Link to='#'>DS Khách hàng<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                                <li><Link to='/quanlydh'>DS Đơn hàng<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                                <li><Link to='#'>DS Nhãn hiệu<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                                <li><Link to='#'>DS Loại<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                                <li><Link to='#'>DS Kích thước<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                                <li><Link to='#'>DS Nhà cung cấp<i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="container">
                        <Navbar bg="dark" expand="lg" >
                            <Navbar.Brand>Administrator</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" variant="light">
                                    <Nav.Link href='/quanlysp'>DS Sản phẩm</Nav.Link>
                                    <Nav.Link>DS Thành viên</Nav.Link>
                                    <Nav.Link>DS Đơn hàng</Nav.Link>
                                    <Nav.Link href='/quanlydh'>DS Hoá đơn</Nav.Link>
                                    <Nav.Link>DS Nhãn hiệu</Nav.Link>
                                    <Nav.Link>DS Loại</Nav.Link>
                                    <Nav.Link>DS Kích thước</Nav.Link>
                                    <Nav.Link>DS Nhà cung cấp</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Navbar bg="light">
                            <Navbar.Brand>Quản lý đơn hàng</Navbar.Brand>
                        </Navbar>

                        {/****************************************TABLE************************************************/}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID_DH</th>
                                    <th>NGÀY ĐẶT HÀNG</th>
                                    <th>ĐỊA CHỈ GIAO</th>
                                    <th>NHÂN VIÊN XÁC NHẬN</th>
                                    <th>KHÁCH HÀNG ĐẶT</th>
                                    <th>TÌNH TRẠNG</th>
                                    <th>CHI TIẾT</th>
                                    <th>XÁC NHẬN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.datadh === null ? null :
                                    this.state.datadh.map((data, index) => {
                                        return (
                                            <tr height='120px' key={index}>
                                                <th>{data.ID_DH}</th>
                                                <th>{data.NgayDatHang}</th>
                                                <th>{data.DiaChiGiaoHang}</th>
                                                <th>{data.nhanvienID_NV === null ? <li>Chưa có nhân viên xác nhận</li> : <li>{data.nhanvienID_NV}</li>}</th>
                                                <th>{data.khachhangID_KH}</th>
                                                <th >
                                                    <DropdownButton
                                                        as={InputGroup.Prepend}
                                                        variant="outline-secondary"
                                                        title={this._handleTinhTrang(index)}
                                                        id="input-group-dropdown-1"
                                                        name='tinhtrang'
                                                    >
                                                        <Dropdown.Item eventKey='1' onSelect={(eventKey) => this._selectedConfirm(eventKey, index)}>Đang giao</Dropdown.Item>
                                                        <Dropdown.Item eventKey='2' onSelect={(eventKey) => this._selectedConfirm(eventKey, index)}>Đã Giao</Dropdown.Item>
                                                    </DropdownButton>

                                                </th>
                                                <th><Button variant='info' onClick={(e) => this._fetchDetail(e, data.ID_DH)}>CHI TIẾT</Button></th>
                                                <th><Button variant='info' onClick={(e) => this._confirmDH(e, index)}>XÁC NHẬN</Button></th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        datadh: state.rootReducer.datadh,
        datanv: state.rootReducer.datanv,
        datadetail: state.rootReducer.datadetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchdonhangDispatch: () => dispatch(fetch_DonHang()),
        fetchAdminDispatch: (payload) => dispatch(fetch_Admin(payload)),
        confirmDHDispatch: (payload) => dispatch(confirm_DonHang(payload)),
        fetchDetailDispatch: (payload) => dispatch(fetch_Detail_DH(payload))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(QuanlyDH)