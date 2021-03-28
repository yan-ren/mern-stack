import express from 'express';

import { get } from '../controller/gets.js';

const router = express.Router();
router.get('/', get);

export default router;