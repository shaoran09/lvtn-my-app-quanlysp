const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const mime = require('mime');
const moment = require('moment')

const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
}); //Cross-Origin Resource Sharing open
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbshop'
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

function replace_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/images/')
    },
    filename: function (req, file, cb) {
        var tenkhongdau = replace_dau(req.body.tensp);
        cb(null, tenkhongdau.replace(/ /g, '') + '.' + mime.getExtension(file.mimetype))
    }
})

var upload = multer({ storage: storage }).single('image')

app.post('/addproduct', (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            return err;
        }
        else {
            var fileimg_name = req.file.filename
            var insert_query = `INSERT INTO sanpham (Ten_SP, nhanhieuID_NH, loaispID_Loai, mauID_Mau, SizeID_Size, nhacungcapID_NCC,HinhAnh)VALUES ('${req.body.tensp}',${req.body.nhanhieu} ,${req.body.loaisp}, ${req.body.mau}, ${req.body.size}, ${req.body.nhacungcap}, '${fileimg_name}')`
            connection.query(insert_query, (err, result) => {
                if (err) {
                    console.log(err, 'ADD FAIL')
                    res.status(500).send('ADD FAIL')
                    next(err);
                } else {
                    res.status(200).json({
                        refetch: true
                    })
                    console.log(req)
                    console.log('ADD SUCCESS')
                }
            })
        }
    })
})

app.post('/deleteproduct', (req, res, next) => {
    var delete_sql = `DELETE FROM sanpham WHERE sanpham.ID_SP =${req.body.ID_SP}`
    connection.query(delete_sql, (err, result) => {
        if (err) {
            console.log('DELETE FAIL')
            res.status(500).send('DELETE FAIL')
            next(err);
        }
        else {
            res.status(200).json({
                refetch: true
            })
            console.log('DELETE SUCCESS')
        }
    })
})

app.post('/updateproduct', (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            return err;
        }
        else {
            if(req.file===undefined)
            {
                var update_sql = `UPDATE sanpham SET Ten_SP='${req.body.tensp}',HinhAnh='${req.body.oldimgname}',nhanhieuID_NH=${req.body.nhanhieu},loaispID_Loai=${req.body.loaisp},mauID_Mau=${req.body.mau},SizeID_Size=${req.body.size},nhacungcapID_NCC=${req.body.nhacungcap} WHERE ID_SP=${req.body.idsp}`
                console.log('file img undefined')
                connection.query(update_sql,(err,result)=>{
                    if(err)
                    {
                        console.log('UPDATE FAIL')
                        return err
                    }
                    else{
                        res.status(200).json({
                            refetch: true
                        })
                        console.log('UPDATE SUCCESS WITHOUT IMAGE')
                    }
                })
            }else {
                var fileimg_name = req.file.filename
                console.log(fileimg_name)
                console.log(req.file)
                console.log(req.body)
                var update_sql = `UPDATE sanpham SET Ten_SP='${req.body.tensp}',HinhAnh='${fileimg_name}',nhanhieuID_NH=${req.body.nhanhieu},loaispID_Loai=${req.body.loaisp},mauID_Mau=${req.body.mau},SizeID_Size=${req.body.size},nhacungcapID_NCC=${req.body.nhacungcap} WHERE ID_SP=${req.body.idsp}`
                connection.query(update_sql,(err,result)=>{
                    if(err)
                    {
                        console.log('UPDATE FAIL')
                        return err
                    }
                    else{
                        res.status(200).json({
                            refetch: true
                        })
                        console.log('UPDATE SUCCESS WITH IMAGE')
                    }
                })
                console.log('file not null')
            }
        }
    })
})


app.post ('/signin',(req,res,next)=>{
    console.log(req)
    var insert_kh_sql = `INSERT INTO khachhang ( Ten_KH, DiaChi, Email, Phone, account, password) VALUES ('${req.body.tenkh}','${req.body.diachi}','${req.body.email}','${req.body.phone}','${req.body.account}','${req.body.password}')`
    connection.query(insert_kh_sql,(err,result)=>{
        if(err)
        {
            res.status(500).json({
                sign_in_fail:true
            })
            next(err)

        }
        else{
            res.status(200).json({
                sign_in_success:true
            })
        }
    })
})

