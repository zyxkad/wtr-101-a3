<script setup lang="ts">
import ExpandBox from '@/components/ExpandBox.vue'
import NavBar from '@/components/NavBar.vue'
import NoteBox from '@/components/NoteBox.vue'
import ReferenceList from '@/components/ReferenceList.vue'
import ReferenceMark from '@/components/ReferenceMark.vue'

import type { NavBarItem } from '@/components/NavBar.vue'
import type { Reference } from '@/components/ReferenceList.vue'

const navItems: NavBarItem[] = [
	{
		name: 'Introduction',
		anchor: 'main-introduction',
	},
	{
		name: 'Why first hello is difficult',
		anchor: 'main-why-first-hello-is-difficult',
	},
	{
		name: 'Approaching at the right moment',
		anchor: 'main-step-1',
		items: [
			{
				name: 'Positive Signs',
				anchor: 'main-step-1-positive-signs',
			}
		]
	},
	{
		name: 'What to say and do',
		anchor: 'main-step-2',
		items: [
			{
				name: 'Continue conversation',
				anchor: 'main-step-2-keep-conversation',
			},
			{
				name: 'What if awkward',
				anchor: 'main-step-2-what-if-awkward',
			},
		],
	},
	{
		name: 'Turn conversations into connections',
		anchor: 'main-step-3',
	},
	{
		name: 'Every friendship start somewhere',
		anchor: 'every-friendship-start-somewhere',
	},
	{
		name: 'References',
		anchor: 'references',
	}
]

const references: Reference[] = [
	{
		desc: 'Boothby, E. J., Cooney, G., Sandstrom, G. M., & Clark , M. S. (2018, May 15). Psychological science. SAGE Journals.',
		link: 'http://www.psychologicalscience.org/ps',
	},
	{
		desc: 'Dunn, J. (2026, February 27). The big benefits of small talk. The New York Times.',
		link: 'https://www.nytimes.com/2026/02/27/well/benefits-small-talk.html',
	},
	{
		desc: 'Pavlovic, Z., & Jeno, L. M. (2024). Facilitating academic and social integration among first-year university students: is peer mentoring necessary or an additive measure? Mentoring & Tutoring, 32(1), 29–48.',
		link: 'https://doi.org/10.1080/13611267.2023.2290731',
	},
	{
		desc: `Stahl, G., & McDonald, S. (2024). "I'd rather not bring any attention to myself": Shyness and belonging(s) during the first-year university experience. Research in Post-Compulsory Education, 29(1), 45–63.`,
		link: 'https://doi.org/10.1080/13596748.2023.2285629',
	},
	{
		desc: "Spencer-Oatey, H., Dauber, D., Jing, J., & Lifei, W. (2016, November 22). Chinese students' social integration into the university community: hearing the students' voices. EBSCO.",
		link: 'https://doi.org/10.1007/s10734-016-0074-0',
	},
]

</script>

