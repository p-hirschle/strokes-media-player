<script lang="ts">
	import { tracks as defaultTracks, type Track } from '$lib/data/tracks';
	import { player } from '$lib/stores/playerStore';

	export let tracks: Track[] = defaultTracks;
	export let variant: 'reality' | 'abnormal' = 'reality';
</script>

<div class="glass dust-card track-list-shell rounded-tl-2xl rounded-bl-2xl md:rounded-2xl p-4 md:p-6 overflow-hidden" class:abnormal-track-list={variant === 'abnormal'}>
	<div class="dust-card-content max-h-96 md:max-h-none overflow-y-auto md:overflow-visible pr-1 md:pr-0">
		<h3 class="text-sm uppercase tracking-widest text-soft-white/50 mb-4 font-medium">Tracklist</h3>
		<div class="space-y-2">
			{#each tracks as track, index}
				<button
					on:click={() => player.selectTrack(index)}
					class="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group {$player.currentTrack?.id === track.id ? (variant === 'abnormal' ? 'abnormal-active' : 'bg-dark-sand/10') : ''}"
				>
					<div class="w-8 text-center text-soft-white/40 font-mono text-sm group-hover:text-soft-white/70 transition-colors">
						{#if $player.currentTrack?.id === track.id && $player.isPlaying}
							<span class:text-abnormal-accent={variant === 'abnormal'} class:text-dark-sand={variant === 'reality'}>▶</span>
						{:else}
							{index + 1}
						{/if}
					</div>
					<div class="flex-1 text-left">
						<p
							class="text-soft-white group-hover:text-white transition-colors"
							class:text-abnormal-accent={$player.currentTrack?.id === track.id && variant === 'abnormal'}
							class:text-dark-sand={$player.currentTrack?.id === track.id && variant === 'reality'}
						>
							{track.title}
						</p>
						<p class="text-xs text-soft-white/40 group-hover:text-soft-white/60 transition-colors">
							{track.artist}
						</p>
					</div>
					<div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 group-hover:opacity-100 transition-opacity {$player.currentTrack?.id === track.id ? 'opacity-100' : 'opacity-50'}">
						<img
							src={track.cover}
							alt={track.title}
							class="w-full h-full object-cover"
							style={variant === 'abnormal' ? 'filter: saturate(1.08) contrast(1.04);' : 'filter: sepia(0.6) hue-rotate(-10deg);'}
						/>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.text-abnormal-accent {
		color: #3775A1;
	}

	.abnormal-active {
		background: rgba(55, 117, 161, 0.12);
	}

	.abnormal-track-list {
		background:
			linear-gradient(145deg, rgba(31, 71, 104, 0.58), rgba(13, 13, 13, 0.78) 58%, rgba(55, 117, 161, 0.34)),
			rgba(18, 18, 18, 0.76);
		border-color: rgba(55, 117, 161, 0.28);
	}
</style>
