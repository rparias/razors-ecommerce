{#if $storeUser.jwt}
	<a
		href="/"
		class="logout-btn"
		on:click={() => {
			logout();
			globalStore.toggleItem('sidebar', false);
		}}>logout</a
	>
{:else}
	<a
		href="/login"
		use:link
		class="logout-btn"
		on:click={() => {
			globalStore.toggleItem('sidebar', false);
		}}>login</a
	>
{/if}

<script>
	import { link } from 'svelte-routing';
	import { logout } from '../stores/storeUser';
	import storeUser from '../stores/storeUser';
	import globalStore from '../stores/globalStore';
</script>
