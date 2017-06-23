import express from 'express';
import db from './mongodb/db.js';
import config from 'config-lite';
import router from './routes/index.js';

const app = express();

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
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

// app.listen(config.port);


router(app);

app.listen(3000,'127.0.0.1', function () {
    console.log('server is running at port 3000');
});
