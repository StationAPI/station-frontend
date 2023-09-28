import { DOMAIN } from "$env/static/private";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    console.log(`http://${DOMAIN}:3000/api/tag-aggregator/tag/list`);

    const tags = await fetch(
      `http://${DOMAIN}:3000/api/tag-aggregator/tag/list`
    );

    const res = await tags.json();

    const data = res.map((tag) => {
      return tag.name;
    });

    return {
      data,
    };
  } catch (err) {
    console.error(err);

    throw error(500, "There was an error loading tags.");
  }
}
