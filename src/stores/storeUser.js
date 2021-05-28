import { writable } from 'svelte/store';

const storeUser = writable(getStorageUser());

function getStorageUser() {
	return localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user'))
		: { username: null, jwt: null };
}

export function setStorageUser(user) {
	localStorage.setItem('user', JSON.stringify(user));
}

export function setUser(user) {
	storeUser.set(user);
}

export function logout() {
	localStorage.clear();
	storeUser.set({ username: null, jwt: null });
}

export default storeUser;
