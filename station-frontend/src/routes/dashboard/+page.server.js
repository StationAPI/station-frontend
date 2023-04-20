import { redirect } from "@sveltejs/kit";
import { DOMAIN } from "$env/static/private";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const user = await cookies.get("station");

  if (!user) throw redirect(307, `http://${DOMAIN}:3000/login/github`);

  return;
}
