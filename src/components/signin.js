import React, { Component } from 'react'
import Navbarleft from './Navbarleft';
import Navbartop from './Navbartop';
import { Form, Button, Modal } from 'react-bootstrap';
import { sign_In, close_modal } from './redux/action';
import { connect } from 'react-redux'


class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payload_kh: {
                tenkh: null,
                email: null,
                diachi: null,
                phone: '',
                account: null,
                password: null,
            },
            sign_in_success: false,
            sign_in_fail: false
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log(props)
        console.log(state)
        if(props.sign_in_success!== state.sign_in_success)
        {
            return{...state,
            sign_in_success:props.sign_in_success
            }
        }
        else{
            return {...state }
        }
    }

    componentDidUpdate(prevProps,prevState)
    {
        console.log(prevProps)
        console.log(prevState)
    }

    handleCloseSuccess = () => {
        this.setState({ ...this.state, sign_in_success: false });
        this.props.closeModalDispatch()
    }

    handleShowSuccess = () => {
        this.setState({ ...this.state, sign_in_success: true });
        this.props.closeModalDispatch()
    }

    handleCloseFail = () => {
        this.setState({ ...this.state, sign_in_fail: false });
        this.props.closeModalDispatch()
    }

    handleShowFail = () => {
        this.setState({ ...this.state, sign_in_fail: true });
        this.props.closeModalDispatch()
    }

    _handleTenKH = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            payload_kh: {
                ...this.state.payload_kh,
                tenkh: e.target.value
            }
        })
    }

    _handlePhone = (e) => {
        e.preventDefault()
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({
                ...this.state,
                payload_kh: {
                    ...this.state.payload_kh,
                    phone: e.target.value
                }
            })
        }
    }



    _handleEmail = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            payload_kh: {
                ...this.state.payload_kh,
                email: e.target.value
            }
        })
    }

    _handleDiaChi = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            payload_kh: {
                ...this.state.payload_kh,
                diachi: e.target.value
            }
        })
    }

    _handleAccount = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            payload_kh: {
                ...this.state.payload_kh,
                account: e.target.value
            }
        })
    }

    _handlePassword = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            payload_kh: {
                ...this.state.payload_kh,
                password: e.target.value
            }
        })
    }

    _Signin = (e) => {
        e.preventDefault()
        let payload = this.state.payload_kh
        this.props.sign_InDispatch(payload)
    }

    _handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({ validated: true });
    }

    render() {
        return (
            localStorage.getItem('type_member') === 'khachhang' && localStorage.getItem('token') !== null ? this.props.history.push('/') :
                <div>
                    <Navbarleft />
                    <Navbartop />
                    <Modal show={this.state.sign_in_success} onHide={() => this.handleCloseSuccess()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>SIGN IN SUCCESS</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.handleCloseSuccess()}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.sign_in_fail} onHide={() => this.handleCloseFail()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>SIGN IN FAIL</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.handleCloseFail()}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card card-signin my-5">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Sign In</h5>

                                        <Form
                                            noValidate
                                            validated={this.state.validated}
                                            onSubmit={e => this._handleSubmit(e)}
                                        >
                                            <Form.Group md="4" controlId="validationTenKH">
                                                <Form.Label>Ten KH</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Tên KH"
                                                    onChange={(e) => this._handleTenKH(e)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group md="4" controlId="validationEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="email"
                                                    placeholder="Email"
                                                    onChange={(e) => this._handleEmail(e)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group md="4" controlId="validationDiaChi">
                                                <Form.Label>Địa chỉ</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Địa chỉ"
                                                    onChange={(e) => this._handleDiaChi(e)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group md="4" controlId="validationPhone">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Phone"
                                                    value={this.state.payload_kh.phone}
                                                    onChange={(e) => this._handlePhone(e)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group md="4" controlId="validationAccount">
                                                <Form.Label>Account</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Account"
                                                    onChange={(e) => this._handleAccount(e)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group md="4" controlId="validationPhone">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="password"
                                                    placeholder="Password"
                                                    onChange={(e) => this._handlePassword(e)}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>

                                            <Button type="submit" onClick={(e) => this._Signin(e)}>Submit form</Button>
                                        </Form>
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
        sign_in_success: state.rootReducer.sign_in_success
    }
}


function mapDispatchToProps(dispatch) {
    return {
        sign_InDispatch: (payload) => dispatch(sign_In(payload)),
        closeModalDispatch : () => dispatch(close_modal())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin)