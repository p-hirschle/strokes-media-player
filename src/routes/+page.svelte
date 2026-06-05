<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';

	let countdown = 3;
	let timer: ReturnType<typeof setInterval>;
	let isCounting = false;
	let showCredits = false;
	let steadyAudio: HTMLAudioElement;
	let fireAudio: HTMLAudioElement;

	const playSteady = () => {
		if (steadyAudio) {
			steadyAudio.currentTime = 0;
			steadyAudio.play().catch(err => console.error(err));
		}
	};

	const playFire = () => {
		if (fireAudio) {
			fireAudio.currentTime = 0;
			fireAudio.play().catch(err => console.error(err));
		}
	};

	const startCountdown = () => {
		playFire();
		isCounting = true;
		timer = setInterval(() => {
			countdown--;
			if (countdown === 0) {
				goto('/listen');
			}
		}, 1000);
	};

	onMount(() => {
		steadyAudio = new Audio('/audio-effects/steady.m4a');
		fireAudio = new Audio('/audio-effects/fire.m4a');
	});

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<div class="min-h-screen flex items-center justify-center relative font-marlboro">
	<div class="grain-overlay"></div>
	
	<div class="absolute inset-0 overflow-hidden">
		<img 
			src="/visuals/menu-bg.jpg" 
			alt="Reality Awaits"
			class="w-full h-full object-cover animate-zoom-in"
			style="filter: sepia(1) hue-rotate(-10deg);"
		/>
		<div class="absolute inset-0 bg-deep-black/30"></div>
	</div>

	<div class="relative z-10 text-center fade-in">
		{#if !isCounting && !showCredits}
			<div class="flex flex-col items-center gap-6">
				<div class="w-2 h-2 bg-soft-white animate-pulse"></div>
				<div class="flex flex-col gap-4">
					<button 
						on:mouseenter={playSteady}
						on:click={startCountdown}
						class="px-20 py-5 bg-sand/45 border-1 border-soft-white/30 hover:border-soft-white/70 text-soft-white/90 hover:text-soft-white transition-all hover:scale-105 tracking-[0.15em] uppercase text-4xl"
					>
						Hit The Road
					</button>
					<button 
						on:click={() => showCredits = true}
						class="px-20 py-5 bg-sand/45 border-1 border-soft-white/30 hover:border-soft-white/70 text-soft-white/90 hover:text-soft-white transition-all hover:scale-105 tracking-[0.15em] uppercase text-4xl"
					>
						Credits
					</button>
				</div>
			</div>
		{:else if showCredits}
			<div class="flex flex-col items-center gap-6">
				<div class="flex flex-col gap-8 text-left rounded-2xl p-8 md:p-10 max-w-2xl">
					<div>
						<h2 class="text-lg uppercase tracking-widest text-soft-white/100 mb-2 font-medium">Developed by</h2>
						<a 
							href="https://www.linkedin.com/in/pedro-hirschle" 
							target="_blank" 
							rel="noopener noreferrer"
							class="px-2 py-1 text-4xl bg-dark-gray text-soft-white/80 hover:text-wine transition-colors"
						>
							Pedro Hirschle
						</a>
					</div>

					<div>
						<h2 class="text-lg uppercase tracking-widest text-soft-white/100 mb-2 font-medium">Techs n' Stacks</h2>
						<div class="flex flex-wrap gap-0">
							<span class="px-2 py-1 bg-dark-gray text-lg text-soft-white/80">SvelteKit</span>
							<span class="px-2 py-1 bg-dark-gray text-lg text-soft-white/80">TypeScript</span>
							<span class="px-2 py-1 bg-dark-gray text-lg text-soft-white/80">TailwindCSS</span>
							<span class="px-2 py-1 bg-dark-gray text-lg text-soft-white/80">Howler.js</span>
						</div>
					</div>
				</div>
				<button 
					on:click={() => showCredits = false}
					class="flex items-center gap-2 text-soft-white/100 hover:text-soft-white transition-all hover:scale-105 text-3xl"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<line x1="19" y1="12" x2="5" y2="12"></line>
						<polyline points="12 19 5 12 12 5"></polyline>
					</svg>
					<span class="tracking-wider">BACK</span>
				</button>
			</div>
		{:else}
			<div class="flex flex-col items-center gap-4">
				<div class="w-2 h-2 bg-soft-white animate-pulse"></div>
				<p class="text-6xl text-soft-white/90 tracking-[0.15em] uppercase">
					Listening experience in {countdown}s
				</p>
			</div>
		{/if}
	</div>

	<style>
		@keyframes zoom-in {
			0% {
				transform: scale(1) translate3d(0, 0, 0);
			}
			55% {
				transform: scale(1.18) translate3d(-1.5%, 1%, 0);
			}
			100% {
				transform: scale(1.08) translate3d(1%, -0.75%, 0);
			}
		}
		.animate-zoom-in {
			animation: zoom-in 15s ease-in-out infinite alternate;
			transform-origin: center center;
		}
	</style>
</div>
