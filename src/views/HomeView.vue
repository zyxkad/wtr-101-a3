<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ExpandBox from '@/components/ExpandBox.vue'
import NavBar from '@/components/NavBar.vue'
import NoteBox from '@/components/NoteBox.vue'
import ReferenceList from '@/components/ReferenceList.vue'
import ReferenceMark from '@/components/ReferenceMark.vue'
import globals from '@/globals'

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
		name: '1. Find the right moment',
		anchor: 'main-step-1',
		items: [
			{
				name: 'Positive Signs',
				anchor: 'main-step-1-positive-signs',
			}
		]
	},
	{
		name: '2. Start an exchange',
		anchor: 'main-step-2',
		items: [
			{
				name: 'What if turns awkward',
				anchor: 'main-step-2-what-if-awkward',
			},
		],
	},
	{
		name: '3. Following up',
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

const refInd = {
	'Boothby': 1,
	'Brouwer': 2,
	'Dunn': 3,
	'Hall': 4,
	'Huang': 5,
	'Pavlovic': 6,
	'Sorokowska': 7,
	'Spencer': 8,
	'Stahl': 9,
}

const references: Reference[] = [
	{
		desc: 'Boothby, E. J., Cooney, G., Sandstrom, G. M., & Clark , M. S. (2018, May 15). Psychological science. SAGE Journals.',
		link: 'https://doi.org/10.1177/0956797618783714',
	},
	{
		desc: 'Brouwer, J., & Engels, M. C. (2021). The role of prosocial attitudes and academic achievement in peer networks in higher education. European Journal of Psychology of Education, 37(2), 567-584.',
		link: 'https://doi.org/10.1007/s10212-020-00526-w'
	},
	{
		desc: 'Dunn, J. (2026, February 27). The big benefits of small talk. The New York Times.',
		link: 'https://www.nytimes.com/2026/02/27/well/benefits-small-talk.html',
	},
	{
		desc: 'Hall, J. A. (2018). How many hours does it take to make a friend? Journal of Social and Personal Relationships, 36(4), 1278-1296.',
		link: 'https://doi.org/10.1177/0265407518761225',
	},{
		desc: 'Huang, K., Yeomans, M., Brooks, A. W., Minson, J., & Gino, F. (2017). It doesn’t hurt to ask: Question-asking increases liking. Journal of Personality and Social Psychology, 113(3), 430-452.',
		link: 'https://doi.org/10.1037/pspi0000097',
	},
	{
		desc: 'Pavlovic, Z., & Jeno, L. M. (2024). Facilitating academic and social integration among first-year university students: is peer mentoring necessary or an additive measure? Mentoring & Tutoring, 32(1), 29-48.',
		link: 'https://doi.org/10.1080/13611267.2023.2290731',
	},
	{
		desc: 'Sorokowska, A., Sorokowski, P., Hilpert, P., Cantarero, K., Frackowiak, T., Ahmadi, K., Alghraibeh, A. M., Aryeetey, R., Bertoni, A., Bettache, K., Blumen, S., Błażejewska, M., Bortolini, T., Butovskaya, M., Castro, F. N., Cetinkaya, H., Cunha, D., David, D., David, O. A., ... Pierce, J. D. (2017). Preferred interpersonal distances: A global comparison. Journal of Cross-Cultural Psychology, 48(4), 577-592.',
		link: 'https://doi.org/10.1177/0022022117698039',
	},
	{
		desc: "Spencer-Oatey, H., Dauber, D., Jing, J., & Lifei, W. (2016, November 22). Chinese students' social integration into the university community: hearing the students' voices. EBSCO.",
		link: 'https://doi.org/10.1007/s10734-016-0074-0',
	},
	{
		desc: `Stahl, G., & McDonald, S. (2024). "I'd rather not bring any attention to myself": Shyness and belonging(s) during the first-year university experience. Research in Post-Compulsory Education, 29(1), 45-63.`,
		link: 'https://doi.org/10.1080/13596748.2023.2285629',
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
				<br/>
				<div class="step-header-list">
					<RouterLink to="#main-step-1" @click="globals.onHashScroll">
						① Find the right moment
					</RouterLink>
					<RouterLink to="#main-step-2" @click="globals.onHashScroll">
						② Start an exchange
					</RouterLink>
					<RouterLink to="#main-step-3" @click="globals.onHashScroll">
						③ Following up
					</RouterLink>
				</div>
			</section>

			<section>
				<h2 id="main-why-first-hello-is-difficult" class="subtitle nowrap">
					What makes the first hello so difficult?
				</h2>
				<p>
					If any of these experiences sound familiar, know that you are not alone. Understanding these barriers and recognizing how they make socializing difficult is the first step to overcoming them.
					<ReferenceMark :i="refInd['Boothby']"/>
					<ReferenceMark :i="refInd['Stahl']"/>
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
					Choose a setting where you already share something, such as the same lab, club, or residence hall. Instead of randomly approaching a stranger, choose <b>natural opportunities</b> for interaction that makes having a conversation feel <b>comfortable for both people</b>.
					<ReferenceMark :i="refInd['Dunn']"/>
				</p>
				<NoteBox>
					Research suggests that first-year integration brings many opportunities to interact in academic settings, and even brief interactions with classmates have been associated with producing greater senses of belonging.
					<ReferenceMark :i="refInd['Pavlovic']"/>
				</NoteBox>
				<br/>
				<div class="blue-board">
					Looking for a place to meet new people and not sure where to start? Explore the University of Alberta Student Groups page to find a club that interests you:
					<a href="https://www.su.ualberta.ca/this-is-how-you-get-involved/student-groups/">
						www.su.ualberta.ca/this-is-how-you-get-involved/student-groups/
					</a>
				</div>
				<div id="main-step-1-positive-signs" class="subtitle">
					<u>There are some good signs you can look for before approaching someone:</u>
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
							<ReferenceMark :i="refInd['Dunn']"/>
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2 id="main-step-2" class="subtitle nowrap step-header">
					Step 2: What to say and do
				</h2>
				<p>
					Once you have found the right moment, what should you do next? You do not need to have the perfect opening line. A friendly opening works best when you <b>notice something relevant, acknowledge, ask a question, and share a bit about yourself</b>.
					<ReferenceMark :i="refInd['Dunn']"/>
					Having a few simple conversation starters prepared can help you approach others with more confidence.
					Such as:
				</p>
				<div class="card-col-box">
					<div class="card">
						<ExpandBox>
							<template #summary>
								In a lecture, you may say
							</template>
							<template #content>
								"Hey I think I’ve seen you here before. How are you finding this class so far?"
							</template>
						</ExpandBox>
					</div>
					<div class="card">
						<ExpandBox>
							<template #summary>
								At a club meeting, you may say
							</template>
							<template #content>
								"I’m new here. What do you guys normally do during meetings?"
							</template>
						</ExpandBox>
					</div>
				</div>
				<div>
					Starting with a relevant topic can make it easier for conversation flow and shared enthusiasm,
					<ReferenceMark :i="refInd['Dunn']"/>
					while asking a question suggests genuine interest.
					<ReferenceMark :i="refInd['Boothby']"/>
				</div>
				<br/>
				<div class="blue-board">
					Remember to keep it genuine! An action such as asking for study notes right away, can sound transactional.
					<ReferenceMark :i="refInd['Brouwer']"/>
				</div>
				<br/>
				<NoteBox title="Important">
					<b>Respect personal space:</b>
					A study involving 8943 participants from 42 countries found that interpersonal distance preferences <b>varied across countries</b>.
					<ReferenceMark :i="refInd['Sorokowska']"/>
					When approaching someone new, make sure to give them enough personal space!
				</NoteBox>
				<div id="main-step-2-what-if-awkward" class="subtitle nowrap">
					But what if the conversation turns awkward?
				</div>
				<div class="green-board">
					<b>The good news:</b>
					It is normal to have awkward moments while making new friends, and a pause or jumbled words doesn’t mean the end of the world. Studies based on the "liking gap" have shown people often underestimate how much the other person enjoyed conversing with them. 
					<ReferenceMark :i="refInd['Boothby']"/>
					So try not to judge an interaction purely by your own nerves.
				</div>
			</section>

			<section>
				<h2 id="main-step-3" class="subtitle nowrap step-header">
					Step 3: Turn One Conversation Into Two
				</h2>
				<p>
					Friendships rarely appear after one conversation, and research has shown it takes on average 50 hours for someone to go from being an acquaintance to being a casual friend (Hall, 2018).
				</p>
				<p>
					Try and go for a second interaction, not a best friend by the end of the week. Follow up with a small detail such as "How did your midterm go?" A 2017 study suggested that those who asked responsive follow-up questions were more likely to have another conversation.
					<ReferenceMark :i="refInd['Huang']"/>
					If the exchange feels mutual, suggest an activity that is easy to decline, such as grabbing a coffee before a lecture.
				</p>
				<br/>
				<div class="green-board">
					You may not like everyone, and some people may not feel comfortable with you. Oftentimes people avoid striking up conversations all together out of fear of rejection. However, a study suggests that people often anticipate far more rejection than they receive, as research found that 87% of the time, strangers chose to engage in a conversation.
					<ReferenceMark :i="refInd['Boothby']"/>
					<ReferenceMark :i="refInd['Dunn']"/>
				</div>
			</section>
			<br/>
			<section>
				<h2 id="every-friendship-start-somewhere" class="subtitle nowrap">
					Every friendship must start somewhere
				</h2>
				<p>
					Making friends at university is not always as simple as showing up to opportunities for socialization. Although these opportunities allow you to meet new people, the real challenge is knowing how and when to approach them, and transform those first interactions into meaningful new friendships.
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
	--color-step-header-bg: #23dd23b8;
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

.step-header-list {
	display: flex;
	flex-direction: row;
}

.step-header-list > a {
	display: block;
	position: relative;
	padding: 0.8rem;
	font-size: 1.1em;
	color: var(--color-heading);
	text-decoration: none !important;
}

.step-header-list > a:hover {
	transform: scale(1.07);
}

.step-header-list > a::before {
	content: " ";
	display: block;
	position: absolute;
	inset: 0;
	z-index: -100;
	background: var(--color-step-header-bg);
	transform: skewX(-20deg);
}

.step-header-list > a:nth-child(2) {
	top: 0.5rem;
	left: -0.3rem;
}

.step-header-list > a:nth-child(3) {
	top: -0.3rem;
	left: -0.1rem;
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
	background: var(--color-step-header-bg);
	transform: skewX(-20deg);
}

.card-col-box {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.7rem;
	margin: 0.5rem 0;
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
	width: calc(100% / 2 - 1rem);
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

.blue-board, .green-board {
	padding: 1em;
	padding-left: 2.5em;
	border-left: 0.5em solid;
}

.blue-board {
	border-left-color: #00a7ff;
	background-color: #26dcff73;
}

.green-board {
	border-left-color: #008000;
	background-color: #2ed90066;
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

	.step-header-list {
		flex-direction: column;
	}

	.step-header-list > a:hover {
		transform: translateX(1rem);
	}

	.step-header-list > a:nth-child(2) {
		top: -0.1rem;
		left: 0;
	}

	.step-header-list > a:nth-child(2)::before {
		transform: skewX(20deg);
	}

	.step-header-list > a:nth-child(3) {
		top: -0.2rem;
		left: 0;
	}

	.first-hello-difficulty-table {
		grid-template-columns: 1fr;
	}
}

</style>
