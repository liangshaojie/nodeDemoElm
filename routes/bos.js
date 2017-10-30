'use strict';

import express from 'express';
import Order from '../controller/v1/order'
const router = express.Router();
router.get('/v2/users/:user_id/orders', Order.getOrders)



export default router