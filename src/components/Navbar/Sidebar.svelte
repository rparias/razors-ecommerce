<div class="sidebar-container" transition:fly={{ x: -1000 }}>
	<div class="sidebar" transition:fade={{ delay: 400 }}>
		<div class="sidebar-header">
			<button
				class="btn-close"
				on:click={() => {
					globalStore.toggleItem('sidebar', false);
				}}><i class="fas fa-window-close" /></button
			>
		</div>
		<img src="/assets/images/logo.svg" class="logo sidebar-logo" alt="razors logo" />
		<ul class="sidebar-links">
			{#each links as sideLink}
				<li>
					<a
						href={sideLink.url}
						use:link
						on:click={() => {
							globalStore.toggleItem('sidebar', false);
						}}>{sideLink.text}</a
					>
				</li>
			{/each}
			<li><LoginLink /></li>
		</ul>
	</div>
</div>

<script>
	import { fly, fade } from 'svelte/transition';
	import { link } from 'svelte-routing';
	import links from '../../constants/links';
	import globalStore from '../../stores/globalStore';
	import LoginLink from '../../components/LoginLink.svelte';
</script>
