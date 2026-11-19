<script setup lang="ts">
import { onMounted, onUnmounted, inject } from 'vue'
import type { Ref } from 'vue'

const animation = inject<Ref<boolean>>('animation')!

</script>

<template>
	<div class="firework-box"></div>
</template>

<style scoped>
.firework {
	position: fixed;
	z-index: 1500;
}
</style>
