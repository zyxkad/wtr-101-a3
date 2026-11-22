<script setup lang="ts">
import { ref, provide } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import ClickHearts from './components/ClickHearts.vue'

const animation = ref(true)
provide('animation', animation)

</script>

<template>
	<header>
		<div class="logo">
			Group 6 Icon
		</div>

		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</header>

	<RouterView />

	<footer>
		<div>
			Copyright&copy; 2026
			Students of University of Alberta in WRS 101 - Section A02 & X02
			<address style="display: inline;">
				(<a href="mainto:aywang4@ualberta.ca">Alisha Wang</a>,
				<a href="mailto:kzhang15@ualberta.ca">Kevin Zhang</a>,
				<a href="mailto:charity4@ualberta.ca">Charity Lam</a>,
				<a href="mailto:bubba@ualberta.ca">Bubba Reed</a>).
			</address>
			All rights reserved.
		</div>
		<div>
			Instructed by Dr. Shahin Moghaddasi Sarabi.
		</div>
		<div>
			This site is hosted at <a href="https://wtr-101-a3.ckcha.ca">wtr-101-a3.ckcha.ca</a>.
			The source code is available on
			<a href="https://github.com/zyxkad/wtr-101-a3">
				<img src="@/assets/github.png" style="height: 1.1em; vertical-align: text-top;" /> Github
			</a>
			under <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0-or-later LICENSE</a>.
		</div>
		<div>
			Made with <a href="https://vuejs.org">Vue.js</a>.
		</div>
	</footer>

	<ClickHearts/>
</template>

<style scoped>
header {
	display: flex;
	flex-direction: row;
	place-items: center;
	width: 100%;
	height: 4rem;
	padding: 0.5rem 1rem;
	border-bottom: 1px solid var(--color-border);
}

.logo {
	height: 3rem;
	line-height: 3rem;
}

header > nav > * {
	margin-left: 1rem;
}

footer {
	height: 16rem;
	padding: 2rem;
	background-color: #e0ffe0;
}

@media (max-width: 800px) {
}

@media (prefers-color-scheme: dark) {
	footer {
		background-color: #367136;
	}
}
</style>
