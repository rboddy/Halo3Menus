<script>
	import Backgroundvid from '$lib/layout/backgroundvid.svelte';
	import MainMenu from '$lib/menu/mainMenu.svelte';
	import HaloLogo from '$lib/logos/haloLogo.svelte';
	import BungieLogo from '$lib/logos/bungieLogo.svelte';
	import MobileError from '$lib/errors/mobileError.svelte';

	//mobile stuff
	import mobile from 'is-mobile';
</script>

{#if !mobile()}
	<Backgroundvid video="/FlyBy.mp4" />
	<MainMenu />
	<HaloLogo />
	<BungieLogo />
{:else}
	<MobileError />
{/if}

<style>
	:global(body) {
		margin: 0;
	}
</style>
