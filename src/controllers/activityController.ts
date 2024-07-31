import { Request, Response } from 'express';
import * as activityService from '@services/activityService';

export const getActivities = async (req: Request, res: Response): Promise<void> => {
    try {
        const activities = await activityService.getActivities();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving activities', error });
    }
};
