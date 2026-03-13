import { db, GalleryCategory } from "astro:db";

export default async function () {
	await db.insert(GalleryCategory).values([
		{
			id: 1,
			headline: "Comunidad y Organizaciones Voluntarias",
		},
		{
			id: 2,
			headline: "Servicios Sociales Prioritarios",
		},
		{
			id: 3,
			headline: "Educación",
		},
	]);

	console.log("- Gallery categories seeded!");
}
