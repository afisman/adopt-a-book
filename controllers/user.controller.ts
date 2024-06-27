import express, { NextFunction, Request, Response } from 'express';
import { createUser, editUser, fetchAllUsers, fetchSingleUser } from '../services/user';

export const userController = express.Router();

userController.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await fetchAllUsers();
        res.json(users);
    } catch (error) {
        next(error)
    }
})

userController.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const user = await fetchSingleUser(id);
        res.json(user);
    } catch (error) {
        next(error);
    }
})

userController.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = await createUser(req.body);
        res.json(newUser);
    } catch (error) {
        next(error);
    }
})

userController.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const userToEdit = await editUser(id, req.body);
        res.json(userToEdit);
    } catch (error) {
        next(error);
    }
})

userController.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {

})