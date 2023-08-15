const express = require('express');
const db = require('./config/dbinfo.js');
const router = express.Router();

// Get all the jokes
router.get('/jokes', (req,res) => {
    const sql = 'SELECT * FROM jokes';
    db.all(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

// Get one joke
router.get('/jokes/:id', (req,res) => {
    const sql = 'SELECT * FROM jokes WHERE id = ?';
    const values = [req.params.id];
    db.all(sql, values, (err, rows) => {
        if (err) throw err;
        res.send(rows[0]);
    });
});

// Get a random joke
router.get('/randomjokes', (req, res) => {
    const sql = 'SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1';
    db.all(sql, (err, rows) => {
        if (err) throw err;
        res.send(rows[0]);
    });
});

// Create a Joke
router.post('/jokes', (req, res) => {
    let joke = req.body;
    let sql = 'INSERT INTO jokes (question, answer, rating) VALUES (?, ?, ?)';
    let values = [joke.question, joke.answer, joke.rating];
    db.run(sql, values, (err) => {
        if (err) throw err;
        res.send("Joke has been added successfully...");
        
    });
});

// Update a joke
router.put('/jokes/:id', (req, res) => {
    let joke = req.body;
    let sql = 'UPDATE jokes SET question = ?, answer = ?, rating = ? WHERE id = ?';
    let values = [joke.question, joke.answer, joke.rating, req.params.id];
    db.run(sql, values, (err) => {
        if (err) throw err;
        res.send('Joke is updated successfully...');
    });
});

// Delete a joke
router.delete('/jokes/:id', (req, res) => {
    let sql = 'DELETE FROM jokes WHERE id = ?';
    let values = [req.params.id];
    db.run(sql, values, (err) => {
        if (err) throw err;
        res.send('Joke Deleted Successfully...');
    });
});

module.exports = router;
