// NOTE - Imports
import mysql from "mysql";

// SECTION[epic=.config.js] - Database connection

// NOTE - Creating a connection to the database
const conn = mysql.createConnection({
	host: process.env.BLOW_DB_HOST,
	port: process.env.BLOW_DB_PORT,
	user: process.env.BLOW_DB_USER,
	password: process.env.BLOW_DB_PASS,
	database: process.env.BLOW_DB_NAME,
});

// NOTE - Connecting to the database
conn.connect((err) => {
	if (err) throw err;
});

// NOTE - Exporting the connection to the database
export default conn;

// !SECTION
