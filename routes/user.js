import express from "express";
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/user.js";
import userValidations from "../validations/user.js"
import { validate } from "express-validation";

const router = express.Router();

router.get('/', getUsers);
router.post('/', validate(userValidations.createOrUpdateUserValidator), createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', validate(userValidations.createOrUpdateUserValidator), updateUser);

export default router;
