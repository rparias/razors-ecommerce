<div class="alert-container" in:fly={{ y: -200, duration: 1000 }} out:fade={{ duration: 0 }}>
	<div class="alert">
		<p>some dummy text</p>
		<button on:click={handleClose} class="alert-close"><i class="fas fa-window-close" /></button>
	</div>
</div>

<script>
	import { fly, fade } from 'svelte/transition';

	const handleClose = () => {
		console.log('alert closed');
	};
</script>
