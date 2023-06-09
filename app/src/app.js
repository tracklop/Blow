// NOTE - Imports
import path from "path";
import express from "express";
import session from "express-session";
import cors from "cors";
import "dotenv/config";

import authRouter from "./routes/auth.routes.js";
import homeRouter from "./routes/home.routes.js";
import eventRouter from "./routes/event.routes.js";

const app = express();

// NOTE - Middleware
app.use(cors());

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 3600000 },
	})
);

app.use((req, res, next) => {
	req.session.user_id = 1;
	res.locals.user_id = req.session.user_id;
	next();
});

app.set("views", path.join(new URL(".", import.meta.url).pathname, "views"));
app.set("view engine", "ejs");
app.use(
	express.static(path.join(new URL(".", import.meta.url).pathname, "public"))
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRouter, homeRouter, eventRouter);

app.use((req, res, next) => {
	res.status(404);

	if (req.accepts("html")) {
		res.render("pages/404", { url: req.url });
		return;
	}

	if (req.accepts("json")) {
		res.json({ error: "Not found" });
		return;
	}

	res.type("txt").send("Not found");
});

// NOTE - Start server
app.listen(3000, "0.0.0.0", () => {
	console.log("server started !");
});
