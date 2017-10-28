/**
 * Created by Administrator on 2017/10/28/028.
 */
import express from 'express';
import router from './routes/index.js';
const app = express();

router(app);


app.listen(1234,function(){
    console.log("成功监听在1234端口")
})


