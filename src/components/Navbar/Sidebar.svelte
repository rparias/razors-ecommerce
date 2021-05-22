<div class="sidebar-container">
	<div class="sidebar">
		<div class="sidebar-header">
			<button class="btn-close"><i class="fas fa-window-close" /></button>
		</div>
		<img src="/assets/images/logo.svg" class="logo sidebar-logo" alt="razors logo" />
		<ul class="sidebar-links">
			{#each links as sideLink}
				<li>
					<a
						href={sideLink.url}
						use:link
						on:click={() => {
							console.log('sidebar closed');
						}}>{sideLink.text}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<script>
	import { link } from 'svelte-routing';
	import links from '../../constants/links';
</script>
