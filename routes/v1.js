'use strict';
import express from 'express'
import CityHandle from '../controller/v1/cities'
import BaseComponent from '../prototype/baseComponent'
import User from '../controller/v2/user'
// import Carts from '../controller/v1/carts'

const router = express.Router();
//获取城市接口
router.get('/cities', CityHandle.getCity);
router.get('/cities/:id', CityHandle.getCityById);
router.get('/user', User.getInfo);


export default router