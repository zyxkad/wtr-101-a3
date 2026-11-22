<script setup lang="ts">
defineProps<{
	title?: string
}>()
</script>

<template>
	<fieldset>
		<legend v-if="title !== ''">{{  title || 'Note' }}</legend>
		<slot/>
	</fieldset>
</template>

<style scoped>
fieldset {
	--box-border-color: #fa2;
	padding: 1em;
	border: 2px solid var(--box-border-color);
	border-radius: 1em;
	background: #fff80060;
}

fieldset:has(legend) {
	padding-top: 0;
}

fieldset > legend {
	color: var(--box-border-color);
	font-weight: bold;
}
</style>
