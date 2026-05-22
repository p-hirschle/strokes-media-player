<script lang="ts">
	import { tracks } from '$lib/data/tracks';
	import { player } from '$lib/stores/playerStore';
</script>

<div class="glass rounded-2xl p-4 md:p-6 max-h-96 overflow-y-auto">
	<h3 class="text-sm uppercase tracking-widest text-soft-white/50 mb-4 font-medium">Tracklist</h3>
	<div class="space-y-2">
		{#each tracks as track, index}
			<button 
				on:click={() => player.selectTrack(index)}
				class="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group {$player.currentTrack?.id === track.id ? 'bg-wine/10' : ''}"
			>
				<div class="w-8 text-center text-soft-white/40 font-mono text-sm group-hover:text-soft-white/70 transition-colors">
					{#if $player.currentTrack?.id === track.id && $player.isPlaying}
						<span class="text-wine">▶</span>
					{:else}
						{index + 1}
					{/if}
				</div>
				<div class="flex-1 text-left">
					<p class="text-soft-white group-hover:text-white transition-colors {$player.currentTrack?.id === track.id ? 'text-wine' : ''}">
						{track.title}
					</p>
					<p class="text-xs text-soft-white/40 group-hover:text-soft-white/60 transition-colors">
						{track.artist}
					</p>
				</div>
				<div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
					<img 
						src={track.cover} 
						alt={track.title}
						class="w-full h-full object-cover"
						style="filter: sepia(0.6) hue-rotate(-10deg);"
					/>
				</div>
			</button>
		{/each}
	</div>
</div>
