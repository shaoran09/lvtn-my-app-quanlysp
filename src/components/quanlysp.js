import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Nav, Navbar, Modal, Table, InputGroup, FormControl, Dropdown, DropdownButton, Form } from 'react-bootstrap'
import { fetch_sp_data, fetch_all_data, add_Product, delete_Product, update_Product } from './redux/action';
import { connect } from 'react-redux'



class QuanlySP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            editmodalshow: false,
            table_sp_data: null,
            table_sp_edit_data: null,
            data_mau: null,
            data_nhanhieu: null,
            data_nhacungcap: null,
            data_size: null,
            data_loaisp: null,
            payload_to_insert: {
                tensp: '',
                mau: '',
                nhanhieu: '',
                nhacungcap: '',
                size: '',
                loaisp: '',
                oldimg: '',
                fileimg: null,
            },
            mau: '',
            nhanhieu: '',
            nhacungcap: '',
            size: '',
            loaisp: '',
            fileimg: '',
            refetch: false,
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.table_sp_data !== state.table_sp_data || props.data_mau !== state.data_mau || props.data_nhanhieu !== state.data_nhanhieu
            || props.data_nhacungcap !== state.data_nhacungcap || props.data_loaisp !== state.data_loaisp || props.refetch !== state.refetch
        ) {
            return {
                ...state,
                table_sp_data: props.table_sp_data,
                data_mau: props.data_mau,
                data_nhanhieu: props.data_nhanhieu,
                data_nhacungcap: props.data_nhacungcap,
                data_size: props.data_size,
                data_loaisp: props.data_loaisp,
                refetch: props.refetch
            }
        }
        else {
            return { ...state, refetch: false }
        }
    }

    componentDidMount() {
        this.props.fetch_sp_dataDispatch();
        this.props.fetch_all_dataDispatch();
        console.log('did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.refetch !== this.state.refetch) {
            this.props.fetch_sp_dataDispatch();
            this.props.fetch_all_dataDispatch();
            console.log('did update')
        }
    }

    handleSelectNhanhieu = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state, nhanhieu: this.state.data_nhanhieu[number - 1].Ten_NH, payload_to_insert: {
                ...this.state.payload_to_insert, nhanhieu: number
            }
        });
    }

    handleSelectNhanhieuEdit = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state, table_sp_edit_data: {
                ...this.state.table_sp_edit_data,
                nhanhieuID_NH: number,
                ten_nh: this.state.data_nhanhieu[number - 1].Ten_NH

            }
        });
    }

    handleSelectLoaiSP = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state, loaisp: this.state.data_loaisp[number - 1].Ten_Loai, payload_to_insert: {
                ...this.state.payload_to_insert, loaisp: number
            }
        });
    }

    handleSelectLoaiSPEdit = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state, table_sp_edit_data: {
                ...this.state.table_sp_edit_data,
                loaispID_Loai: number,
                ten_loai: this.state.data_loaisp[number - 1].Ten_Loai
            }
        });
    }


    handleSelectMau = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state, mau: this.state.data_mau[number - 1].Ten_Mau, payload_to_insert: {
                ...this.state.payload_to_insert, mau: number
            }
        });
    }

    handleSelectMauEdit = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state, table_sp_edit_data: {
                ...this.state.table_sp_edit_data,
                mauID_Mau: number,
                ten_mau: this.state.data_mau[number - 1].Ten_Mau
            }
        });
    }

    handleSelectSize = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state, size: this.state.data_size[number - 1].Ten_Size, payload_to_insert: {
                ...this.state.payload_to_insert, size: number
            }
        });
    }

    handleSelectSizeEdit = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state, table_sp_edit_data: {
                ...this.state.table_sp_edit_data,
                SizeID_Size: number,
                ten_size: this.state.data_size[number - 1].Ten_Size
            }
        });
    }

    handleSelectNhacungcap = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state, nhacungcap: this.state.data_nhacungcap[number - 1].Ten_NCC,
            payload_to_insert: {
                ...this.state.payload_to_insert, nhacungcap: number
            }
        });
    }

    handleSelectNhacungcapEdit = (event) => {
        var number = Number(event) + 1;
        return this.setState({
            ...this.state,
            table_sp_edit_data: {
                ...this.state.table_sp_edit_data,
                nhacungcapID_NCC: number,
                ten_ncc: this.state.data_nhacungcap[number - 1].Ten_NCC
            },
            payload_to_update: {
                ...this.state.payload_to_update,
                nhacungcap: number
            }
        });
    }


    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.readAsDataURL(file)
        reader.onloadend = (e) => {
            this.setState({
                fileimg: file, payload_to_insert: {
                    ...this.state.payload_to_insert,
                    fileimg: file
                }
            });
            console.log(e)
            document.getElementById("cover").setAttribute('src', e.target.result)
        }

    }

    handleImageChangeEdit(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.readAsDataURL(file)
        reader.onloadend = (e) => {
            this.setState({
                fileimg: file,
            });
            document.getElementById("cover").setAttribute('src', e.target.result)
        }
    }

    handleTenSP = (event) => {
        this.setState({
            ...this.state, payload_to_insert: {
                ...this.state.payload_to_insert,
                tensp: event.target.value
            }
        })
    }

    handleTenSPEdit = (event) => {
        this.setState({
            ...this.state, table_sp_edit_data: {
                ...this.state.table_sp_edit_data,
                Ten_SP: event.target.value,
            }
        })
    }

    addProduct = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("tensp", this.state.payload_to_insert.tensp)
        data.append("nhanhieu", this.state.payload_to_insert.nhanhieu)
        data.append("loaisp", this.state.payload_to_insert.loaisp)
        data.append("mau", this.state.payload_to_insert.mau)
        data.append("size", this.state.payload_to_insert.size)
        data.append("nhacungcap", this.state.payload_to_insert.nhacungcap)
        data.append("image", this.state.fileimg)
        this.props.add_Product(data)
        this.setState({ ...this.state, modalshow: !this.state.modalshow })
    }

    deleteProduct = (event, data) => {
        event.preventDefault();
        this.props.delete_Product(data)
    }

    editProduct = (event, data) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            editmodalshow: !this.state.editmodalshow,
            table_sp_edit_data: data,
        })
    }

    doeditProduct = (event) => {
        event.preventDefault();
        console.log(this.state.table_sp_edit_data)
        if (this.state.table_sp_edit_data === null) {
            console.log(null)
        }
        else {
            console.log('khong null')
        }
        const data_update = new FormData()
        data_update.append("idsp", this.state.table_sp_edit_data.ID_SP)
        data_update.append("tensp", this.state.table_sp_edit_data.Ten_SP)
        data_update.append("nhanhieu", this.state.table_sp_edit_data.nhanhieuID_NH)
        data_update.append("loaisp", this.state.table_sp_edit_data.loaispID_Loai)
        data_update.append("mau", this.state.table_sp_edit_data.mauID_Mau)
        data_update.append("size", this.state.table_sp_edit_data.SizeID_Size)
        data_update.append("nhacungcap", this.state.table_sp_edit_data.nhacungcapID_NCC)
        data_update.append("oldimgname", this.state.table_sp_edit_data.HinhAnh)
        data_update.append("image", this.state.fileimg)
        this.props.update_ProductDispatch(data_update)
        this.setState({ ...this.state, editmodalshow: !this.state.editmodalshow })
    }



    render() {
        return (
            <div>
                {console.log(this.state)}
                {this.state.table_sp_edit_data === null ? null : console.log(this.state.table_sp_edit_data)}
                {(localStorage.getItem('token') === null && localStorage.getItem('type_member') !== 'nhanvien') ? this.props.history.push('/admin') :
                    <div>
                        <div className="super_container">
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
                                    <Navbar.Brand>Quản lý sản phẩm</Navbar.Brand>
                                </Navbar>
                                <Button variant="primary" onClick={() => this.setState({ modalshow: !this.state.modalshow })}>THÊM SẢN PHẨM</Button>
                            </div>
                            {/****************MODALSHOW EDIT_PRODUCT*****************/}
                            <Modal show={this.state.editmodalshow} onHide={() => this.setState({ editmodalshow: false })}>
                                <Modal.Header closeButton>
                                    SỬA SẢN PHẨM
                            </Modal.Header>
                                <Modal.Body>
                                    {/****************ID_SP*****************/}
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">ID_SP</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            readOnly
                                            value={this.state.table_sp_data === null ? null : (this.state.table_sp_edit_data === null ? null : this.state.table_sp_edit_data.ID_SP)}
                                            aria-label="ID_SP"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    {/****************TEN SP*****************/}
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Tên SP</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Tên Sản Phẩm"
                                            aria-label="Tên Sản Phẩm"
                                            aria-describedby="basic-addon1"
                                            onChange={(event) => this.handleTenSPEdit(event)}
                                            value={this.state.table_sp_data === null ? null : (this.state.table_sp_edit_data === null ? null : this.state.table_sp_edit_data.Ten_SP)}
                                            name='tensp'
                                        />
                                    </InputGroup>
                                    {/****************Nhan hieu*****************/}
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Nhãn hiệu</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            title="Chọn nhãn hiệu"
                                            id="input-group-dropdown-1"
                                            name='nhanhieu'
                                        >
                                            {this.state.data_nhanhieu === null ? console.log(0) : this.state.data_nhanhieu.map(
                                                (data, index) => {
                                                    return (
                                                        <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectNhanhieuEdit(event)}>{data.Ten_NH}</Dropdown.Item>
                                                    )
                                                }
                                            )}
                                        </DropdownButton>
                                        <FormControl aria-describedby="basic-addon1" value={this.state.table_sp_edit_data === null ? null : this.state.table_sp_edit_data.ten_nh} readOnly />
                                    </InputGroup>
                                    {/****************Loai SP*****************/}
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Loại</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            title="Chọn loại"
                                            id="input-group-dropdown-1"
                                        >
                                            {this.state.data_loaisp === null ? console.log(0) : this.state.data_loaisp.map(
                                                (data, index) => {
                                                    return (
                                                        <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectLoaiSPEdit(event)}>{data.Ten_Loai}</Dropdown.Item>
                                                    )
                                                }
                                            )}
                                        </DropdownButton>
                                        <FormControl aria-describedby="basic-addon1" value={this.state.table_sp_edit_data === null ? null : this.state.table_sp_edit_data.ten_loai} readOnly name='loaisp' />
                                    </InputGroup>
                                    {/****************MAU SP*****************/}
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Màu</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            title="Chọn loại"
                                            id="input-group-dropdown-1"
                                        >
                                            {this.state.data_mau === null ? console.log(0) : this.state.data_mau.map(
                                                (data, index) => {
                                                    return (
                                                        <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectMauEdit(event)}>{data.Ten_Mau}</Dropdown.Item>
                                                    )
                                                }
                                            )}
                                        </DropdownButton>
                                        <FormControl aria-describedby="basic-addon1" value={this.state.table_sp_edit_data === null ? null : this.state.table_sp_edit_data.ten_mau} readOnly name='mau' />
                                    </InputGroup>
                                    {/****************SIZE SP*****************/}
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">SIZE</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            title="Chọn loại"
                                            id="input-group-dropdown-1"
                                        >
                                            {this.state.data_size === null ? console.log(0) : this.state.data_size.map(
                                                (data, index) => {
                                                    return (
                                                        <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectSizeEdit(event)}>{data.Ten_Size}</Dropdown.Item>
                                                    )
                                                }
                                            )}
                                        </DropdownButton>
                                        <FormControl aria-describedby="basic-addon1" value={this.state.table_sp_edit_data === null ? null : this.state.table_sp_edit_data.ten_size} readOnly name='size' />
                                    </InputGroup>
                                    {/****************NCC SP*****************/}
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Nhà cung cấp</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <DropdownButton
                                            as={InputGroup.Prepend}
                                            variant="outline-secondary"
                                            title="Chọn loại"
                                            id="input-group-dropdown-1"
                                        >
                                            {this.state.data_nhacungcap === null ? console.log(0) : this.state.data_nhacungcap.map(
                                                (data, index) => {
                                                    return (
                                                        <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectNhacungcapEdit(event)}>{data.Ten_NCC}</Dropdown.Item>
                                                    )
                                                }
                                            )}
                                        </DropdownButton>
                                        <FormControl aria-describedby="basic-addon1" value={this.state.table_sp_edit_data === null ? null : this.state.table_sp_edit_data.ten_ncc} readOnly name='nhacungcap' />
                                    </InputGroup>

                                    {/****************Hinh anh*****************/}
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Hình ảnh</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <img height='100px' width='100px' alt='hinhanh' src={`
                                ${this.state.table_sp_edit_data === null ? null : './images/' + this.state.table_sp_edit_data.HinhAnh}                               
                                `}></img>
                                        <img height='100px' width='100px' id="cover" alt='hinhanhpreview' src=""></img>
                                        <FormControl type="file" name='image' accept="image/x-png,image/jpeg" onChange={(e) => this.handleImageChangeEdit(e)}></FormControl>

                                    </InputGroup>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => this.setState({ editmodalshow: false })}>
                                        ĐÓNG
                                </Button>
                                    <Button variant="primary" onClick={(event) => this.doeditProduct(event)}>
                                        SỬA
                                </Button>
                                </Modal.Footer>
                            </Modal>

                            {/***************************************************************MODALSHOW ADD_PRODUCT*************************************************************************/}

                            <Modal show={this.state.modalshow} onHide={() => this.setState({ modalshow: false })}>
                                <Form action="http://localhost:4000/addproduct" method="POST" encType="multipart/form-data">
                                    <Modal.Header closeButton>
                                        <Modal.Title>THÊM SẢN PHẨM</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {/****************ID_SP*****************/}
                                        <InputGroup className="mb-3" size="sm">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">ID_SP</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                readOnly
                                                value={this.state.table_sp_data === null ? console.log(1) : this.state.table_sp_data.length + 1}
                                                aria-label="ID_SP"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>

                                        {/****************TEN SP*****************/}
                                        <InputGroup className="mb-3" size="sm">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Tên SP</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                placeholder="Tên Sản Phẩm"
                                                aria-label="Tên Sản Phẩm"
                                                aria-describedby="basic-addon1"
                                                onChange={(event) => this.handleTenSP(event)}
                                                name='tensp'
                                            />
                                        </InputGroup>
                                        {/****************Nhan hieu*****************/}
                                        <InputGroup className="mb-3" size="sm">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Nhãn hiệu</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <DropdownButton
                                                as={InputGroup.Prepend}
                                                variant="outline-secondary"
                                                title="Chọn nhãn hiệu"
                                                id="input-group-dropdown-1"
                                                name='nhanhieu'
                                            >
                                                {this.state.data_nhanhieu === null ? console.log(0) : this.state.data_nhanhieu.map(
                                                    (data, index) => {
                                                        return (
                                                            <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectNhanhieu(event)}>{data.Ten_NH}</Dropdown.Item>
                                                        )
                                                    }
                                                )}
                                            </DropdownButton>
                                            <FormControl aria-describedby="basic-addon1" value={this.state.nhanhieu} readOnly />
                                        </InputGroup>
                                        {/****************Loai SP*****************/}
                                        <InputGroup className="mb-3" size="sm">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Loại</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <DropdownButton
                                                as={InputGroup.Prepend}
                                                variant="outline-secondary"
                                                title="Chọn loại"
                                                id="input-group-dropdown-1"
                                            >
                                                {this.state.data_loaisp === null ? console.log(0) : this.state.data_loaisp.map(
                                                    (data, index) => {
                                                        return (
                                                            <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectLoaiSP(event)}>{data.Ten_Loai}</Dropdown.Item>
                                                        )
                                                    }
                                                )}
                                            </DropdownButton>
                                            <FormControl aria-describedby="basic-addon1" value={this.state.loaisp} readOnly name='loaisp' />
                                        </InputGroup>
                                        {/****************MAU SP*****************/}
                                        <InputGroup className="mb-3" size="sm">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Màu</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <DropdownButton
                                                as={InputGroup.Prepend}
                                                variant="outline-secondary"
                                                title="Chọn loại"
                                                id="input-group-dropdown-1"
                                            >
                                                {this.state.data_mau === null ? console.log(0) : this.state.data_mau.map(
                                                    (data, index) => {
                                                        return (
                                                            <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectMau(event)}>{data.Ten_Mau}</Dropdown.Item>
                                                        )
                                                    }
                                                )}
                                            </DropdownButton>
                                            <FormControl aria-describedby="basic-addon1" value={this.state.mau} readOnly name='mau' />
                                        </InputGroup>
                                        {/****************SIZE SP*****************/}
                                        <InputGroup className="mb-3" size="sm">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">SIZE</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <DropdownButton
                                                as={InputGroup.Prepend}
                                                variant="outline-secondary"
                                                title="Chọn loại"
                                                id="input-group-dropdown-1"
                                            >
                                                {this.state.data_size === null ? console.log(0) : this.state.data_size.map(
                                                    (data, index) => {
                                                        return (
                                                            <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectSize(event)}>{data.Ten_Size}</Dropdown.Item>
                                                        )
                                                    }
                                                )}
                                            </DropdownButton>
                                            <FormControl aria-describedby="basic-addon1" value={this.state.size} readOnly name='size' />
                                        </InputGroup>
                                        {/****************NCC SP*****************/}
                                        <InputGroup className="mb-3" size="sm">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Nhà cung cấp</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <DropdownButton
                                                as={InputGroup.Prepend}
                                                variant="outline-secondary"
                                                title="Chọn loại"
                                                id="input-group-dropdown-1"
                                            >
                                                {this.state.data_nhacungcap === null ? console.log(0) : this.state.data_nhacungcap.map(
                                                    (data, index) => {
                                                        return (
                                                            <Dropdown.Item eventKey={index} key={index} onSelect={(event) => this.handleSelectNhacungcap(event)}>{data.Ten_NCC}</Dropdown.Item>
                                                        )
                                                    }
                                                )}
                                            </DropdownButton>
                                            <FormControl aria-describedby="basic-addon1" value={this.state.nhacungcap} readOnly name='nhacungcap' />
                                        </InputGroup>

                                        {/****************Hinh anh*****************/}
                                        <InputGroup className="mb-3" size="sm">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">Hình ảnh</InputGroup.Text>
                                            </InputGroup.Prepend>

                                            <FormControl type="file" name='image' accept="image/x-png,image/jpeg" onChange={(e) => this.handleImageChange(e)}></FormControl>
                                            <img height='100px' width='100px' id="cover" alt='hinhanhpreview' src=""></img>
                                        </InputGroup>
                                    </Modal.Body>
                                    <Modal.Footer>

                                        {/****************Footer*****************/}
                                        <Button variant="secondary" onClick={() => this.setState({ modalshow: false })}>
                                            ĐÓNG
                                </Button>
                                        <Button variant="primary" onClick={(event) => this.addProduct(event)}>
                                            THÊM
                                </Button>
                                    </Modal.Footer>
                                </Form>
                            </Modal>




                            {/***********************TABLE************************/}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID_SP</th>
                                        <th>TEN_SP</th>
                                        <th>HINH_ANH</th>
                                        <th>NHANHIEU</th>
                                        <th>LOAISP</th>
                                        <th>MAU</th>
                                        <th>SIZE</th>
                                        <th>NHA_CUNG_CAP</th>
                                        <th>SỬA</th>
                                        <th>XOÁ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.table_sp_data === null ? console.log(0) :
                                        this.state.table_sp_data.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th>{data.ID_SP}</th>
                                                    <th>{data.Ten_SP}</th>
                                                    <th><img height='100px' width='100px' alt='hinhanh' src={`./images/${data.HinhAnh}`}></img></th>
                                                    <th>{data.ten_nh}</th>
                                                    <th>{data.ten_loai}</th>
                                                    <th>{data.ten_mau}</th>
                                                    <th>{data.ten_size}</th>
                                                    <th>{data.ten_ncc}</th>
                                                    <th><Button variant='info' onClick={(event) => this.editProduct(event, data)}>SỬA</Button></th>
                                                    <th><Button variant='danger' onClick={(event) => this.deleteProduct(event, data)}>XOÁ</Button></th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                }
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        table_sp_data: state.rootReducer.table_sp_data,
        data_mau: state.rootReducer.data_mau,
        data_nhanhieu: state.rootReducer.data_nhanhieu,
        data_nhacungcap: state.rootReducer.data_nhacungcap,
        data_size: state.rootReducer.data_size,
        data_loaisp: state.rootReducer.data_loaisp,
        refetch: state.rootReducer.refetch
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetch_all_dataDispatch: () => dispatch(fetch_all_data()),
        fetch_sp_dataDispatch: () => dispatch(fetch_sp_data()),
        add_Product: (payload) => dispatch(add_Product(payload)),
        delete_Product: (payload) => dispatch(delete_Product(payload)),
        update_ProductDispatch: (payload) => dispatch(update_Product(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanlySP)