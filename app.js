/**
 * Created by Administrator on 2017/10/28/028.
 */
import express from 'express';
import router from './routes/index.js';
import db from './mongodb/db.js';
//88888888888888888
var config = require('config-lite')(__dirname);
import cookieParser from 'cookie-parser'
import session from 'express-session';
import connectMongo from 'connect-mongo';
import history from 'connect-history-api-fallback';
import Statistic from './middlewares/statistic'
const app = express();

app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});
app.use(Statistic.apiRecord)
app.use(cookieParser());
const MongoStore = connectMongo(session);
app.use(session({
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: config.session.cookie,
    store: new MongoStore({
        url: config.url
    })
}))

router(app);
app.use(history());
app.use(express.static('./public'));
app.listen(config.port,function(){
    console.log("成功监听在"+config.port+"端口")
})


