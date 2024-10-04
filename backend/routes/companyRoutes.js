import express from "express";
const router = express.Router();

import {registerCompany, updateCompany, getCompany, getCompanyById} from "../controllers/companyController.js"
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

router.post("/register",isAuthenticated, registerCompany);
router.get("/get",isAuthenticated, getCompany);
router.get("/get/:id",isAuthenticated, getCompanyById);
router.put("/update/:id", isAuthenticated, updateCompany);

export default router;