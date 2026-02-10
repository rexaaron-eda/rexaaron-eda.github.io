<template>
	<div id="app" class="min-h-screen text-gray-800 bg-linear-to-b from-pink-50 to-pink-100">
		<!-- Header/Navigation -->
		<header class="sticky top-0 z-50 shadow-md bg-white/90 backdrop-blur-sm">
			<nav class="container mx-auto px-4 py-4">
				<div class="flex flex-col sm:flex-row justify-between items-center gap-4">
					<!-- Logo & Client Info -->
					<div class="flex flex-col sm:flex-row items-center gap-4">
						<div class="flex items-center space-x-3">
							<i class="bx bx-heart-circle text-4xl text-pink-500 animate-heartbeat"></i>
							<div class="text-center sm:text-left">
								<h1 class="text-2xl md:text-3xl font-bold text-pink-600 font-poppins">Heartbeat Harmony</h1>
								<p class="text-sm text-pink-400 mt-1">Small Actions, Big Changes</p>
							</div>
						</div>

						<!-- Client Info Banner -->
						<div class="bg-pink-50 border border-pink-200 rounded-xl px-4 py-2">
							<p class="text-sm text-pink-700">
								<span class="font-semibold">Hi I'm</span> Rex Aaron Eda
							</p>
							<p class="text-xs text-pink-500">Grade 12 STEM Student</p>
						</div>
					</div>

					<!-- Navigation Links (Scroll to sections) -->
					<div class="flex flex-wrap justify-center gap-2">
						<button
								v-for="section in sections"
								:key="section.id"
								@click="scrollToSection(section.id)"
								:class="['px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1',
                activeSection === section.id ? 'bg-pink-500 text-white' : 'text-pink-600 hover:bg-pink-100']">
							<i :class="section.icon"></i>
							{{ section.name }}
						</button>
					</div>
				</div>
			</nav>
		</header>

		<!-- Hero Section -->
		<section id="home" class="container mx-auto px-4 py-12 md:py-20">
			<div class="flex flex-col lg:flex-row items-center gap-12">
				<div class="lg:w-1/2">
					<div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
						<div class="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6">
							<i class="bx bx-bullseye"></i>
							<span class="font-semibold">Topic: Social Change Advocacy</span>
						</div>

						<h2 class="text-4xl md:text-5xl font-bold text-pink-700 mb-6 font-poppins">
							Creating Ripples of <span class="text-pink-500">Positive Change</span>
						</h2>

						<p class="text-lg text-gray-700 mb-8">
							Welcome to Heartbeat Harmony, where we believe that <span class="font-semibold text-pink-600">every small action matters</span>.
							Through compassionate advocacy and community engagement, we're building a movement that transforms
							concern into meaningful social change.
						</p>

						<div class="flex flex-wrap gap-4">
							<button
									@click="scrollToSection('mission')"
									class="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-pink-600 hover:shadow-lg hover:-translate-y-1">
								<i class="bx bx-rocket"></i>
								Explore Our Mission
							</button>

							<button class="px-6 py-3 bg-white border-2 border-pink-300 text-pink-700 font-semibold rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-pink-50 hover:shadow-lg hover:-translate-y-1">
								<i class="bx bx-heart"></i>
								Join the Movement
							</button>
						</div>
					</div>
				</div>

				<div class="lg:w-1/2 flex justify-center">
					<div class="relative">
						<!-- Animated decorative elements -->
						<div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-br from-pink-200 to-pink-300 flex items-center justify-center animate-pulse">
							<i class="bx bx-world text-pink-600 text-8xl"></i>
						</div>

						<!-- Floating icons around main circle -->
						<div class="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-pink-400 flex items-center justify-center animate-bounce-slow">
							<i class="bx bx-happy-heart-eyes text-white text-3xl"></i>
						</div>
						<div class="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-pink-500 flex items-center justify-center animate-bounce-slow"
						     style="animation-delay: 0.5s;">
							<i class="bx bx-hand text-white text-4xl"></i>
						</div>
						<div class="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-pink-300 flex items-center justify-center animate-bounce-slow"
						     style="animation-delay: 1s;">
							<i class="bx bx-leaf text-white text-2xl"></i>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section id="about" ref="aboutSection" class="container mx-auto px-4 py-16">
			<div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
				<div class="flex items-center gap-4 mb-10">
					<div class="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
						<i class="bx bx-info-circle text-pink-600 text-2xl"></i>
					</div>
					<h2 class="text-3xl md:text-4xl font-bold text-pink-700 font-poppins">About Heartbeat Harmony</h2>
				</div>

				<div class="grid md:grid-cols-2 gap-8 mb-12">
					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<i class="bx bx-calendar-heart text-pink-500 text-2xl mt-1"></i>
							<div>
								<h3 class="text-xl font-bold text-pink-700 mb-2">Our Origin Story</h3>
								<p class="text-gray-600">
									Heartbeat Harmony was born from the belief that sustainable change begins with individual action.
									What started as a student-led initiative has grown into a global advocacy platform connecting
									passionate individuals with meaningful causes.
								</p>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<i class="bx bx-target-lock text-pink-500 text-2xl mt-1"></i>
							<div>
								<h3 class="text-xl font-bold text-pink-700 mb-2">Our Approach</h3>
								<p class="text-gray-600">
									We combine <span class="font-semibold text-pink-600">grassroots activism</span> with
									<span class="font-semibold text-pink-600">strategic partnerships</span> to address social issues
									at both local and global levels. Our focus is on creating sustainable solutions through
									education, empowerment, and community collaboration.
								</p>
							</div>
						</div>
					</div>

					<div class="bg-linear-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
						<h3 class="text-xl font-bold text-pink-700 mb-4 flex items-center gap-2">
							<i class="bx bx-stats"></i>
							Our Impact in Numbers
						</h3>
						<div class="grid grid-cols-2 gap-4">
							<div v-for="stat in stats" :key="stat.id" class="text-center bg-white rounded-xl p-4 shadow-sm">
								<div class="text-3xl font-bold text-pink-600 mb-1">{{ stat.value }}</div>
								<div class="text-sm text-pink-700">{{ stat.label }}</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Core Values -->
				<div>
					<h3 class="text-2xl font-bold text-pink-700 mb-8 text-center">Our Core Values</h3>
					<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						<div v-for="value in values"
						     :key="value.id"
						     class="bg-pink-50 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-pink-100 hover:shadow-lg hover:-translate-y-1">
							<div class="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center mx-auto mb-4">
								<i :class="value.icon + ' text-pink-600 text-2xl'"></i>
							</div>
							<h4 class="text-lg font-bold text-pink-700 mb-2">{{ value.title }}</h4>
							<p class="text-sm text-gray-600">{{ value.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Vision Section -->
		<section id="vision" ref="visionSection" class="container mx-auto px-4 py-16">
			<div class="bg-linear-to-br from-pink-500 to-pink-600 rounded-3xl p-8 md:p-12 shadow-xl">
				<div class="flex items-center gap-4 mb-10">
					<div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
						<i class="bx bx-planet text-white text-2xl"></i>
					</div>
					<h2 class="text-3xl md:text-4xl font-bold text-white font-poppins">Our Vision</h2>
				</div>

				<div class="mb-8">
					<h3 class="text-2xl font-bold text-white mb-6 text-center">
						A World Where Every Heartbeat Creates Harmony
					</h3>
					<p class="text-lg text-white/90 text-center max-w-3xl mx-auto mb-12">
						We envision a future where compassion drives action, equity replaces inequality,
						and communities thrive in sustainable harmony through collective effort and mutual respect.
					</p>
				</div>

				<div class="grid md:grid-cols-2 gap-8">
					<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
						<h4 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
							<i class="bx bx-rocket"></i>
							2030 Vision Goals
						</h4>
						<ul class="space-y-4">
							<li v-for="goal in visionGoals" :key="goal.id" class="flex items-start gap-3">
								<i class="bx bx-check-circle text-white text-xl mt-1"></i>
								<div>
									<span class="font-semibold text-white">{{ goal.title }}</span>
									<p class="text-white/80 text-sm mt-1">{{ goal.description }}</p>
								</div>
							</li>
						</ul>
					</div>

					<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
						<h4 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
							<i class="bx bx-bulb"></i>
							Future Initiatives
						</h4>
						<ul class="space-y-4">
							<li class="flex items-start gap-3">
								<i class="bx bx-globe text-white text-xl mt-1"></i>
								<div>
									<span class="font-semibold text-white">Global Youth Network</span>
									<p class="text-white/80 text-sm mt-1">Connecting young changemakers across 50+ countries by 2025</p>
								</div>
							</li>
							<li class="flex items-start gap-3">
								<i class="bx bx-leaf text-white text-xl mt-1"></i>
								<div>
									<span class="font-semibold text-white">Climate Action Hub</span>
									<p class="text-white/80 text-sm mt-1">Establishing community-led environmental protection programs</p>
								</div>
							</li>
							<li class="flex items-start gap-3">
								<i class="bx bx-book text-white text-xl mt-1"></i>
								<div>
									<span class="font-semibold text-white">Education Access Program</span>
									<p class="text-white/80 text-sm mt-1">Providing resources for underserved communities worldwide</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Mission Section -->
		<section id="mission" ref="missionSection" class="container mx-auto px-4 py-16">
			<div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
				<div class="flex items-center gap-4 mb-10">
					<div class="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
						<i class="bx bx-bullseye text-pink-600 text-2xl"></i>
					</div>
					<h2 class="text-3xl md:text-4xl font-bold text-pink-700 font-poppins">Our Mission</h2>
				</div>

				<div class="mb-12">
					<p class="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-10">
						To <span class="font-bold text-pink-600">empower individuals and communities</span> with the tools,
						knowledge, and connections needed to drive sustainable social change through
						compassionate action and collective advocacy.
					</p>

					<!-- Mission Components -->
					<div class="grid md:grid-cols-3 gap-8">
						<div v-for="item in missionItems"
						     :key="item.id"
						     class="bg-linear-to-b from-pink-50 to-white rounded-2xl p-6 border border-pink-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
							<div class="w-16 h-16 rounded-full flex items-center justify-center mb-4"
							     :style="{ backgroundColor: `var(--${item.bgColor.split('-')[1]}-${item.bgColor.split('-')[2]})` }">
								<i :class="item.icon + ' text-2xl'"
								   :style="{ color: `var(--${item.iconColor.split('-')[1]}-${item.iconColor.split('-')[2]})` }"></i>
							</div>
							<h3 class="text-xl font-bold text-pink-700 mb-3">{{ item.title }}</h3>
							<p class="text-gray-600">{{ item.description }}</p>
						</div>
					</div>
				</div>

				<!-- Call to Action -->
				<div class="bg-linear-to-r from-pink-100 to-pink-50 rounded-2xl p-8 text-center">
					<h3 class="text-2xl font-bold text-pink-700 mb-4">Ready to Make a Difference?</h3>
					<p class="text-gray-600 mb-6 max-w-2xl mx-auto">
						Join our community of changemakers and start creating positive impact today.
					</p>
					<div class="flex flex-wrap justify-center gap-4">
						<button class="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-pink-600 hover:shadow-lg hover:-translate-y-1">
							<i class="bx bx-user-plus"></i>
							Become a Volunteer
						</button>
						<button class="px-6 py-3 bg-white border-2 border-pink-300 text-pink-700 font-semibold rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-pink-50 hover:shadow-lg hover:-translate-y-1">
							<i class="bx bx-donate-heart"></i>
							Support Our Work
						</button>
						<button class="px-6 py-3 bg-pink-100 text-pink-700 font-semibold rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-pink-200 hover:shadow-lg hover:-translate-y-1">
							<i class="bx bx-share-alt"></i>
							Spread Awareness
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="bg-linear-to-b from-pink-700 to-pink-800 text-white mt-20">
			<div class="container mx-auto px-4 py-12">
				<div class="flex flex-col md:flex-row justify-between items-center gap-8">
					<div class="text-center md:text-left">
						<div class="flex items-center gap-3 mb-4 justify-center md:justify-start">
							<i class="bx bx-heart-circle text-3xl text-pink-300"></i>
							<div>
								<h2 class="text-2xl font-bold font-poppins">Heartbeat Harmony</h2>
								<p class="text-pink-300">Small Actions, Big Changes</p>
							</div>
						</div>
						<p class="text-pink-200 max-w-md">
							A social change advocacy platform dedicated to creating positive impact
							through community action and compassionate leadership.
						</p>
					</div>

					<div class="text-center">
						<div class="bg-pink-900/50 rounded-xl p-4 mb-4 inline-block">
							<p class="text-sm">Project by <span class="font-bold">Rex Aaron Eda</span></p>
							<p class="text-xs text-pink-300">Grade 12 STEM Student</p>
						</div>
						<div class="flex gap-4 justify-center">
							<a v-for="social in socialLinks"
							   :key="social.id"
							   :href="social.url"
							   target="_blank"
							   class="w-10 h-10 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-300 hover:bg-pink-600 transition-colors">
								<i :class="social.icon + ' text-xl'"></i>
							</a>
						</div>
					</div>
				</div>

				<div class="border-t border-pink-600 mt-8 pt-6 text-center text-pink-300 text-sm">
					<p>© {{ currentYear }} Heartbeat Harmony. All rights reserved. | Made with
						<i class="bx bx-heart text-red-400"></i> for a better world</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from 'vue'

// Types
interface Section {
	id: string
	name: string
	icon: string
}

interface Stat {
	id: number
	value: string
	label: string
}

interface Value {
	id: number
	title: string
	icon: string
	description: string
}

interface VisionGoal {
	id: number
	title: string
	description: string
}

interface MissionItem {
	id: number
	title: string
	description: string
	icon: string
	bgColor: string
	iconColor: string
}

interface SocialLink {
	id: number
	platform: string
	icon: string
	url: string
}

// Reactive state
const activeSection = ref<string>('home')
const aboutSection = ref<HTMLElement | null>(null)
const visionSection = ref<HTMLElement | null>(null)
const missionSection = ref<HTMLElement | null>(null)

// Data
const sections = ref<Section[]>([
	{id: 'home', name: 'Home', icon: 'bx bx-home'},
	{id: 'about', name: 'About', icon: 'bx bx-info-circle'},
	{id: 'vision', name: 'Vision', icon: 'bx bx-planet'},
	{id: 'mission', name: 'Mission', icon: 'bx bx-bullseye'}
])

const stats = ref<Stat[]>([
	{id: 1, value: '2,500+', label: 'Volunteers'},
	{id: 2, value: '45+', label: 'Countries'},
	{id: 3, value: '150+', label: 'Projects'},
	{id: 4, value: '10K+', label: 'Lives Impacted'}
])

const values = ref<Value[]>([
	{
		id: 1,
		title: 'Compassion',
		icon: 'bx bx-heart',
		description: 'Leading with empathy in all interactions and initiatives'
	},
	{
		id: 2,
		title: 'Inclusion',
		icon: 'bx bx-world',
		description: 'Creating spaces where everyone can contribute to change'
	},
	{id: 3, title: 'Sustainability', icon: 'bx bx-leaf', description: 'Focusing on long-term solutions, not quick fixes'},
	{id: 4, title: 'Transparency', icon: 'bx bx-show', description: 'Maintaining openness in operations and decisions'}
])

const visionGoals = ref<VisionGoal[]>([
	{
		id: 1,
		title: 'Youth Empowerment',
		description: 'Establish leadership programs for 10,000 young changemakers by 2025'
	},
	{id: 2, title: 'Climate Justice', description: 'Support 100+ communities with climate adaptation resources by 2026'},
	{id: 3, title: 'Digital Advocacy', description: 'Connect 1 million advocates through our online platform by 2027'},
	{
		id: 4,
		title: 'Sustainable Funding',
		description: 'Develop social enterprises that fund 100% of advocacy work by 2030'
	}
])

const missionItems = ref<MissionItem[]>([
	{
		id: 1,
		title: 'Education & Resources',
		description: 'Providing accessible tools and knowledge to empower effective advocacy at all levels.',
		icon: 'bx bx-book-alt',
		bgColor: 'bg-pink-100',
		iconColor: 'text-pink-600'
	},
	{
		id: 2,
		title: 'Community Building',
		description: 'Fostering supportive networks that amplify individual impact through collective action.',
		icon: 'bx bx-network-chart',
		bgColor: 'bg-pink-200',
		iconColor: 'text-pink-700'
	},
	{
		id: 3,
		title: 'Action Campaigns',
		description: 'Designing targeted initiatives that transform awareness into measurable positive outcomes.',
		icon: 'bx bx-target-lock',
		bgColor: 'bg-pink-300',
		iconColor: 'text-pink-800'
	}
])

const socialLinks = ref<SocialLink[]>([
	{id: 1, platform: 'facebook', icon: 'bx bxl-facebook', url: 'https://facebook.com'},
	{id: 2, platform: 'twitter', icon: 'bx bxl-twitter', url: 'https://twitter.com'},
	{id: 3, platform: 'instagram', icon: 'bx bxl-instagram', url: 'https://instagram.com'},
	{id: 4, platform: 'youtube', icon: 'bx bxl-youtube', url: 'https://youtube.com'}
])

// Computed properties
const currentYear = computed(() => new Date().getFullYear())

// Methods
const scrollToSection = (sectionId: string): void => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({behavior: 'smooth'})
		activeSection.value = sectionId
	}
}

