import express from "express";
import { createReportController } from "../controllers/reportController.js";

const router = express.Router();

// Create report route
router.post("/create", createReportController);

export default router;
