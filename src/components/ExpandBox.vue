<script setup lang="ts">

</script>

<template>
	<details>
		<summary>
			<slot name="summary"/>
		</summary>
		<div class="content">
			<slot name="content"/>
		</div>
	</details>
</template>

<style scoped>
details {

}

.content {
	padding-left: 1rem;
}
</style>