const handleScroll = (): void => {
	const scrollPosition = window.scrollY + 100

	// Get section positions
	const sections = [
		{id: 'home', element: document.getElementById('home')},
		{id: 'about', element: aboutSection.value},
		{id: 'vision', element: visionSection.value},
		{id: 'mission', element: missionSection.value}
	]

	// Find which section is currently in view
	for (let i = sections.length - 1; i >= 0; i--) {
		const section = sections[i]!
		if (section.element && scrollPosition >= section.element.offsetTop) {
			activeSection.value = section.id
			break
		}
	}
}

// Lifecycle hooks
onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
@keyframes heartbeat {
	0% {
		transform: scale(1);
	}
	5% {
		transform: scale(1.1);
	}
	10% {
		transform: scale(1);
	}
	15% {
		transform: scale(1.1);
	}
	20% {
		transform: scale(1);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes bounce-slow {
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10px);
	}
}

.animate-heartbeat {
	animation: heartbeat 1.5s ease-in-out infinite;
}

.animate-bounce-slow {
	animation: bounce-slow 2s ease-in-out infinite;
}

.animate-pulse {
	animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
	0%, 100% {
		opacity: 1;
	}
	50% {
		opacity: 0.8;
	}
}

.font-poppins {
	font-family: 'Poppins', sans-serif;
}

