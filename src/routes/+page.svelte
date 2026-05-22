<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';

	let countdown = 7;
	let timer: ReturnType<typeof setInterval>;

	onMount(() => {
		timer = setInterval(() => {
			countdown--;
			if (countdown === 0) {
				goto('/listen');
			}
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<div class="min-h-screen flex items-center justify-center relative cursor-pointer font-marlboro" on:click={() => goto('/listen')}>
	<div class="grain-overlay"></div>
	
	<div class="absolute inset-0 overflow-hidden">
		<img 
			src="/visuals/menu-bg.jpg" 
			alt="Reality Awaits"
			class="w-full h-full object-cover animate-zoom-in"
			style="filter: sepia(0.7) hue-rotate(-5deg);"
		/>
		<div class="absolute inset-0 bg-deep-black/30"></div>
	</div>

	<div class="relative z-10 text-center fade-in">
		<div class="flex flex-col items-center gap-4">
			<div class="w-2 h-2 bg-soft-white rounded-full animate-pulse"></div>
			<p class="text-3xl text-soft-white/70 tracking-[0.2em] uppercase">
				Listening experience in {countdown}s
			</p>
		</div>
	</div>

	<style>
		@keyframes zoom-in {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(1.05);
			}
		}
		.animate-zoom-in {
			animation: zoom-in 7s ease-out forwards;
		}
	</style>
</div>
