// NOTE - Imports
import db from "../config/db.config.js";

// NOTE - Insert an event
export const insert_event = (
	name,
	size,
	description,
	event_date,
	address,
	coordinates,
	user_id,
	category_id,
	callback
) => {
	let query = `
	INSERT INTO events
	VALUES (default, ?, ?, ?, ?, ?, ?, ?, ?)`;

	db.query(
		query,
		[
			name,
			size,
			description,
			event_date,
			address,
			coordinates,
			user_id,
			category_id,
		],
		(err, resp, fields) => {
			callback(err, resp);
		}
	);
};

// NOTE - Select all events
export const select_events = (callback) => {
	let query = `
	SELECT
		events.id,
		events.name,
		events.size,
		events.description,
		events.event_date,
		events.address,
		events.coordinates,
		events.user_id,
		events.category_id
	FROM
		events`;

	db.query(query, (err, resp, fields) => {
		callback(err, resp);
	});
};

// NOTE - Exporting the functions
export default {
	insert_event,
	select_events,
};
