import { Router } from 'express';
import activityRoutes from '@routes/activityRoutes';
import mountainRoutes from '@routes/mountainRoutes';
import ascentRoutes from '@routes/ascentRoutes';

const router: Router = Router();

router.use('/activities', activityRoutes);
router.use('/mountains', mountainRoutes);
router.use('/ascents', ascentRoutes);

export default router;
