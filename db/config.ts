import { defineDb, defineTable, column } from "astro:db";

const GalleryCategory = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		headline: column.text(),
	},
});

const Gallery = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		categoryId: column.number({ references: () => GalleryCategory.columns.id }),
		name: column.text(),
		title: column.text(),
		cover_src: column.text(),
	},
});

const Picture = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		galleryId: column.number({ references: () => Gallery.columns.id }),
		path: column.text(),
	},
});

const Video = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		galleryId: column.number({ references: () => Gallery.columns.id }),
		path: column.text(),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: {
		Video,
		Picture,
		Gallery,
		GalleryCategory,
	},
});