/* Pink color definitions for Tailwind v4 */
:root {
	--pink-50: #fdf2f8;
	--pink-100: #fce7f3;
	--pink-200: #fbcfe8;
	--pink-300: #f9a8d4;
	--pink-400: #f472b6;
	--pink-500: #ec4899;
	--pink-600: #db2777;
	--pink-700: #be185d;
	--pink-800: #9d174d;
	--pink-900: #831843;
}

/* Utility classes */
.bg-pink-50 {
	background-color: var(--pink-50);
}

.bg-pink-100 {
	background-color: var(--pink-100);
}

.bg-pink-200 {
	background-color: var(--pink-200);
}

.bg-pink-300 {
	background-color: var(--pink-300);
}

.bg-pink-400 {
	background-color: var(--pink-400);
}

.bg-pink-500 {
	background-color: var(--pink-500);
}

.bg-pink-600 {
	background-color: var(--pink-600);
}

.bg-pink-700 {
	background-color: var(--pink-700);
}

.bg-pink-800 {
	background-color: var(--pink-800);
}

.bg-pink-900 {
	background-color: var(--pink-900);
}

.text-pink-50 {
	color: var(--pink-50);
}

.text-pink-100 {
	color: var(--pink-100);
}

.text-pink-200 {
	color: var(--pink-200);
}