<template>
	<div class="main-box">
		<NavBar class="navbar" :items="navItems"/>
		<main>
			<div class="text-center" style="color: var(--color-heading);">
				<h1>
					How to Initiate Conversation in a New Environment
				</h1>
				<h2>
					A Guide for First-year Students
				</h2>
			</div>

			<section>
				<h2 id="main-introduction" class="subtitle nowrap big-first-letter">
					Congratulations on starting university!
				</h2>
				<div class="image-box float-right-50p">
					<img src="@/assets/uofa-nc.jpg"/>
					<div class="image-desc">
						By <a href="//commons.wikimedia.org/wiki/User:Crisco_1492" title="User:Crisco 1492">Chris Woodrich</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/wiki/Special:Redirect/page/200707102">Link</a>
					</div>
				</div>
				<p>
					Starting university can be an exciting experience and offers numerous opportunities to socialize, but being in a new environment can easily feel isolating and overwhelming. You might sit next to someone all semester but never speak to them, or consider joining a club, but feel awkward attending alone. Even in a busy lecture hall full of people, saying hello can be the hardest part! While the University of Alberta provides numerous opportunities to socialize, many still feel unsure how to join a conversation.
				</p>
				<br/>
				<NoteBox>
					<p>
						Knowing <b>where to meet people</b> is drastically different from knowing <b>how to approach</b> them and <b>what to say</b>.
					</p>
				</NoteBox>
				<br/>
				<div>
					 This guide aims to bridge that gap with a three-step strategy to help students confidently approach others, form connections, and gradually build friendships.
				</div>
			</section>

			<section>
				<h2 id="main-why-first-hello-is-difficult" class="subtitle nowrap">
					What makes that first hello so difficult?
				</h2>
				<p>
					If any of these experiences sound familiar, know that you are not alone. Understanding these barriers and recognizing how they make socializing difficult is the first step to overcoming them.
					<ReferenceMark :i="4"/>
				</p>
				<br/>
				<div class="first-hello-difficulty-table">
					<div>
						<b>Low self-confidence:</b>
						You assume you have nothing to say that others would find interesting, so you avoid introducing yourself.
					</div>
					<div>
						<b>Shyness/social anxiety:</b>
						You want to talk to others but feel tense in the moment.
					</div>
					<div>
						<b>Fear of rejection:</b>
						You expect others to dislike you, so you give up on the interaction too soon, feeling dissuaded.
					</div>
					<div>
						<b>Overthinking and fear of awkwardness:</b>
						You rehearse the interaction multiple times in your head until the moment has already passed.
					</div>
					<div>
						<b>Language and cultural differences:</b>
						You worry about offending someone and have a hard time understanding slang, so you remain quiet.
					</div>
					<div>
						<b>Existing friend groups:</b>
						You see all your classmates already talking in groups and assume there is no more space for you.
					</div>
				</div>
				<br/>
				<NoteBox title="">
					While clubs and events provide opportunities to meet people, students may still struggle to take that first step.
				</NoteBox>
			</section>

			<section>
				<h2 id="main-step-1" class="subtitle nowrap step-header">
					Step 1: Approaching at the right moment
				</h2>
				<p>
					Choose a setting where you already share something, such as the same lab, club, or residence hall. Instead of randomly approaching a stranger, choose natural opportunities for interaction that makes having a conversation feel comfortable for both people.
					<ReferenceMark :i="2"/>
				</p>
				<p>
					Research suggests that first-year integration brings many opportunities to interact in academic settings, and even brief interactions with classmates have been associated with producing greater senses of belonging.
					<ReferenceMark :i="3"/>
				</p>
				<div id="main-step-1-positive-signs" class="subtitle">
					<u>Before approaching someone, look to see if you notice these signs:</u>
				</div>
				<div class="card-row-box hover-enlarge">
					<div class="card">
						<div class="card-title">The right environment</div>
						<p>
							Choose opportunities before lectures or labs or during club bonding activities. These are places where casual conversation may be the most expected and feel the most natural.
						</p>
					</div>
					<div class="card">
						<div class="card-title">Open body language</div>
						<p>
							Look for someone who appears relaxed and makes eye contact. A good way to tell if someone is receptive, is to smile and see if they smile back.
							<ReferenceMark :i="2"/>
						</p>
					</div>
					<div class="card">
						<div class="card-title">Shared interests</div>
						<p>
							Notice something you can both connect with. Observe and see if you can spot a book or band t-shirt you can talk about. Keep in mind common interests are only things that may help you close a gap with another. You do not need the same hobby to form a connection.
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2 id="main-step-2" class="subtitle nowrap step-header">
					Step 2: What to say and do
				</h2>
				<p>
					Once you have found the right moment, what should you do next? You do not need to have the perfect opening line. A friendly opening works best when you <b>notice something relevant, acknowledge, ask a question, and share a bit about yourself</b>. Having a few simple conversation starters prepared can help you approach others with more confidence.
				</p>
				<div class="card-col-box">
					<div class="card">
						<div>
							Starting a casual conversation before a lecture or a lab:
						</div>
						<ExpandBox>
							<template #summary>
								You can say:
							</template>
							<template #content>
								"Good morning/afternoon" and share your feelings or recent experiences.
								<br/>-- explain why
							</template>
						</ExpandBox>
					</div>
					<div class="card">
						<div>
							Finding people who look familiar (faces/ accent/ outfit/ etc.)
						</div>
						<ExpandBox>
							<template #summary>
								You can say:
							</template>
							<template #content>
								"Hey I think I’ve seen you from somewhere before, where are you from?"
								<br/>-- explain why
							</template>
						</ExpandBox>
					</div>
					<div class="card">
						<div>
							Noticing a shared interest (such as the other person wearing a band’s specific shirt):
						</div>
						<ExpandBox>
							<template #summary>
								You can say:
							</template>
							<template #content>
								"I love your shirt! I am also a fan [of that artist]! What is your favourite album?"
								<br/>-- explain why
							</template>
						</ExpandBox>
					</div>
				</div>
				<br/>
				<NoteBox title="">
					Remember to keep it genuine! Asking for study notes right away can sound transactional.
				</NoteBox>
				<div id="main-step-2-keep-conversation" class="subtitle">
					If someone responds, here are a few things to remember to keep the conversation going:
				</div>
				<ul>
					<li>
						<b>Share your own experiences:</b>
						Remember that a conversation is a two-way street. This is not an interview speech.
					</li>
					<li>
						<b>Be yourself:</b>
						You do not have to behave perfectly! Be casual and enjoy being yourself. You won’t be charged for having the wrong grammar.
					</li>
					<li>
						<b>Show genuine interest:</b>
						It is helpful to keep the conversation going by asking follow-up questions, and let the other person feel you are interested in them. Avoid only asking people for study notes or assignment answers, as it may make the interaction feel transactional.
					</li>
				</ul>
				<div id="main-step-2-what-if-awkward" class="subtitle nowrap">
					But what if the conversation turns awkward?
				</div>
				<ul>
					<li>
						<b>The good news:</b>
						It is normal to have awkward moments while making new friends. However, these experiences should not push you off from the road, instead, they are the stones building your path. Everyone will have these experiences, and they will understand your feelings.
					</li>
				</ul>
			</section>

			<section>
				<h2 id="main-step-3" class="subtitle nowrap step-header">
					Step 3: Turn conversations into connections
				</h2>
				<p>
					It is rare for two people to build a strong friendship by having only one conversation. Rather than setting a goal to immediately make a friend, focus on enjoying the talk itself, and find opportunities to speak in the future.
				</p>
				<div class="subtitle nowrap">
					<u>Building off of your first conversation:</u>
				</div>
				<ul>
					<li>
						<b>Reconnect naturally:</b>
						Be friendly and say hello when you see that person again, and follow up with something you previously discussed to show interest.
					</li>
					<li>
						<b>Suggest an activity:</b>
						Choose something simple, and invite them to something simple, once you feel comfortable with it.
						<br/>
						For example:
						<ul>
							<li>
								"Would you like to have lunch together?"
							</li>
							<li>
								"Do you want to study together for the next exam?"
							</li>
							<li>
								"Would you want to hang out to do some sports?"
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<br/>
			<NoteBox>
				<p>
					You may not like everyone, and some people may not feel comfortable with you. Do not lock yourself in for one failure. If one does not work, you still have many other options left just around you.
				</p>
			</NoteBox>

			<section>
				<h2 id="every-friendship-start-somewhere" class="subtitle nowrap">
					Every friendship must start somewhere
				</h2>
				<p>
					Making friends at university is not always as simple as showing up to opportunities for socialization. Although these opportunities expose students to new people, the real challenge is knowing how and when to approach others and how to transform those connections. By understanding communication barriers, and becoming familiarized with starting genuine conversations, new students can gradually become more comfortable connecting with others. 
				</p>
			</section>
			<section>
				<h2 id="references">References</h2>
				<ReferenceList :references="references"/>
			</section>
		</main>
	</div>
