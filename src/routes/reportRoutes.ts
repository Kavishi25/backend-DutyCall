import express from 'express';
import { createReportController } from '../controllers/reportController';

const router = express.Router();

router.post('/create', createReportController);

export default router;
