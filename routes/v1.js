'use strict';
import express from 'express'
const router = express.Router();

router.get('/cities', function(req, res, next){
    req.session.login = "1";
    req.session.username = "lisangshojei";
    res.send("哈哈哈哈")
});

export default router