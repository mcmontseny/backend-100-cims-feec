import { Request, Response } from 'express';
import * as mountainService from '@services/mountainService';

export const getMountains = async (req: Request, res: Response): Promise<void> => {
    try {
        const mountains = await mountainService.getMountains();
        res.status(200).json(mountains);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving mountains', error });
    }
};
