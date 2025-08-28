const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/cars.db')

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS cars (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            trade TEXT,
            model TEXT,
            year INTEGER DEFAULT 0,
            price REAL DEFAULT 0
        )      
    `)
})

module.exports = db