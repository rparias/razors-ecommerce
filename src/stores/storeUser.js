import { writable } from 'svelte/store';

const storeUser = writable({ username: null, jwt: null });

export default storeUser;
