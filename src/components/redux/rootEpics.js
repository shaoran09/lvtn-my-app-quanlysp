import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
    login_Success, login_admin_Success, fetch_sp_data_Success, fetch_all_data_Success, add_Product_Success
    , delete_Product_Success,
    update_Product_Success,
    sign_In_Success,
    fetch_all_Products_Success,
    fetch_User_fullfill,
    proceed_Cart_Success,
    fetch_DonHang_Success,
    fetch_Admin_fullfill,
    confirm_DonHang_Success,
    fetch_Detail_DH_Success
} from './action';
import { mergeMap, map, catchError} from 'rxjs/operators'
import { of } from 'rxjs';



const URL_SERVER = 'http://localhost:4000'


// const fetchProductsDataEpic = action$ => action$.pipe(
//     ofType('FETCH_PRODUCTS_DATA'),
//     mergeMap(() => ajax.getJSON(URL_SERVER).pipe(
//         map(res => fetchProductsData_success(res)))))



const loginEpic = action$ => action$.pipe(
    ofType('LOGIN')
    , mergeMap((action) => ajax.post(`${URL_SERVER}/login?account=${action.payload.account}&password=${action.payload.password}`).pipe(
            map((res) => login_Success(res)),catchError(err=>of({type:'LOGIN_FAIL'}))
    )))


const fetchUserEpics = action$ => action$.pipe(
    ofType('FETCH_USER'),
    mergeMap((action) => ajax.post(`${URL_SERVER}/fetchuser`,action.payload,{'authorization':`Bearer ${action.payload.token}`}).pipe(
        map(res => fetch_User_fullfill(res)),catchError(err=>of({type:'FETCH_USER_FAIL'})))
    )
)

const fetchAdminEpics = action$ => action$.pipe(
    ofType('FETCH_ADMIN'),
    mergeMap((action) => ajax.post(`${URL_SERVER}/fetchadmin`,action.payload,{'authorization':`Bearer ${action.payload.token}`}).pipe(
        map(res => fetch_Admin_fullfill(res)),catchError(err=>of({type:'FETCH_ADMIN_FAIL'})))
    )
)

const loginadminEpic = action$ => action$.pipe(
    ofType('LOGIN_ADMIN'),
    mergeMap((action) => ajax.post(`${URL_SERVER}/loginadmin?account=${action.payload.account}&password=${action.payload.password}`).pipe(
        map(res => login_admin_Success(res)), catchError(err => of({ type: 'LOGIN_FAIL' })))))

const fetchSPDataEpics = action$ => action$.pipe(
    ofType('FETCH_SP_DATA'),
    mergeMap(() => ajax.getJSON(`${URL_SERVER}/sanpham`).pipe(
        map(res => fetch_sp_data_Success(res), catchError(err => of({ type: 'FETCH_SP_DATA_FAIL' })))
    )))

const fecthAllDataEpics = action$ => action$.pipe(
    ofType('FETCH_ALL_DATA'),
    mergeMap(() => ajax.getJSON(`${URL_SERVER}/getalldata`).pipe(
        map(res => fetch_all_data_Success(res), catchError(err => of({ type: 'FETCH_ALL_DATA_FAIL' })))
    )))

const addProductEpics = action$ => action$.pipe(
    ofType('ADD_PRODUCT'),
    mergeMap((action) => ajax.post(`${URL_SERVER}/addproduct`, action.payload).pipe(
        map(res => add_Product_Success(res), catchError(err => of({ type: 'ADD_PRODUCT_FAIL' })))
    )))

const deleteProductEpics = action$ => action$.pipe(
    ofType('DELETE_PRODUCT'),
    mergeMap((action) => ajax.post(`${URL_SERVER}/deleteproduct`, action.payload).pipe(
        map(res => delete_Product_Success(res), catchError(err => of({ type: 'DELETE_PRODUCT_FAIL' })))
    )))

const updateProductEpics = action$ => action$.pipe(
    ofType('UPDATE_PRODUCT'),
    mergeMap((action) => ajax.post(`${URL_SERVER}/updateproduct`, action.payload).pipe(
        map(res => update_Product_Success(res), catchError(err => of({ type: 'UPDATE_PRODUCT_FAIL' })))
    )))

const signInEpics = action$ => action$.pipe(
    ofType('SIGN_IN'),
    mergeMap((action) => ajax.post(`${URL_SERVER}/signin`, action.payload).pipe(
        map(res => sign_In_Success(res), catchError(err => of({ type: 'SIGN_IN_SUCCESS' })))
    )))

const fetchAllProducts = action$ => action$.pipe(
    ofType('FETCH_ALL_PRODUCTS'),
    mergeMap((action) => ajax.get(`${URL_SERVER}/getdanhfulldatasanpham`).pipe(
        map(res => fetch_all_Products_Success(res), catchError(err => of({ type: 'FETCH_ALL_PRODUCTS_FAIL' })))
    ))
)

const proceedCartProductsEpics = action$ => action$.pipe(
    ofType('PROCEED_CART'),
    mergeMap((action)=> ajax.post(`${URL_SERVER}/proceedcart`,action.payload).pipe(
        map(res => proceed_Cart_Success(res),catchError(err=>of({type:'PROCEED_CART_FAIL'})))
    ))
)

const fetchDonhangEpics = action$ => action$.pipe(
    ofType('FETCH_DONHANG'),
    mergeMap(()=>ajax.get(`${URL_SERVER}/fetchdonhang`).pipe(
        map(res=>fetch_DonHang_Success(res),catchError(err=>of({type:'FETCH_DONHANG_FAIL'})))
    ))
)

const confirmDHEpics = action$ => action$.pipe(
    ofType('CONFIRM_DONHANG'),
    mergeMap((action)=>ajax.post(`${URL_SERVER}/confirm`,action.payload).pipe(
        map(res=>confirm_DonHang_Success(res),catchError(err=>of({type:'CONFIRM_DONHANG_FAIL'})))
    ))
)

const fetchDetailDHEpics = action$ =>action$.pipe(
    ofType('FETCH_DETAIL_DH'),
    mergeMap((action)=>ajax.post(`${URL_SERVER}/fetchdetail`,action.payload).pipe(
        map(res=>fetch_Detail_DH_Success(res),catchError(err=>of({type:'FETCH_DETAIL_FAIL'})))
    ))
)

const rootEpics = combineEpics(
    loginEpic, loginadminEpic,
    fetchSPDataEpics,
    fecthAllDataEpics,
    addProductEpics,
    deleteProductEpics,
    updateProductEpics,
    signInEpics,
    fetchAllProducts,
    fetchUserEpics,
    proceedCartProductsEpics,
    fetchDonhangEpics,
    fetchAdminEpics,
    confirmDHEpics,
    fetchDetailDHEpics
);


export default rootEpics 