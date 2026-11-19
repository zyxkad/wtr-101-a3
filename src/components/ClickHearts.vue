<script setup lang="ts">
import { onMounted, onUnmounted, reactive, markRaw, inject } from 'vue'
import HeartIcon from '@/components/icon/HeartIcon.vue'
import ThumbIcon from '@/components/icon/ThumbIcon.vue'
import type { Component, Ref } from 'vue'

interface HeartData {
	x: number
	y: number
	dx: number
	dy: number
	life: number
	component: Component
}

const animation = inject<Ref<boolean>>('animation')!

const hearts = reactive<HeartData[]>([])
const HEART_LIFE = 800

function onClick(event: PointerEvent) {
	if (!animation.value) {
		return
	}
	hearts.push({
		x: event.x,
		y: event.y,
		dx: 0.02 + (0.01 * Math.random()),
		dy: 0.02 + (0.02 * Math.random()),
		life: HEART_LIFE - (100 * Math.random()),
		component: markRaw(Math.random() < 0.5 ? HeartIcon : ThumbIcon),
	})
}

var rendererHandler: any = null
var lastTime = 0

function renderTick(time: DOMHighResTimeStamp) {
	rendererHandler = window.requestAnimationFrame(renderTick)
	const dt = time - lastTime
	if (dt < 15) {
		return
	}
	lastTime = time

	while (hearts.length > 0) {
		const heart = hearts[0]!
		if (heart.life > 0) {
			break
		}
		hearts.shift()
	}
	for (const heart of hearts) {
		heart.life -= dt;
		heart.x += dt * heart.dx;
		heart.y -= dt * heart.dy;
	}
}

onMounted(() => {
	document.addEventListener('pointerdown', onClick)
	rendererHandler = window.requestAnimationFrame(renderTick)
})

onUnmounted(() => {
	document.removeEventListener('pointerdown', onClick)
	if (rendererHandler !== null) {
		window.cancelAnimationFrame(rendererHandler)
		rendererHandler = null
	}
})

</script>

<template>
	<div class="hearts">
		<div
			v-for="heart in hearts"
			:style="{
				top: `${heart.y}px`,
				left: `${heart.x}px`,
				opacity: heart.life / HEART_LIFE * 0.6 + 0.3,
				transform: `scale(${heart.life / HEART_LIFE}) rotate(${Math.abs(heart.life / 8 % 60 - 30)}deg)`,
			}"
		>
			<component :is="heart.component"/>
		</div>
	</div>
</template>

<style scoped>
.hearts > div {
	position: fixed;
	z-index: 2000;
	user-select: none;
	pointer-events: none;
}

.hearts > div > svg {
	position: absolute;
	left: -1rem;
	top: -1rem;
	width: 2rem;
	height: 2rem;
	filter: drop-shadow(0 0 2px#0004);
}
</style>
