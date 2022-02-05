<script>
	import { onMount } from 'svelte';

	export let video;

	var muted = true;

	function toggleMute() {
		const videoElement = document.getElementById('myVideo');
		videoElement.volume = 0.2;
		videoElement.muted = !videoElement.muted;
		muted = !muted;
	}
</script>

<video playsinline autoplay muted loop id="myVideo">
	<source src={video} type="video/mp4" />
</video>
<button on:click|preventDefault={toggleMute}>
	{#if muted}
		<i class="fa-solid fa-volume-xmark" />
	{:else}
		<i class="fa-solid fa-volume-high" />
	{/if}
</button>

<style>
	video {
		object-fit: cover;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}
	button {
		background: none;
		border: none;
		color: white;
		font-size: 20px;
		position: absolute;
		top: 0;
		left: 0;
	}
	button:hover {
		cursor: pointer;
	}
</style>
