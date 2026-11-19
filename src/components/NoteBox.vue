<script setup lang="ts">
defineProps<{
	title?: string
}>()
</script>

<template>
	<fieldset>
		<legend>{{ title || 'Note' }}</legend>
		<slot/>
	</fieldset>
</template>

<style scoped>
fieldset {
	--box-border-color: #fa2;
	padding: 1em;
	padding-top: 0;
	border: 2px solid var(--box-border-color);
	border-radius: 1em;
	background: #ffb;
}

fieldset > legend {
	color: var(--box-border-color);
	font-weight: bold;
}
</style>
