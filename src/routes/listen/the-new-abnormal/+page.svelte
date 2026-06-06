<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { player } from '$lib/stores/playerStore';
	import { theNewAbnormalTracks } from '$lib/data/tracks';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	import TrackList from '$lib/components/TrackList.svelte';

	const goBack = () => {
		player.stop();
		goto('/the-new-abnormal');
	};

	onMount(() => {
		player.setPlaylist(theNewAbnormalTracks);
		const firstAvailableIndex = theNewAbnormalTracks.findIndex(track => track.src.length > 0);
		if (firstAvailableIndex !== -1) {
			player.selectTrack(firstAvailableIndex);
		} else {
			player.selectTrack(0);
		}
	});
</script>

<div class="min-h-screen relative flex flex-col font-apercu-bold">
	<div class="absolute inset-0 overflow-hidden">
		<div class="abnormal-bg-x" aria-hidden="true">
			<div class="abnormal-bg-y">
				<img
					src="/visuals/abnormal-bg.jpg"
					alt=""
					class="abnormal-bg-image"
				/>
			</div>
		</div>
		<div class="absolute inset-0 bg-deep-black/58"></div>
		<div class="absolute inset-0 abnormal-player-wash"></div>
	</div>

	<div class="grain-overlay"></div>

	<header class="relative z-20 p-6 md:p-8">
		<button
			on:click={goBack}
			class="flex items-center gap-2 text-soft-white/70 hover:text-soft-white transition-all hover:scale-105"
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
			<PlayerControls variant="abnormal" />
		</div>

		<div class="w-full md:w-1/2 max-w-md">
			<TrackList tracks={theNewAbnormalTracks} variant="abnormal" />
		</div>
	</main>

	<style>
		@keyframes abnormal-drift-x {
			0% {
				transform: translate3d(-1.2%, 0, 0);
			}
			100% {
				transform: translate3d(1.1%, 0, 0);
			}
		}

		@keyframes abnormal-drift-y {
			0% {
				transform: translate3d(0, -0.6%, 0);
			}
			100% {
				transform: translate3d(0, 0.72%, 0);
			}
		}

		@keyframes abnormal-zoom {
			0% {
				transform: scale(1.08);
			}
			100% {
				transform: scale(1.16);
			}
		}

		.abnormal-bg-x,
		.abnormal-bg-y,
		.abnormal-bg-image {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			will-change: transform;
		}

		.abnormal-bg-x {
			animation: abnormal-drift-x 48s ease-in-out infinite alternate;
		}

		.abnormal-bg-y {
			animation: abnormal-drift-y 61s ease-in-out infinite alternate;
		}

		.abnormal-bg-image {
			object-fit: cover;
			object-position: center center;
			animation: abnormal-zoom 22s ease-in-out infinite alternate;
			filter: sepia(0.24) saturate(1.34) hue-rotate(-12deg) contrast(1.08);
			transform-origin: center center;
		}

		.abnormal-player-wash {
			background:
				radial-gradient(circle at 45% 36%, rgba(255, 125, 43, 0.24), transparent 34%),
				radial-gradient(circle at 82% 74%, rgba(225, 65, 26, 0.16), transparent 28%),
				linear-gradient(180deg, rgba(10, 10, 10, 0.1), rgba(77, 23, 12, 0.42) 52%, rgba(10, 10, 10, 0.86));
			mix-blend-mode: screen;
		}
	</style>
</div>
