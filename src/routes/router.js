import { Router } from "express";
import { createUser } from "../controllers/userControllers.js";
import { createTransaction, getUserTransactions, authorizeTransaction } from '../controllers/transactionControllers.js'
import { routerPrefix } from "../config/config.js";

const router = Router();



router.post(`${routerPrefix}users/create`, createUser);

router.post(`${routerPrefix}transactions`, createTransaction)

router.get(`${routerPrefix}transactions/users/:id`, getUserTransactions); 
router.get(`${routerPrefix}transactions/authorize/:id`, authorizeTransaction);

export default router;
