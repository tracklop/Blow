// NOTE - Imports
import db from "../config/db.config.js";

// NOTE - Select all roles
export const select_categories = (callback) => {
	let query = `
	SELECT
		categories.id,
		categories.label
	FROM
		categories`;

	db.query(query, (err, resp, fields) => {
		callback(err, resp);
	});
};

// NOTE - Exporting the functions
export default {
	select_categories,
};
