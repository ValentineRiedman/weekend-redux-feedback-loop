const express = require('express');
const router = express.Router();
const pool = require('./pool');

router.post('/', (req, res) => {
    let queryString = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)`;
    let values = [req.body.feelings, req.body.understanding, req.body.supported, req.body.comments];
    pool.query(queryString, values).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;