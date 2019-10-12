import React, { Component } from 'react'
import './css/loginpage.css'
import { connect } from 'react-redux';
import { login_admin } from './redux/action';



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            login_payload: {
                access_token: '',
                type: ''
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.loginadmin_login_payload !== state.login_payload) {

            return { ...state, login_payload: props.loginadmin_login_payload }
        }
        else {
            return { ...state }
        }

    }

    accountInput = (event) => {
        this.setState({
            account: event.target.value
        })
    }

    passwordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    loginSubmit = () => {
        let payload = {
            account: this.state.account,
            password: this.state.password
        }
        localStorage.setItem('account',this.state.account)
        this.props.loginadminDispatch(payload)
    }

    render() {
        return (
            <div>
                {localStorage.getItem('type_member') === 'nhanvien' && localStorage.getItem('token') !== null ? this.props.history.push('/quanlysp') :
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                    <div className="card card-signin my-5">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Sign In</h5>
                                            <div className="form-label-group">
                                                <input type="text" id="inputAccount" className="form-control" placeholder="Account" onChange={(e) => this.accountInput(e)} required></input>
                                                <label htmlFor="inputAccount">Account</label>
                                            </div>

                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={(e) => this.passwordInput(e)} required></input>
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>

                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                                            </div>
                                            <button className="btn btn-lg btn-primary btn-block text-uppercase" onClick={() => this.loginSubmit()}>Log in</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginadmin_login_payload: state.rootReducer.login_payload
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginadminDispatch: (payload) => dispatch(login_admin(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)