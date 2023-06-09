// NOTE - Imports
import bcrypt from "bcrypt";
import session from "express-session";
import _user from "../services/user.service.js";

// NOTE - Render login page
export const AuthPage = (req, res) => {
	res.render("pages/auth");
};

// NOTE - Sign Up a user
export const SignUp = (req, res) => {
	const { last_name, first_name, email, password, age } = req.body;
	const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);

	bcrypt.hash(password, saltRounds, function (err, hash) {
		_user.insert_user(
			last_name,
			first_name,
			email,
			hash,
			age,
			null,
			(err, resp) => {
				res.redirect("back");
			}
		);
	});
};

// NOTE - Sign In a user
export const SignIn = (req, res) => {
	const { email, password } = req.body;

	_user.select_user_by_email(email, (err, resp) => {
		if (!resp.length) {
			return res.redirect("/");
		}

		let hash_password = resp[0]["password"];

		bcrypt.compare(password, hash_password, (err, result) => {
			if (!result) {
				return res.redirect("/");
			}

			req.session.user_id = resp[0]["user_id"];
			res.redirect("/home");
		});
	});
};

// NOTE - Log out user & destroy session
export const Logout = (req, res) => {
	if (req.session) {
		req.session.destroy((err) => {
			res.redirect("/");
		});
	}
};

// NOTE - Exporting the functions
export default {
	AuthPage,
	SignUp,
	SignIn,
	Logout,
};
