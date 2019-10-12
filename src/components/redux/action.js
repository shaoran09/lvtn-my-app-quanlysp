
export function login(payload) {
    return {
        type: 'LOGIN',
        payload: payload
    }
}

export function login_Success(payload) {
    return {
        type: 'LOGIN_SUCCESS',
        payload: payload
    }
}

export function login_admin(payload) {
    return {
        type: 'LOGIN_ADMIN',
        payload: payload
    }
}

export function login_admin_Success(payload) {
    return {
        type: 'LOGIN_ADMIN_SUCCESS',
        payload: payload
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}

export function fetch_User(payload) {
    return {
        type: 'FETCH_USER',
        payload: payload
    }
}

export function fetch_User_fullfill(payload) {
    return {
        type: 'FETCH_USER_FULLFILL',
        payload: payload
    }
}

export function fetch_sp_data() {
    return {
        type: 'FETCH_SP_DATA'
    }
}

export function fetch_sp_data_Success(payload) {
    return {
        type: 'FETCH_SP_DATA_SUCCESS',
        payload: payload
    }
}

export function fetch_all_data() {
    return {
        type: 'FETCH_ALL_DATA'
    }
}

export function fetch_all_data_Success(payload) {
    return {
        type: 'FETCH_ALL_DATA_SUCCESS',
        payload: payload
    }
}

export function fetch_all_Products() {
    return {
        type: 'FETCH_ALL_PRODUCTS'
    }
}

export function fetch_all_Products_Success(payload) {
    return {
        type: 'FETCH_ALL_PRODUCTS_SUCCESS',
        payload: payload
    }
}

export function fetch_Admin(payload) {
    return {
        type: 'FETCH_ADMIN',
        payload: payload
    }
}

export function fetch_Admin_fullfill(payload) {
    return {
        type: 'FETCH_ADMIN_FULLFILL',
        payload: payload
    }
}

export function add_Product(payload) {
    return {
        type: 'ADD_PRODUCT',
        payload: payload
    }
}

export function add_Product_Success(payload) {
    return {
        type: 'ADD_PRODUCT_SUCCESS',
        payload: payload
    }
}


export function delete_Product(payload) {
    return {
        type: 'DELETE_PRODUCT',
        payload: payload
    }
}

export function delete_Product_Success(payload) {
    return {
        type: 'DELETE_PRODUCT_SUCCESS',
        payload: payload
    }
}

export function update_Product(payload) {
    return {
        type: 'UPDATE_PRODUCT',
        payload: payload
    }
}

export function update_Product_Success(payload) {
    return {
        type: 'UPDATE_PRODUCT_SUCCESS',
        payload: payload
    }
}

export function sign_In(payload) {
    return {
        type: 'SIGN_IN',
        payload: payload
    }
}

export function sign_In_Success(payload) {
    return {
        type: 'SIGN_IN_SUCCESS',
        payload: payload
    }
}

export function close_modal() {
    return {
        type: 'CLOSE_MODAL'
    }
}

export function proceed_Cart(payload) {
    return {
        type: 'PROCEED_CART',
        payload: payload
    }
}

export function proceed_Cart_Success(payload) {
    return {
        type: 'PROCEED_CART_SUCCESS',
        payload: payload
    }
}


export function fetch_DonHang() {
    return {
        type: 'FETCH_DONHANG'
    }
}

export function fetch_DonHang_Success(payload) {
    return {
        type: 'FETCH_DONHANG_SUCCESS',
        payload: payload
    }
}

export function confirm_DonHang(payload) {
    return {
        type: 'CONFIRM_DONHANG',
        payload: payload
    }
}

export function confirm_DonHang_Success(payload) {
    return {
        type: 'CONFIRM_DONHANG_SUCCESS',
        payload: payload
    }
}

export function fetch_Detail_DH(payload) {
    return {
        type: 'FETCH_DETAIL_DH',
        payload: payload
    }
}

export function fetch_Detail_DH_Success(payload) {
    return {
        type: 'FETCH_DETAIL_DH_SUCCESS',
        payload: payload
    }
}