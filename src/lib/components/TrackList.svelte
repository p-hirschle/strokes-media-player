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
					<div class="w-10 h-10 overflow-hidden flex-shrink-0 group-hover:opacity-100 transition-opacity {variant === 'abnormal' ? 'abnormal-cover-frame' : 'rounded-lg'} {$player.currentTrack?.id === track.id ? 'opacity-100' : 'opacity-50'}">
						<img
							src={track.cover}
							alt={track.title}
							class="w-full h-full object-cover"
							style={variant === 'abnormal' ? 'filter: sepia(0.50) saturate(1.28) hue-rotate(18deg) contrast(1.05) brightness(1.02);' : 'filter: sepia(0.6) hue-rotate(-10deg);'}
						/>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.text-abnormal-accent {
		color: #ef6515;
	}

	.abnormal-active {
		background: rgba(239, 101, 21, 0.16);
		border-radius: 0;
		clip-path: polygon(1% 7%, 99% 2%, 97.8% 93%, 4% 100%, 0 54%);
		box-shadow:
			inset 4px 0 0 #ef6515,
			0 0 0 1px rgba(20, 53, 77, 0.08);
	}

	.abnormal-track-list.glass.dust-card {
		position: relative;
		isolation: isolate;
		overflow: visible;
		border: 0;
		border-radius: 4px;
		background: transparent;
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
		color: #14354d;
		box-shadow: none;
		transform: rotate(0.16deg);
	}

	.abnormal-track-list.dust-card::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		border: 1px solid rgba(20, 53, 77, 0.18);
		border-radius: 3px 5px 2px 4px;
		clip-path: polygon(0.8% 4%, 2.5% 1%, 82% 2%, 88% 0, 91% 7%, 96% 4%, 100% 11%, 100% 44%, 98.5% 78%, 96.5% 85%, 98% 96%, 92% 99%, 4% 100%, 0 86%, 1% 18%);
		background:
			linear-gradient(0deg, rgba(20, 53, 77, 0.07) 0 1px, transparent 1px 100%),
			linear-gradient(90deg, rgba(239, 101, 21, 0.06) 0 1px, transparent 1px 100%),
			#f5eddb;
		background-size:
			100% 13px,
			19px 100%,
			auto;
		box-shadow:
			inset 0 0 0 3px rgba(255, 255, 255, 0.2),
			inset 0 -24px 32px rgba(189, 109, 34, 0.07);
		animation: none;
		filter: none;
		opacity: 1;
		transform: none;
		pointer-events: none;
	}

	.abnormal-track-list.dust-card::after {
		content: '';
		position: absolute;
		left: 1rem;
		right: 1rem;
		bottom: 0.55rem;
		z-index: 0;
		height: 1.25rem;
		background:
			linear-gradient(94deg, transparent 0 10%, rgba(20, 53, 77, 0.12) 11% 14%, transparent 15% 30%, rgba(239, 101, 21, 0.15) 31% 34%, transparent 35% 60%, rgba(20, 53, 77, 0.1) 61% 64%, transparent 65% 100%),
			linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(180, 93, 31, 0.13));
		clip-path: polygon(0 48%, 8% 20%, 16% 64%, 27% 26%, 39% 70%, 51% 17%, 65% 61%, 78% 24%, 90% 68%, 100% 35%, 100% 100%, 0 100%);
		opacity: 0.82;
		pointer-events: none;
	}

	.abnormal-track-list .dust-card-content {
		position: relative;
		z-index: 1;
	}

	.abnormal-track-list :where(h3, p, span, div, button) {
		color: #14354d;
	}

	.abnormal-track-list .text-abnormal-accent {
		color: #ef6515;
	}

	.abnormal-track-list h3 {
		display: inline-block;
		color: #ef6515;
		background: transparent;
		box-shadow: none;
		padding: 0;
		transform: none;
	}

	.abnormal-track-list button {
		border-radius: 3px;
	}

	.abnormal-track-list .abnormal-active {
		border-radius: 0;
	}

	.abnormal-track-list button:hover {
		background: rgba(20, 53, 77, 0.08);
	}

	.abnormal-track-list img {
		border: 0;
		border-radius: 0;
		box-shadow: 3px 4px 0 rgba(20, 53, 77, 0.24);
	}

	.abnormal-cover-frame {
		border-radius: 0;
		clip-path: polygon(0 0, 86% 0, 100% 13%, 100% 100%, 17% 100%, 0 84%);
	}

	.abnormal-cover-frame img {
		clip-path: polygon(0 0, 86% 0, 100% 13%, 100% 100%, 17% 100%, 0 84%);
	}
</style>
