import { v4 as uuid } from 'uuid'; // autoid lib

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuid();
    const userWithId = {...user, id: userId}; // add id for users
    users.push(userWithId);
    res.send(`User ${user.name} added to DB`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const userGet = users.find((user) => user.id === id);
    res.send (userGet);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send (`User with id:${id} deleted from DB`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, surname, email } = req.body;
    let user = users.find((user) => user.id === id);

    if (name) user.name = name;
    if (surname) user.surname = surname;
    if (email) user.email = email;
    res.send(`user ${name} has been updated`);
}