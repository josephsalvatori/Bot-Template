import { error } from "@sveltejs/kit";

export const trailingSlash = "always";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch, params, request, url }) {

	return {};
}
