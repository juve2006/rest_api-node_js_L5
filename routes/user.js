import express from "express";
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/user.js";
import userValidations from "../middleware/user_validator.js"
import { validate } from "express-validation";
import { verifyToken } from "../middleware/auth.js"

const router = express.Router();

router.get('/', verifyToken, getUsers);
router.post('/', verifyToken, validate(userValidations.createOrUpdateUserValidator), createUser);
router.get('/:id',verifyToken, getUser);
router.delete('/:id',verifyToken, deleteUser);
router.patch('/:id',verifyToken, validate(userValidations.createOrUpdateUserValidator), updateUser);

export default router;
