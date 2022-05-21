import bcrypt from "bcryptjs/dist/bcrypt.js";

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'jhon@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Ashadul Islam',
        email: 'ashadul@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users;