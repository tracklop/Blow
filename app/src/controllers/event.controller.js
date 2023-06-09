// NOTE - Imports
import session from "express-session";
import _category from "../services/category.service.js";
import _event from "../services/event.service.js";

// NOTE - Render form page
export const Form = (req, res) => {
	_category.select_categories((err, categories) => {
		res.render("pages/event", {
			categories: categories,
		});
	});
};

export const GetAllEvents = (req, res) => {
	_event.select_events((err, events) => {
		res.send(events);
	});
};

export const CreateEvent = (req, res) => {
	const {
		name,
		size,
		description,
		event_date,
		address,
		coordinates,
		category,
	} = req.body;

	const user_id = req.session.user_id;

	_event.insert_event(
		name,
		size,
		description,
		event_date,
		address,
		coordinates,
		user_id,
		category,
		(err, resp) => {
			res.redirect("back");
		}
	);
};

// NOTE - Exporting the functions
export default {
	Form,
	GetAllEvents,
	CreateEvent,
};
