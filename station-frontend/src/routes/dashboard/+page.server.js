import { redirect } from "@sveltejs/kit";
import { DOMAIN } from "$env/static/private";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const user = cookies.get("station");

  if (!user) throw redirect(302, `/login/github`);

  return;
}
