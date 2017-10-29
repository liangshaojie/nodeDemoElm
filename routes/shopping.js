'use strict';

import express from 'express';
import Shop from '../controller/shopping/shop'
import Food from '../controller/shopping/food'

const router = express.Router();
router.get('/restaurants', Shop.getRestaurants);
router.get('/restaurant/:restaurant_id', Shop.getRestaurantDetail);
router.get('/v2/menu', Food.getMenu);






export default router