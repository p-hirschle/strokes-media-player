<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { player } from '$lib/stores/playerStore';
	import { realityAwaitsTracks } from '$lib/data/tracks';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	import TrackList from '$lib/components/TrackList.svelte';

	const goBack = () => {
		player.stop();
		goto('/reality-awaits');
	};

	onMount(() => {
		player.setPlaylist(realityAwaitsTracks);
		const firstAvailableIndex = realityAwaitsTracks.findIndex(track => track.src.length > 0);
		if (firstAvailableIndex !== -1) {
			player.selectTrack(firstAvailableIndex);
		} else {
			player.selectTrack(0);
		}
	});
</script>

<div class="min-h-screen relative flex flex-col font-contax">
	<div class="absolute inset-0 overflow-hidden">
		<div class="cinematic-bg-x" aria-hidden="true">
			<div class="cinematic-bg-y">
				<img
					src="/visuals/cowboy-bg.jpg"
					alt=""
					class="cinematic-bg-image"
				/>
			</div>
		</div>
		<div class="absolute inset-0 bg-deep-black/56"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/60"></div>
	</div>
	
	<div class="grain-overlay"></div>
	
	<header class="relative z-20 p-6 md:p-8">
		<button 
			on:click={goBack}
			class="flex items-center gap-2 text-soft-white/60 hover:text-soft-white transition-all hover:scale-105"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<line x1="19" y1="12" x2="5" y2="12"></line>
				<polyline points="12 19 5 12 12 5"></polyline>
			</svg>
			<span class="text-sm tracking-wider">BACK</span>
		</button>
	</header>
	
	<main class="relative z-20 flex-1 flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-12">
		<div class="w-full md:w-1/2 max-w-md">
			<PlayerControls />
		</div>
		
		<div class="w-full md:w-1/2 max-w-md">
			<TrackList tracks={realityAwaitsTracks} />
		</div>
	</main>

	<style>
		@keyframes cinematic-drift-x {
			0% {
				transform: translate3d(-1.6%, 0, 0);
			}
			100% {
				transform: translate3d(1.35%, 0, 0);
			}
		}

		@keyframes cinematic-drift-y {
			0% {
				transform: translate3d(0, -0.75%, 0);
			}
			100% {
				transform: translate3d(0, 0.55%, 0);
			}
		}

		@keyframes cinematic-zoom {
			0% {
				transform: scale(1.11);
			}
			100% {
				transform: scale(1.18);
			}
		}

		.cinematic-bg-x,
		.cinematic-bg-y,
		.cinematic-bg-image {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			will-change: transform;
		}

		.cinematic-bg-x {
			animation: cinematic-drift-x 52s ease-in-out infinite alternate;
		}

		.cinematic-bg-y {
			animation: cinematic-drift-y 67s ease-in-out infinite alternate;
		}

		.cinematic-bg-image {
			object-fit: cover;
			object-position: center 20%;
			animation: cinematic-zoom 24s ease-in-out infinite alternate;
			filter: sepia(0.18) saturate(0.9) contrast(1.05);
			transform-origin: center 20%;
		}
	</style>
</div>
