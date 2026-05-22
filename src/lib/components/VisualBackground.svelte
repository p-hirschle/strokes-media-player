<script lang="ts">
	import { player } from '$lib/stores/playerStore';
</script>

<div class="absolute inset-0 overflow-hidden">
	{#if $player.currentTrack}
		<div class="absolute inset-0">
			<img 
				src={$player.currentTrack.visual} 
				alt=""
				class="w-full h-full object-cover"
			/>
		</div>
	{:else}
		<div class="absolute inset-0 bg-gradient-to-br from-dark-red via-deep-black to-wine"></div>
	{/if}
	
	<div class="absolute inset-0 bg-deep-black/70"></div>
	
	<div class="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/80"></div>
</div>