.text-pink-300 {
	color: var(--pink-300);
}

.text-pink-400 {
	color: var(--pink-400);
}

.text-pink-500 {
	color: var(--pink-500);
}

.text-pink-600 {
	color: var(--pink-600);
}

.text-pink-700 {
	color: var(--pink-700);
}

.text-pink-800 {
	color: var(--pink-800);
}

.text-pink-900 {
	color: var(--pink-900);
}

.border-pink-100 {
	border-color: var(--pink-100);
}

.border-pink-200 {
	border-color: var(--pink-200);
}

.border-pink-300 {
	border-color: var(--pink-300);
}

.border-pink-600 {
	border-color: var(--pink-600);
}

/* Gradient utilities */
.bg-gradient-to-b {
	background-image: linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to));
}

.bg-gradient-to-br {
	background-image: linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to));
}

.bg-gradient-to-r {
	background-image: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to));
}

.from-pink-50 {
	--tw-gradient-from: var(--pink-50);
}

.from-pink-100 {
	--tw-gradient-from: var(--pink-100);
}

.from-pink-200 {
	--tw-gradient-from: var(--pink-200);
}

.from-pink-300 {
	--tw-gradient-from: var(--pink-300);
}

.from-pink-500 {
	--tw-gradient-from: var(--pink-500);
}

.from-pink-700 {
	--tw-gradient-from: var(--pink-700);
}

.to-pink-100 {
	--tw-gradient-to: var(--pink-100);
}

.to-pink-300 {
	--tw-gradient-to: var(--pink-300);
}

.to-pink-600 {
	--tw-gradient-to: var(--pink-600);
}

.to-pink-800 {
	--tw-gradient-to: var(--pink-800);
}

.to-white {
	--tw-gradient-to: #ffffff;
}

/* Container utilities */
.container {
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 1rem;
	padding-left: 1rem;
}

@media (min-width: 640px) {
	.container {
		max-width: 640px;
	}
}

@media (min-width: 768px) {
	.container {
		max-width: 768px;
	}
}

@media (min-width: 1024px) {
	.container {
		max-width: 1024px;
	}
}

@media (min-width: 1280px) {
	.container {
		max-width: 1280px;
	}
}
</style>