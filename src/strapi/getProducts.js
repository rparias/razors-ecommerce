import BASE_URL from './URL';

export default async () => {
	const response = await fetch(`${BASE_URL}/products`).catch((error) => {
		console.error(error);
	});

	const products = await response.json();

	if (products.error) {
		return null;
	}

	return products;
};
