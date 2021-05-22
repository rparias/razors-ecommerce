<nav class="navbar">
	<div class="nav-container">
		<div class="nav-center">
			<ul class="nav-links">
				{#each links as navLink}
					<li><a href={navLink.url}>{navLink.text}</a></li>
				{/each}
			</ul>
			<a href="/" use:link>
				<img src="/assets/images/logo.svg" class="logo" alt="razors logo" />
			</a>
			<div class="nav-aside">
				<CartButton />
			</div>
		</div>
	</div>
</nav>

<script>
	import CartButton from '../Cart/CartButton.svelte';
	import { link } from 'svelte-routing';
	import links from '../../constants/links';
</script>
