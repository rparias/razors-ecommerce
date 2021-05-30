import axios from 'axios';
import BASE_URL from './URL';

async function submitOrder({ name, total, items, stripeTokenId, userToken }) {
	const response = await axios
		.post(
			`${BASE_URL}/orders`,
			{
				name,
				total,
				items,
				stripeTokenId
			},
			{
				headers: {
					Authorization: `Bearer ${userToken}`
				}
			}
		)
		.catch((error) => console.error(error));
	return response;
}

export default submitOrder;
