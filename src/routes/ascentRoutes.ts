import { Router } from 'express';
import * as ascentController from '@controllers/ascentController';

const router: Router = Router();

router.get('/', ascentController.getAscents);

export default router;
