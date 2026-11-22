<script setup lang="ts">
import { useRoute } from 'vue-router'

export interface Reference {
	desc: string
	link?: string
}

defineProps<{
	references: Reference[]
}>();

const route = useRoute()
</script>

<template>
	<ol class="reference-list">
		<li
			v-for="({desc, link}, i) in references"
			:id="`references-${i + 1}`"
			:class="route.hash === `#references-${i + 1}` ? ['selected'] : []"
		>
			<span>{{desc}}</span>&nbsp;<a v-if="link" :href="link">{{link}}</a>
		</li>
	</ol>
</template>

<style scoped>
.reference-list > li {
	padding-left: 2em;
	text-indent: -2em;
}

.reference-list > li.selected {
	text-decoration: underline;
}

.reference-list > li > a {
	line-break: anywhere;
}
</style>
