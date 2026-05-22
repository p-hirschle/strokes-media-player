<script lang="ts">
	import { player } from '$lib/stores/playerStore';
	import { tracks } from '$lib/data/tracks';

	const formatTime = (seconds: number): string => {
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	};

	const handleSeek = (e: Event) => {
		const target = e.currentTarget as HTMLInputElement;
		player.seek(Number(target.value));
	};

	const handleVolume = (e: Event) => {
		const target = e.currentTarget as HTMLInputElement;
		player.setVolume(Number(target.value));
	};
</script>

<div class="glass rounded-2xl p-6 md:p-8 red-glow">
	{#if $player.currentTrack}
		<div class="flex items-center gap-6 mb-8">
			<div class="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-2xl">
				<img 
					src={$player.currentTrack.cover} 
					alt={$player.currentTrack.title}
					class="w-full h-full object-cover"
					style="filter: sepia(0.6) hue-rotate(-10deg);"
				/>
			</div>
			<div class="flex-1 min-w-0">
				<h2 class="text-xl md:text-2xl font-medium text-soft-white truncate">
					{$player.currentTrack.title}
				</h2>
				<p class="text-soft-white/60 text-lg">{$player.currentTrack.artist}</p>
			</div>
		</div>
	{/if}

	<div class="mb-6">
		<input 
			type="range" 
			min="0" 
			max={$player.duration || 100}
			value={$player.progress}
			on:input={handleSeek}
			class="w-full h-2 rounded-full appearance-none cursor-pointer transition-all"
			style="background: rgba(170, 146, 94, 0.11); accent-color: #e0e0e0;"
		/>
		<div class="flex justify-between text-sm text-soft-white/70 mt-2 font-mono">
			<span>{formatTime($player.progress)}</span>
			<span>{formatTime($player.duration)}</span>
		</div>
	</div>

	<div class="flex items-center justify-center gap-6 mb-6">
		<button 
			on:click={player.previous}
			class="w-12 h-12 flex items-center justify-center text-soft-white/70 hover:text-soft-white transition-all hover:scale-110"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<polygon points="19 20 9 12 19 4 19 20"></polygon>
				<line x1="5" y1="19" x2="5" y2="5"></line>
			</svg>
		</button>
		
		<button 
			on:click={player.togglePlay}
			class="w-16 h-16 flex items-center justify-center bg-wine hover:bg-wine/90 text-soft-white rounded-full transition-all hover:scale-105 shadow-lg shadow-wine/30"
		>
			{#if $player.isPlaying}
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<rect x="6" y="4" width="4" height="16"></rect>
					<rect x="14" y="4" width="4" height="16"></rect>
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
					<polygon points="5 3 19 12 5 21 5 3"></polygon>
				</svg>
			{/if}
		</button>
		
		<button 
			on:click={player.next}
			class="w-12 h-12 flex items-center justify-center text-soft-white/70 hover:text-soft-white transition-all hover:scale-110"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<polygon points="5 4 15 12 5 20 5 4"></polygon>
				<line x1="19" y1="5" x2="19" y2="19"></line>
			</svg>
		</button>
	</div>

	<div class="flex items-center gap-3">
		{#if $player.volume === 0}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-soft-white/60">
				<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
				<line x1="23" y1="9" x2="17" y2="15"></line>
				<line x1="17" y1="9" x2="23" y2="15"></line>
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-soft-white/60">
				<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
				<path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
			</svg>
		{/if}
		<input 
			type="range" 
			min="0" 
			max="1" 
			step="0.01"
			value={$player.volume}
			on:input={handleVolume}
			class="flex-1 h-2 rounded-full appearance-none cursor-pointer transition-all"
			style="background: rgba(170, 146, 94, 0.11); accent-color: #e0e0e0;"
		/>
	</div>
</div>
