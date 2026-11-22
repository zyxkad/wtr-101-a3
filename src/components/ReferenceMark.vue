<script setup lang="ts">
import { RouterLink } from 'vue-router'
import globals from '@/globals'

defineProps<{
	i: number
}>();
</script>

<template>
	<sup>
		<RouterLink :to="`#references-${i}`" @click="globals.onHashScroll">[{{i}}]</RouterLink>
	</sup>
</template>

<style scoped>
sup {
	text-wrap: nowrap;
}
</style>
