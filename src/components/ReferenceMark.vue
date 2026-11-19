<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
	i: number
}>();
</script>

<template>
	<sup>
		<RouterLink :to="`#references-${i}`">[{{i}}]</RouterLink>
	</sup>
</template>

<style scoped>
sup {
	text-wrap: nowrap;
}
</style>
