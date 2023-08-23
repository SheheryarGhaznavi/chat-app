const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin : true}));

app.get("/", async (request, response) => {
	return response.json("Hello World");
});

app.listen(3001);