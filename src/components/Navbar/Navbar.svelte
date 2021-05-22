<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 992}
	<BigNavbar />
{:else}
	<SmallNavbar />
{/if}

<script>
	import SmallNavbar from './SmallNavbar.svelte';
	import BigNavbar from './BigNavbar.svelte';
	import globalStore from '../../stores/globalStore';

	let screenWidth;

	$: closeSidebarIfIsOnBigScreen(screenWidth);

	function closeSidebarIfIsOnBigScreen(screenWidth) {
		if (screenWidth > 992) {
			globalStore.toggleItem('sidebar', false);
		}
	}
</script>
