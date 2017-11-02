// 这是一个用node上传到七牛的dome
let qn = require('qn');
let path = require('path');
// 本地文件路径
let filePaths = ['./public/img/a.png','./public/img/15f769c66bd16.png','./public/img/15f769d432317.png','./public/img/15f769ed3fa18.png','./public/img/15f769fbf8d19.png'];

let client = qn.create({
    accessKey: 'BMiO8IgBzUng93WrzipfmYVmfUCE0A7lGQbyx8AE',
    secretKey: 'vO7mnjKsx4QFL-MRZ3A6D8kzLCyblvGTqfFxcSWz',
    bucket: 'ihome',  // 在七牛云创建的空间名字
    origin: 'owq4sek7q.bkt.clouddn.com',    // 使用测试域名
});

let qiniuUpload = (filePaths) => {
    // map()方法返回新的 promise对象数组，
    // 若使用forEach()，报错：Cannot read property 'Symbol(Symbol.iterator)' of undefined
    // 因为没有返回值，运行到 return Promise.all(qiniuPromise) 时会返回 undefinded

    let qiniuPromise = filePaths.map(filePath => {

        // key 为上传到七牛云后自定义图片的名称
        return new Promise((resolve, reject) => {
            let fileName = path.win32.basename(filePath);
            client.uploadFile(filePath, {key: fileName}, function (err, result) {
                if(err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    });

    return Promise.all(qiniuPromise);

};

// 调用函数
qiniuUpload(filePaths).then(res => console.log(res));