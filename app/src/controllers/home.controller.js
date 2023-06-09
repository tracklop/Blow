// NOTE - Imports
import session from "express-session";
import _category from "../services/category.service.js";
import _event from "../services/event.service.js";

// NOTE - Render home page
export const Home = (req, res) => {
	_category.select_categories((err, categories) => {
		_event.select_events((err, events) => {
			res.render("pages/home", {
				categories: categories,
				events: events,
			});
		});
	});
};

// NOTE - Exporting the functions
export default {
	Home,
};
