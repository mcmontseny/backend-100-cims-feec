import { Request, Response } from 'express';
import * as ascentService from '@services/ascentService';

export const getAscents = async (req: Request, res: Response): Promise<void> => {
    try {
        const activities = await ascentService.getAscents();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving ascents', error });
    }
};
