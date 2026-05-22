<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="min-h-screen relative flex flex-col items-center justify-center font-bodoni">
	<div class="grain-overlay"></div>
	
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute inset-0 bg-gradient-to-br from-deep-black via-dark-gray to-dark-red/40"></div>
	</div>

	<div class="relative z-10 text-center scale-in max-w-2xl px-6">
		<button 
			on:click={() => goto('/')}
			class="flex items-center gap-2 text-soft-white/60 hover:text-soft-white transition-all hover:scale-105 mx-auto mb-12"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<line x1="19" y1="12" x2="5" y2="12"></line>
				<polyline points="12 19 5 12 12 5"></polyline>
			</svg>
			<span class="text-sm tracking-wider">BACK</span>
		</button>

		<h1 class="text-4xl md:text-5xl font-extralight tracking-[0.2em] mb-8 text-soft-white">
			CREDITS
		</h1>
		
		<div class="space-y-8 text-left glass rounded-2xl p-8 md:p-10">
			<div>
				<h2 class="text-sm uppercase tracking-widest text-soft-white/50 mb-3 font-medium">Developed by</h2>
				<p class="text-xl text-soft-white mb-2">Pedro Hirschle</p>
				<a 
					href="https://linkedin.com/in/pedrohirschle" 
					target="_blank" 
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 text-wine hover:text-soft-white transition-colors"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
						<rect x="2" y="9" width="4" height="12"></rect>
						<circle cx="4" cy="4" r="2"></circle>
					</svg>
					LinkedIn
				</a>
			</div>

			<div>
				<h2 class="text-sm uppercase tracking-widest text-soft-white/50 mb-3 font-medium">Techs n' Stacks</h2>
				<div class="flex flex-wrap gap-2">
					<span class="px-4 py-2 bg-dark-gray rounded-full text-sm text-soft-white/70">SvelteKit</span>
					<span class="px-4 py-2 bg-dark-gray rounded-full text-sm text-soft-white/70">TypeScript</span>
					<span class="px-4 py-2 bg-dark-gray rounded-full text-sm text-soft-white/70">TailwindCSS</span>
					<span class="px-4 py-2 bg-dark-gray rounded-full text-sm text-soft-white/70">Howler.js</span>
				</div>
			</div>

			<div>
				<h2 class="text-sm uppercase tracking-widest text-soft-white/50 mb-3 font-medium"></h2>
				<p class="text-soft-white/80">Album "The New Abnormal" by The Strokes</p>
			</div>
		</div>
	</div>
</div>
