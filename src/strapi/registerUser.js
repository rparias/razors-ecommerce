import axios from 'axios';
import BASE_URL from './URL';

async function registerUser({ email, password, username }) {
	const response = await axios
		.post(`${BASE_URL}/auth/local/register`, { username, email, password })
		.catch((error) => console.error(error));

	if (response) {
		// setup user
	}

	return response;
}

export default registerUser;
