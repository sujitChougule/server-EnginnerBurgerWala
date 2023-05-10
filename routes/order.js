import express from 'express';
import {autherizedAdmin, isAuthenticated} from '../middlewares/auth.js';
import {getAdminOrders, placeOrder, prosessOrder,placeOrderOnline, paymentVerification} from '../controllers/order.js'
import {getMyOrder} from '../controllers/order.js'
import {getOrderDetails} from '../controllers/order.js'

const router =express.Router();

router.post("/createorder",isAuthenticated,placeOrder);
router.get("/getmyorders",isAuthenticated,getMyOrder);
router.get("/order/:id",isAuthenticated,getOrderDetails);
router.post("/createorderonline",isAuthenticated,placeOrderOnline);
router.post("/paymentverification",isAuthenticated,paymentVerification);
//for admin

router.get('/admin/orders',isAuthenticated,autherizedAdmin,getAdminOrders);
router.get('/admin/order/:id',isAuthenticated,autherizedAdmin,prosessOrder);
export default router;