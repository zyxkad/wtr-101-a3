<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import globals from '@/globals'

export interface NavBarItem {
	name: string
	anchor: string
	items?: NavBarItem[]
}

const props = defineProps<{
	items: NavBarItem[]
	nonroot?: boolean
}>()

const emits = defineEmits(['beforeNavigate'])

const route = useRoute()
const router = useRouter()

let scrolling = false

function beforeNavigate() {
	emits('beforeNavigate')
	scrolling = true
}

if (!props.nonroot) {
	let observer: IntersectionObserver | null = null

	function onScrollEnd() {
		scrolling = false
	}

	function onScrolledTo(elem: Element) {
		if (scrolling) {
			return
		}
		const hash = `#${elem.id}`
		if (route.hash !== hash) {
			globals.skipAutoScroll = true
			router.replace(hash)
		}
	}

	onMounted(() => {
		document.addEventListener('scrollend', onScrollEnd)

		const observing = new Set<Element>()
		observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					observing.add(entry.target)
				} else {
					observing.delete(entry.target)
				}
			}
			let toppest: Element | null = null
			let toppestTop: number | null = null
			for (const entry of observing) {
				const box = entry.getBoundingClientRect()
				if (box.top < 0 || box.bottom > window.innerHeight) {
					console.log(observing.size, entry.id, box.top, box.bottom, box.bottom > window.innerHeight)
					continue
				}
				if (!toppest || box.top < toppestTop!) {
					toppestTop = box.top
					toppest = entry
				}
			}
			if (toppest) {
				onScrolledTo(toppest)
			}
		}, {
			threshold: 1,
		})
		const observeElems = (items: NavBarItem[]) => {
			for (const item of items) {
				observer!.observe(document.getElementById(item.anchor)!)
				if (item.items) {
					observeElems(item.items)
				}
			}
		}
		observeElems(props.items)
	})
	onUnmounted(() => {
		document.removeEventListener('scrollend', onScrollEnd)
		if (observer) {
			observer.disconnect()
		}
	})
}

</script>

<template>
	<ul class="navbar">
		<li v-for="item in items" :class="route.hash === `#${item.anchor}` ? ['active'] : []">
			<RouterLink :to="`#${item.anchor}`" @click="beforeNavigate">
				{{item.name}}
			</RouterLink>
			<NavBar v-if="item.items" :items="item.items" :nonroot="true" @beforeNavigate="beforeNavigate"/>
		</li>
	</ul>
</template>

<style scoped>
.navbar {
	padding-inline-start: 1.5em;
}
</style>
