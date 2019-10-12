import { combineReducers } from 'redux'



const defaultState = {
    login_payload: {
        access_token: localStorage.getItem('token'),
        type_member: localStorage.getItem('type_member')
    },
    use_data: null,
    table_sp_data: null,
    data_mau: null,
    data_nhanhieu: null,
    data_nhacungcap: null,
    data_size: null,
    data_loaisp: null,
    datakh: null,
    datadh: null,
    datanv: null,
    datadetail: null,
    refetch: false,
    sign_in_success: false,
    sign_in_fail: false,
    productlist: null,
    cart: JSON.parse(localStorage.getItem('allEntries'))
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_DATA_SUCCESS': {
            return { ...state, testArr: action.payload }
        }
        case 'LOGIN_SUCCESS': {
            localStorage.setItem('token', action.payload.response.token)
            localStorage.setItem('type_member', action.payload.response.type)
            return {
                ...state, login_payload: { access_token: action.payload.response.token, type_member: action.payload.response.type }
            }
        }
        case 'FETCH_USER_FULLFILL': {
            return { ...state, datakh: action.payload.response }
        }
        case 'FETCH_ADMIN_FULLFILL': {
            return { ...state, datanv: action.payload.response.datanv }
        }
        case 'LOGIN_ADMIN_SUCCESS': {
            localStorage.setItem('token', action.payload.response.token)
            localStorage.setItem('type_member', action.payload.response.type)
            return {
                ...state, login_payload: { access_token: action.payload.response.token, type_member: action.payload.response.type }
            }
        }
        case 'LOGIN_FAIL':
            {
                console.log('LOGIN_FAIL')
                return { ...state }
            }
        case 'LOGOUT':
            {
                localStorage.removeItem('token')
                localStorage.removeItem('type_member')
                return {
                    ...state, login_payload: {
                        access_token: '',
                        type_member: ''
                    }
                }
            }
        case 'FETCH_SP_DATA_SUCCESS':
            {
                return {
                    ...state, table_sp_data: action.payload,
                    refetch: false
                }
            }
        case 'FETCH_ALL_DATA_SUCCESS':
            {
                return {
                    ...state,
                    data_mau: action.payload.datamau,
                    data_nhanhieu: action.payload.datanhanhieu,
                    data_nhacungcap: action.payload.datanhacungcap,
                    data_size: action.payload.datasize,
                    data_loaisp: action.payload.dataloaisp,
                    refetch: false
                }
            }
        case 'ADD_PRODUCT_SUCCESS':
            {
                if (action.payload.status === 200) { return { ...state, refetch: action.payload.response.refetch } }
                else { return { ...state, refetch: false } }
            }
        case 'DELETE_PRODUCT_SUCCESS':
            {
                if (action.payload.status === 200) { return { ...state, refetch: action.payload.response.refetch } }
                else { return { ...state, refetch: false } }
            }
        case 'UPDATE_PRODUCT_SUCCESS':
            {
                if (action.payload.status === 200) { return { ...state, refetch: action.payload.response.refetch } }
                else { return { ...state, refetch: false } }
            }
        case 'SIGN_IN_SUCCESS':
            {
                if (action.payload.status === 200) { return { ...state, sign_in_success: action.payload.response.sign_in_success } }
                else { return { ...state, sign_in_success: false } }
            }
        case 'CLOSE_MODAL':
            {
                return { ...state, sign_in_fail: false, sign_in_success: false }
            }
        case 'FETCH_ALL_PRODUCTS_SUCCESS':
            {
                return { ...state, productlist: action.payload.response.result }
            }
        case 'PROCEED_CART_SUCCESS':
            {
                this.props.history.push('/')
                localStorage.removeItem('allEntries')
                localStorage.removeItem('entry')
                return { ...state }
            }
        case 'FETCH_DONHANG_SUCCESS':
            {
                return {
                    ...state, datadh: action.payload.response.datadh
                }
            }
        case 'CONFIRM_DONHANG_SUCCESS':
            {
                if (action.payload.status === 200) { return { ...state, refetch: action.payload.response.refetch } }
                else { return { ...state, refetch: false } }
            }
        case 'FETCH_DETAIL_DH_SUCCESS':
            {
                return { ...state, datadetail: action.payload.response.datadetail }
            }
        // case DELETE_PRODUCT:
        //     {
        //         return state
        //     }
        // case EDIT_PRODUCT:
        //     {
        //         return state
        //     }
        default:
            return state;
    }
}

const rootReducers = combineReducers({ rootReducer });

export default rootReducers
