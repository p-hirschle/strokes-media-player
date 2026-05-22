<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { player } from '$lib/stores/playerStore';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	import TrackList from '$lib/components/TrackList.svelte';

	onMount(() => {
		player.selectTrack(0);
	});
</script>

<div class="min-h-screen relative flex flex-col font-bodoni">
	<div class="absolute inset-0 overflow-hidden">
		<video 
			src="/visuals/cowboy-riding.mp4" 
			autoplay 
			loop 
			muted 
			playsinline
			class="w-full h-full object-cover"
			style="object-position: center 20%;"
		>
			<img 
				src="/visuals/cowboy-bg.jpg" 
				alt=""
				class="w-full h-full object-cover"
				style="object-position: center 20%;"
			/>
		</video>
		<div class="absolute inset-0 bg-deep-black/70"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/80"></div>
	</div>
	
	<div class="grain-overlay"></div>
	
	<header class="relative z-20 p-6 md:p-8">
		<button 
			on:click={() => goto('/')}
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
			<TrackList />
		</div>
	</main>
</div>
