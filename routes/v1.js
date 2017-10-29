'use strict';
import express from 'express'
import CityHandle from '../controller/v1/cities'
import Captchas from '../controller/v1/captchas'
import User from '../controller/v2/user'
import SearchPlace from '../controller/v1/search'
const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.post('/captchas', Captchas.getCaptchas);
router.get('/user', User.getInfo);
router.get('/cities/:id', CityHandle.getCityById);
router.get('/pois', SearchPlace.search);


export default router