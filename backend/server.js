import express from "express";
import mysql from "mysql2";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ALXProject23",
    database: "test"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL!');
    }
});

app.get("/", (req, res) => {
    res.json("hello this is the backend");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM test.books";
    db.query(q, (err, data) => {
        if (err) {
            console.error('Error executing query:', err.message);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Server is listening on port 8800!");
});
