//import thư viện
const express = require('express');
const mailer = require('nodemailer');
const app = express(); // tạo đối tượng sever

// tạo transporter
let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hunghhph44272@fpt.edu.vn',
        pass: 'xypd szvf neru mkwd'
    }
});

// Chuẩn bị thông tin
let mailOption = {
    from:'hunghhph44272@fpt.edu.vn',
    to:'hoanghung200603@gmail.com',
    subject: 'Test Email',
    text: 'HÊLÔ HOÀNG HUY HÙNG'
};

// Gửi mail
transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log('Thành Công: '+ info.messageId);
    }
});

// Khởi động server
app.listen(3004,()=>{
    console.log('SERVER đang chạy ở cổng 3004');
})