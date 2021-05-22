<nav class="navbar">
	<div class="nav-center">
		<button
			class="btn-sidebar-toggle"
			on:click={() => {
				globalStore.toggleItem('sidebar', true);
			}}
		>
			<i class="fas fa-bars" />
		</button>
		<a href="/" use:link class="nav-logo"
			><img src="/assets/images/logo.svg" alt="razors logo" class="logo" /></a
		>
		<CartButton />
	</div>
</nav>

<script>
	import { link } from 'svelte-routing';
	import CartButton from '../Cart/CartButton.svelte';
	import globalStore from '../../stores/globalStore';
</script>
