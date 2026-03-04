export interface GalleryCategory {
	id: number;
	headline: string;
}

export interface Gallery {
	id: number;
	categoryId: number;
	name: string;
	title: string;
	cover_src: string;
}

export interface GalleryInsert {
	id?: number;
	categoryId: number;
	name: string;
	title: string;
	cover_src: string;
}

export interface Picture {
	id: number;
	galleryId: number;
	path: string;
	altText: string;
}

export interface PictureInsert {
	id?: number;
	galleryId: number;
	path: string;
	altText: string;
}
