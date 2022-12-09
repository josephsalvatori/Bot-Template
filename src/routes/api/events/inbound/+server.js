import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {

	let data = await request.json();
	let returnObj = {
		data: data,
		errors: []
	};

	console.log(returnObj);

	/**
	 * Write stuff below this
	 */

	/**
	 * Write stuff above this
	 */
	return json({ "challenge": data.challenge });
};
