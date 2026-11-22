<script setup lang="ts">
import { ref, provide } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import ClickHearts from './components/ClickHearts.vue'

const animation = ref(true)
provide('animation', animation)

</script>

<template>
	<header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" />

		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</header>

	<RouterView />

	<footer>
		Copyright&copy; 2026 Students of University of Alberta. All rights reserved.
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
	width: 3rem;
	height: 3rem;
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
