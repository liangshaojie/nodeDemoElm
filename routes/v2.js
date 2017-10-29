'use strict';

import express from 'express';
import User from '../controller/v2/user'
import CityHandle from '../controller/v1/cities'
import Entry from '../controller/v2/entry'

const router = express.Router();

router.post('/login', User.login);
router.get('/pois/:geohash', CityHandle.pois);
router.get('/index_entry', Entry.getEntry);



export default router