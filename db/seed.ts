import seedGallery from "./seed-gallery";
import seedPictures from "./seed-pictures";
import seedGalleryCategory from "./seed-gallery-category";
import seedVideos from "./seed-videos";

// https://astro.build/db/seed
export default async function () {
	await seedGalleryCategory();
	await seedGallery();
	await seedPictures();
	await seedVideos();

	console.log("Seed done!");
}
