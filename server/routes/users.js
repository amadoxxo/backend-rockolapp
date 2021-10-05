const Users = require('../models/Users');
const express = require('express');

const app = express();

app.get('/users', (req, res) => {
    Users.find().then(users => {
        res.status(200).json({
            ok: true,
            users
        })
    }).catch(err => {
        res.status(500).json({
            ok: false,
            err
        })
    });
});


app.post('/register', async(req, res) => {

    if (await userExists(req.body.email)) {
        res.status(400).json({
            ok: false,
            error: {
                message: 'Email already exists'
            }
        })
    } else {
        const newUsers = new Users(req.body);

        newUsers.save().then(users => {
            res.status(200).json({
                ok: true,
                users
            })
        }).catch(err => {
            res.status(500).json({
                ok: false,
                err
            })
        });
    }
});

app.post('/login', (req, res) => {
    Users.findOne({ email: req.body.email, password: req.body.password })
        .then(user => {
            if (user) {
                res.status(200).json({
                    ok: true,
                    user
                })
            } else {
                res.status(400).json({
                    error: {
                        message: 'Incorrect email or password'
                    }
                })
            }
        }).catch(err => {
            res.status(500).json({
                err
            })
        });
});

const userExists = async(email) => {
    const user = await Users.findOne({ email: email.toLowerCase().trim() });

    if (user) {
        return true;
    } else {
        return false;
    }
}

module.exports = app;