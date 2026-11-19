<script setup lang="ts">
import ReferenceList from '@/components/ReferenceList.vue';
import ReferenceMark from '@/components/ReferenceMark.vue';
import NoteBox from '@/components/NoteBox.vue';

import type { Reference } from '@/components/ReferenceList.vue';

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
		desc: 'Stahl, G., & McDonald, S. (2024). ‘I’d rather not bring any attention to myself’: Shyness and belonging(s) during the first-year university experience. Research in Post-Compulsory Education, 29(1), 45–63.',
		link: 'https://doi.org/10.1080/13596748.2023.2285629',
	},
]

</script>

<template>
	<main>
		<div class="text-center">
			<h1>
				How to Initiate Conversation in a New Environment
			</h1>
			<h2>
				A Guide for First-year Students
			</h2>
		</div>
		<h2 class="subtitle nowrap big-first-letter">
			Congratulations on starting university!
		</h2>
		<p>
			Starting university is an exciting experience and offers numerous opportunities to socialize, but being in a new environment can easily feel isolating and overwhelming. While universities provide numerous opportunities to socialize, knowing where to meet people is drastically different from knowing how to approach them. Do you find it hard to start a conversation because of language barriers, cultural differences, or overthinking? 
		</p>
		<br/>
		<p>
			Making friends is not just about finding the opportunities for socialization, but knowing how to turn them into connections. Follow this guide to learn how to approach others from the first step.
		</p>

		<h2 class="subtitle nowrap">
			First of all, why is making friends so difficult?
		</h2>
		<p>
			For many first-year students, the biggest challenge to building connections is <i>not lack of interest, but uncertainty regarding how to initiate conversations.</i>
		</p>
		<div class="subtitle nowrap">
			<u>Common barriers include:</u>
		</div>
		<ul>
			<li>
				<b>Low self-confidence:</b>
				Students who doubt their own social skills often assume others would be uninterested in forming a connection.
				<ReferenceMark :i="1"/>
			</li>
			<li>
				<b>Shyness/social anxiety:</b>
				Meeting new people can feel intimidating, even when students genuinely want to build new friendships.
				<ReferenceMark :i="3"/>
			</li>
			<li>
				<b>Fear of rejection:</b>
				Students may worry about being judged or disliked, and feel discouraged when approaching someone new.
			</li>
			<li>
				<b>Overthinking and fear of awkwardness:</b>
				Students may feel self-conscious and frequently worry about how to approach others and what to say. They may also avoid conversing with others to reduce awkwardness.
			</li>
			<li>
				<b>Language and cultural differences:</b>
				University is like a small community which includes people from various cultures and backgrounds. Students with different languages may find it difficult to communicate or scared they may offend others culturally.
			</li>
		</ul>
		<br/>
		<p>
			If any of these experiences sound familiar, know that you are not alone. Understanding these barriers and recognizing how they make socializing difficult is the first step to overcoming them. While clubs and events provide opportunities to meet people, students may still struggle to take that first step. This guide aims to bridge that gap by providing a few clear step-by-step strategies and plausible scenarios to help students confidently reach out to others, and gradually turn those interactions into meaningful friendships. 
		</p>

		<h2 class="subtitle nowrap step-header">
			Step 1: Approaching at the right moment
		</h2>
		<p>
			Starting a conversation becomes easier when you choose the right moment and environment. Instead of randomly approaching a stranger, choose natural opportunities for interaction that makes having a conversation feel comfortable for both people.
			<ReferenceMark :i="2"/>
		</p>
		<div class="subtitle">
			<u>Before approaching someone, look to see if you notice these signs:</u>
		</div>
		<div class="card-box">
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

		<h2 class="subtitle nowrap step-header">
			Step 2: What to say and do
		</h2>
		<p>
			Once you have found the right moment, what should you do next? There is no strict template you have to follow to talk to others, and you cannot predict how others will respond. Having a few simple conversation starters prepared can help you approach others with more confidence.
		</p>
		<ul>
			<li>
				Starting a casual conversation before a lecture or a lab:
				<ul><li>Say: "Good morning/afternoon" and share your feelings or recent experiences.</li></ul>
			</li>
			<li>
				Finding people who look familiar (faces/ accent/ outfit/ etc.)
				<ul><li>Say: "Hey I think I’ve seen you from somewhere before, where are you from?"</li></ul>
			</li>
			<li>
				Noticing a shared interest (such as the other person wearing a band’s specific shirt):
				<ul><li>Say: "I love your shirt! I am also a fan [of that artist]! What is your favourite album?"</li></ul>
			</li>
		</ul>
		<div class="subtitle">
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
		<div class="subtitle nowrap">
			But what if the conversation turns awkward?
		</div>
		<ul>
			<li>
				<b>The good news:</b>
				It is normal to have awkward moments while making new friends. However, these experiences should not push you off from the road, instead, they are the stones building your path. Everyone will have these experiences, and they will understand your feelings.
			</li>
		</ul>

		<h2 class="subtitle nowrap step-header">
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
		<br/>
		<NoteBox>
			<p>
				You may not like everyone, and some people may not feel comfortable with you. Do not lock yourself in for one failure. If one does not work, you still have many other options left just around you.
			</p>
		</NoteBox>

		<h2 class="subtitle nowrap">
			Every friendship must start somewhere
		</h2>
		<p>
			Making friends at university is not always as simple as showing up to opportunities for socialization. Although these opportunities expose students to new people, the real challenge is knowing how and when to approach others and how to transform those connections. By understanding communication barriers, and becoming familiarized with starting genuine conversations, new students can gradually become more comfortable connecting with others. 
		</p>
		<div class="references">
			<h2>References</h2>
			<ReferenceList :references="references"/>
		</div>
	</main>
</template>

<style scoped>

main {
	max-width: 60rem;
	margin: 0 auto;
	padding: 3rem 2rem;
}

p {
	text-indent: 3em;
}

ul {
	padding-inline-start: 3em;
}

.subtitle {
	margin-top: 2em;
	margin-bottom: 1em;
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
	--animation-end-width: 23em;
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
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: -100;
	margin-left: -1em;
	background: #8d8;
	transform: skewX(-30deg);
}

.card-box {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	width: 100%;
}

.card {
	width: calc(100% / 3 - 1rem);
	padding: 1em;
	background: #eee;
	transition: transform 0.2s;
}

.card:hover {
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

.references {
	margin-top: 2em;
}

@media (max-width: 800px) {
	.card-box {
		display: grid;
		grid-auto-rows: 1fr;
		gap: 1rem;
	}
	.card {
		width: 100%;
	}
}

</style>
