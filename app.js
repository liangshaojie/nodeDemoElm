/**
 * Created by Administrator on 2017/10/28/028.
 */
import express from 'express';
import router from './routes/index.js';
//88888888888888888
var config = require('config-lite')(__dirname);
const app = express();

router(app);

app.listen(config.port,function(){
    console.log("成功监听在"+config.port+"端口")
})


