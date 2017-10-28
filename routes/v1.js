'use strict';
import express from 'express'
const router = express.Router();

router.get('/cities', function(req, res, next){
    res.send("哈哈哈哈")
});

export default router