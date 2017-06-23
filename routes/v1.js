'use strict';
import express from 'express'
import CityHandle from '../controller/v1/cities'
import BaseComponent from '../prototype/baseComponent'
// import Carts from '../controller/v1/carts'

const router = express.Router();

router.get('/cities', CityHandle.getCity);


export default router