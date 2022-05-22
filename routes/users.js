import express from "express";
import { v4 as uuid } from 'uuid'; // autoid lib


const router = express.Router();

let users = [];


router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    const userId = uuid();
    const userWithId = {...user, id: userId}; // add id for users
    users.push(userWithId);
    res.send(`User ${user.name} added to DB`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const userGet = users.find((user) => user.id === id);
    res.send (userGet);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send (`User with id:${id} deleted from DB`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, surname, email } = req.body;
    let user = users.find((user) => user.id === id);

    if (name) {
        user.name = name;
    }
    if (surname) {
        user.surname = surname;
    }
    if (email) {
        user.email = email;
    }
    console.log(`name has been updated to ${name}.surname has been updated to ${surname}.email has been updated to ${email}`);
});

export default router;
