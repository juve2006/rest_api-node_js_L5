import { v4 as uuid } from 'uuid'; // autoid lib

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    try {
        const user = req.body;
        const userId = uuid();
        const userWithId = {...user, id: userId}; // add id for users
        users.push(userWithId);
        res.status(201).send(`User ${user.name}  ${user.surname} added to DB`);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const userGet = users.find((user) => user.id === id);
    if (userGet == null) {
        return res.status(404).send({ message: `Cannot find user with id ${id}`});
    }
    res.send (userGet);
}

export const deleteUser = (req, res) => {
    try {
        const { id } = req.params;
        users = users.filter((user) => user.id !== id);
        res.send (`User with id:${id} deleted from DB`);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const updateUser = (req, res) => {
   try {
       const { id } = req.params;
       const { name, surname, email } = req.body;
       let user = users.find((user) => user.id === id);

       if (name) user.name = name;
       if (surname) user.surname = surname;
       if (email) user.email = email;
       res.send(`user ${name} ${surname} has been updated`);
   } catch (err) {
       res.status(400).send({ message: err.message });
   }
}