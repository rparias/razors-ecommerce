<h1>welcome to checkout page</h1>

<script>
	import { onMount } from 'svelte';
	import { navigate } from 'svelte-routing';
	import storeUser from '../stores/storeUser';

	onMount(() => {
		if (!$storeUser.jwt) {
			navigate('/');
		}
	});
</script>
