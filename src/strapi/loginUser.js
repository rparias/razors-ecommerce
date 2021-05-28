import axios from 'axios';
import BASE_URL from './URL';

async function loginUser({ email, password }) {
	const response = await axios
		.post(`${BASE_URL}/auth/local`, { identifier: email, password })
		.catch((error) => {
			console.error(error);
		});

	if (response) {
		// setup user
	}

	return response;
}

export default loginUser;
