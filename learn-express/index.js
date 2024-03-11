const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
	.connect(
		"mongodb+srv://Irumva:IrumvaEmmanuel97@cluster0.ws2ver4.mongodb.net/",
		{ useNewUrlParser: true }
	)
	.then(() => {
		const app = express();
		app.use(express.json());
		app.use("/api", routes);

		app.listen(5000, () => {
			console.log("Server has started!");
		});
	})
	.catch((err) => console.error("Error connecting to database:", err));
