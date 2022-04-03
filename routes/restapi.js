var express = require('express');
var router = express.Router();

router.post('/auth/login', (req, res) => {
    res.send(200).end();
});

router.get('/all', (req, res) => {
    res.json({
        type: 'all',
        data: {

        },
    });
});

router.get('/todo', (req, res) => {
    res.json({
        type: 'all',
        data: {

        },
    });
});

router.get('/done', (req, res) => {
    res.json({
        type: 'all',
        data: {

        },
    });
});

router.post('/add', (req, res) => {
    res.send(200).end();
});

router.delete('/delete/:id', (req, res) => {
    res.send(200).end();
});

router.put('/update/:id/:status', (req, res) => {
    res.send(200).end();
});

module.exports = router;