app.get('/sanpham', (req, res, next) => {
    console.log('san pham')
    var query = 'SELECT ten_mau,ten_size,ten_loai,ten_nh,ten_ncc,ten_sp,sanpham.* from mau,size,nhanhieu,loaisp,sanpham,nhacungcap where sanpham.mauID_Mau=mau.ID_Mau AND sanpham.loaispID_Loai = loaisp.ID_Loai and sanpham.SizeID_Size = size.ID_Size and sanpham.nhacungcapID_NCC=nhacungcap.ID_NCC and sanpham.nhanhieuID_NH=nhanhieu.ID_NH '
    connection.query(query, (err, result) => {
        if (err) { return err; }
        else {
            res.json(result)
        }
    })
})



app.get('/getalldata', (req, res) => {
    var sql_mau = 'SELECT * from mau'
    var sql_nhanhieu = 'SELECT * from nhanhieu'
    var sql_nhacungcap = 'SELECT * from nhacungcap'
    var sql_size = 'SELECT * from size'
    var sql_loaisp = 'SELECT * from loaisp'
    connection.query(sql_mau, (err, result) => {
        if (err) { return err }
        else {
            datamau = result;
            connection.query(sql_nhanhieu, (err, result) => {
                if (err) { return err }
                else {
                    datanhanhieu = result;
                    connection.query(sql_nhacungcap, (err, result) => {
                        if (err) { return err }
                        else {
                            datanhacungcap = result
                            connection.query(sql_size, (err, result) => {
                                if (err) { return err }
                                else {
                                    datasize = result;
                                    connection.query(sql_loaisp, (err, result) => {
                                        if (err) { return err }
                                        else {
                                            dataloaisp = result
                                            res.json(
                                                {
                                                    datamau: datamau,
                                                    datanhanhieu: datanhanhieu,
                                                    datanhacungcap: datanhacungcap,
                                                    datasize: datasize,
                                                    dataloaisp: dataloaisp
                                                }
                                            )
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})


app.post('/login', (req, res, next) => {
    var data = JSON.parse(JSON.stringify(req.query))
    connection.query(`SELECT * FROM khachhang WHERE account='${data.account}' and password='${data.password}'`,
        (err, result) => {
            if (err) {
                return err;
            }
            else {
                if (JSON.stringify(result).length === 2) {
                    next(err);
                }
                else {
                    var token = jwt.sign(result[0].password,'khachhang')
                    res.json({
                        token: token,
                        type: 'khachhang'
                    })
                }
            }
        })
})

app.post('/fetchuser',verifyToken,(req,res,next) => {
    jwt.verify(req.body.token,'khachhang',(err,res1)=>{
        if(err){
            next(err)
            res1.sendStatus(403);
        }
       else{
            connection.query(`SELECT * FROM khachhang WHERE account='${req.body.account}'`,(err,result)=>{
                if(err){
                    next(err)
                }else{
                    res.json({
                        datakh: result
                    })
                }
            })
        }
     })

})

app.post('/fetchadmin',verifyToken,(req,res,next) => {
    jwt.verify(req.body.token,'nhanvien',(err,res1)=>{
        if(err){
            next(err)
            res1.sendStatus(403);
        }
       else{
            connection.query(`SELECT * FROM nhanvien`,(err,result)=>{
                if(err){
                    next(err)
                }else{
                    res.json({
                        datanv: result
                    })
                }
            })
        }
     })
})

app.get('/fetchdonhang',(req,res,next)=>{
    connection.query(`SELECT * FROM donhang`,(err,result)=>{
        if(err){
            next(err)
        }else{
            res.json({
                datadh:result
            })
        }
    })
})

app.post('/fetchdetail',(req,res,next)=>{
    console.log(req.body.ID_DH)
    connection.query(`SELECT sanpham.Ten_SP,sanpham.HinhAnh,loaisp.Ten_Loai,mau.Ten_Mau,size.Ten_Size,dongia.GiaBan,donhang_sanpham.SoLuong FROM donhang_sanpham,sanpham,mau,loaisp,size,dongia WHERE donhang_sanpham.donhangID_DH=${req.body.ID_DH} AND sanpham.ID_SP=donhang_sanpham.sanphamID_SP AND sanpham.mauID_Mau=mau.ID_Mau AND sanpham.SizeID_Size=size.ID_Size AND loaisp.ID_Loai=sanpham.loaispID_Loai AND dongia.sanphamID_SP=sanpham.ID_SP`,(err,result)=>{
        if(err){
            next(err)
        }
        else{
            res.json({
                datadetail : result
            })
        }
    })
})

app.post('/confirm',(req,res,next)=>{
    console.log(req)
    connection.query(`UPDATE donhang SET nhanvienID_NV=${req.body.ID_NV},xacNhan=${req.body.tinhtrang} WHERE ID_DH=${req.body.ID_DH}`,(err,result)=>{
        if(err){
            next(err)
        }
        else{
            console.log('CONFIRM SUCCESS')
            res.json({
                refetch:true
            })
        }
    })
})

app.post('/proceedcart',(req,res,next)=>{
    console.log('proceedcart')
    var date = new Date();
    var formattedDate = moment(date).format('YYYY-MM-DD');
    connection.query(`INSERT INTO donhang(NgayDatHang, DiaChiGiaoHang, khachhangID_KH, xacNhan) VALUES ('${formattedDate}','${req.body.diachi_kh}',${req.body.id_kh},0)`,(err,res)=>{
        if(err){
            next(err)
        }else{
            console.log(res)
            connection.query(`SELECT donhang.ID_DH FROM donhang WHERE donhang.ID_DH=${res.insertId}`,(err,res1)=>{
                if(err){
                    next(err)
                }else{
                   for(var i =0 ; i < JSON.parse(req.body.cart).length ; i++ )
                    {
                        var ID_SP = JSON.parse(req.body.cart)[i].ID_SP;
                        var soluong = JSON.parse(req.body.cart)[i].soluong;
                        console.log(ID_SP)
                        console.log(soluong)
                        connection.query(`INSERT INTO donhang_sanpham (donhangID_DH, sanphamID_SP, SoLuong) VALUES (${res.insertId} , ${ID_SP} , ${soluong})`,(err,res2)=>{
                            if(err){
                                next(err)
                            }
                            else{
                                console.log('PROCEED_SUCCESS')
                                console.log(res2)
                            }
                        })
                        
                    }
                }
            })
        }
    })
})


// app.get('/:administrator/:param', (req, res) => {
//     connection.query(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='${req.params.param}'`, (err, result) => {
//         if (err) {
//             return err;
//         }
//         else {
//             let columns = []
//             let data = []
//             for (var i = 0; i < result.length; i++) {
//                 columns.push(result[i].COLUMN_NAME)
//             }
//             connection.query(`SELECT * FROM ${req.params.param}`, (err, result) => {
//                 if (err) {
//                     return err;
//                 }
//                 else {
//                     for (var i = 0; i < result.length; i++) {
//                         data.push(result[i])
//                     }
//                     res.json({
//                         columns,
//                         data: data,
//                         type_table: `${req.params.param}`
//                     })
//                 }
//             })
//         }
//     })
// });

app.get('/getdanhfulldatasanpham',(req,res,next)=>{
    connection.query(`SELECT sanpham.ID_SP,dongia.Ngay,sanpham.Ten_SP,sanpham.HinhAnh,nhanhieu.Ten_NH ,loaisp.Ten_Loai,mau.Ten_Mau,size.Ten_Size,nhacungcap.Ten_NCC,dongia.GiaBan from sanpham INNER JOIN dongia on sanpham.ID_SP=dongia.sanphamID_SP INNER JOIN loaisp on loaisp.ID_Loai = dongia.sanphamID_SP INNER JOIN mau on mau.ID_Mau=sanpham.mauID_Mau INNER JOIN nhacungcap on nhacungcap.ID_NCC=sanpham.nhacungcapID_NCC INNER JOIN nhanhieu on nhanhieu.ID_NH = sanpham.nhanhieuID_NH INNER JOIN size on size.ID_Size = sanpham.SizeID_Size`
    ,(err,result)=>{
        if(err)
        {
            next(err)
        }
        else{
            res.json({result:result})
        }
    })

})


app.post('/loginadmin', (req, res, next) => {
    var data = JSON.parse(JSON.stringify(req.query))
    console.log(data)
    connection.query(`SELECT * FROM nhanvien WHERE account='${data.account}' and password='${data.password}'`,
        (err, result) => {
            if (err) {
                return err;
            }
            else {
                if (JSON.stringify(result).length === 2) {
                    next(err);
                }
                else {
                    var token = jwt.sign(result[0].password, 'nhanvien')
                    res.json({
                        token: token,
                        type: 'nhanvien'
                    })
                }
            }
        })
})



function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers.authorization;
    console.log(req.headers.authorization)
    //check if bearerHeader undefined
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        //get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.body.token = bearerToken;
        console.log(bearerToken)
        console.log(req.body.token)
        //Next middlewave
        next();
    } else {
        //forbidden
        res.sendStatus(403);
    }
}





app.listen(process.env.PORT || 4000);