interface Product {
	id: number;
    carouselImages?: string[];
    mainImage: string;
    brand: string;
    name: string;
    price: number;
    detailImage?: string;
}

export type { Product };