import { Router } from 'express';
import * as mountainController from '@controllers/mountainController';

const router: Router = Router();

router.get('/', mountainController.getMountains);

export default router;
