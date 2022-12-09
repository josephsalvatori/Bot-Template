import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {

	let returnObj = {
		data: request,
		errors: []
	};

	/**
	 * Write stuff below this
	 */
	console.log(request);



	/**
	 * Write stuff above this
	 */
	return json(returnObj);
};