</template>

<style scoped>
.main-box {
	display: flex;
	flex-direction: row-reverse;
	align-items: flex-start;
	gap: 1rem;
	max-width: 80rem;
	margin: 0 auto;
	padding: 3rem 2rem;
}

.navbar {
	display: block;
	flex-shrink: 2;
	position: sticky;
	top: 6rem;
	right: 2rem;
	min-width: 10rem;
	margin-top: 3rem;
	font-size: 0.85em;
	list-style-type: disclosure-closed;
}

.navbar :deep(ul) {
	list-style-type: square;
}

.navbar :deep(li) {
	--color-active: var(--color-text);
	color: #bfb;
}

.navbar :deep(li.active) {
	color: var(--color-active);
}

.navbar :deep(li.active) > a {
	text-decoration: none !important;
	color: var(--color-active);
}

main {
	flex-shrink: 7;
	max-width: 56rem;
}

section {
	margin-top: 2rem;
}

p {
	text-indent: 3em;
}

ul {
	padding-inline-start: 3em;
}

.image-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;
}

.image-box img {
	width: 100%;
}

.image-desc {
	margin-top: 0.4rem;
	text-align: center;
	font-size: 0.75rem;
	font-weight: 200;
	color: var(--color-text);
}

.subtitle {
	margin-top: 2rem;
	margin-bottom: 1em;
	color: var(--color-heading);
}

