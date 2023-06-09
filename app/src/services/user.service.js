// NOTE - Imports
import db from "../config/db.config.js";

// NOTE - Insert an user
export const insert_user = (
	last_name,
	first_name,
	email,
	password,
	age,
	public_ip,
	callback
) => {
	let query = `
	INSERT INTO users
	VALUES (default, ?, ?, ?, ?, ?, ?)`;

	db.query(
		query,
		[last_name, first_name, email, password, age, public_ip],
		(err, resp, fields) => {
			callback(err, resp);
		}
	);
};

// NOTE - Select a user
export const select_user_by_email = (email, callback) => {
	let query = `
	SELECT *
    FROM users
    WHERE users.email = ?`;

	db.query(query, [email], (err, resp, fields) => {
		callback(err, resp);
	});
};

// NOTE - Delete an user
export const delete_user = (user_id, callback) => {
	let query = `
	DELETE FROM users
    WHERE users.user_id = ?`;

	db.query(query, [user_id], (err, resp, fields) => {
		callback(err, resp);
	});
};

export default {
	insert_user,
	select_user_by_email,
	delete_user,
};
