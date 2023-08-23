const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin : true}));

app.get("/", async (request, response) => {
	return response.json("Hello World");
});

app.post("/authenticate", async (request, response) => {

	const { username } = request.body;

	const body = {
		username : username,
		secret : username,
		first_name : username
	};

	const headers = {
		headers : {
			"private-key" : "729b3475-83e8-448f-b586-5406c7ae96f5"
		}
	};

	const url = "https://api.chatengine.io/users/"; 

	try {
		
		const external_request = await axios.put(
			url,
			body,
			headers
		);

		return response.status(external_request.status).json(external_request.data);

	} catch (error) {
		return response.status(error.response.status).json(error.response.data);
	}
})

app.listen(3001);