.big-first-letter::first-letter {
	font-size: 200%;
}

@keyframes step-header-anim {
	from {
		width: var(--animation-start-width);
		opacity: 0;
	}
	to {
		width: var(--animation-end-width);
		opacity: 1;
	}
}

.step-header {
	--animation-start-width: 3em;
	--animation-end-width: min(23em, 100% + 1em);
	line-height: 2.5;
	width: var(--animation-start-width);
	position: relative;
	opacity: 0;
	animation: 0.7s ease-out step-header-anim forwards;
	timeline-trigger: --scroll-trigger view(y -10000vh 0) contain / cover;
  animation-trigger: --scroll-trigger play-forwards reset;
}

.step-header::before {
	content: " ";
	display: block;
	position: absolute;
	inset: 0;
	z-index: -100;
	margin-left: -1em;
	background: #23dd23b8;
	transform: skewX(-20deg);
}

.card-col-box {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1rem;
}

.card-row-box {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	width: 100%;
}

.card {
	padding: 1em;
	background: var(--color-background-mute);
	transition: transform 0.2s;
}

.card-col-box > .card {
	width: 100%;
}

.card-row-box > .card {
	width: calc(100% / 3 - 1rem);
}

.hover-enlarge > .card:hover {
	transform: scale(1.2);
	box-shadow: #888 0 0 8px;
}

.card > .card-title {
	font-weight: bold;
	text-align: center;
	margin-bottom: 1em;
}

.card > p {
	font-size: 0.9em;
	text-indent: 2em;
}

.first-hello-difficulty-table {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: 1fr;
}

.first-hello-difficulty-table > div {
	padding: 1em;
}

.first-hello-difficulty-table, .first-hello-difficulty-table > div {
	border: 0.5px solid var(--color-border);
	border-collapse: collapse;
}

@media (max-width: 800px) {
	.main-box {
		display: block;
		width: 100vw;
	}

	.navbar {
		display: none;
	}

	.subtitle {
		font-size: 1.0rem;
	}

	.card-row-box {
		display: grid;
		grid-auto-rows: 1fr;
		gap: 1rem;
	}

	.card-row-box > .card {
		width: 100%;
	}

	.first-hello-difficulty-table {
		grid-template-columns: 1fr;
	}
}

</style>
