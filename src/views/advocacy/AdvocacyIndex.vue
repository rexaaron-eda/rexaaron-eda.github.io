<template>
	<div id="app" class="min-h-screen text-gray-800 bg-gradient-to-b from-pink-50 to-pink-100">
		<!-- Header -->
		<header class="sticky top-0 z-50 bg-white shadow-md">
			<div class="container mx-auto px-4 py-4">
				<!-- Main Header Row - Logo and Navigation Side by Side -->
				<div class="flex items-center justify-between">
					<!-- Logo -->
					<div class="flex items-center space-x-3">
						<i class="bx bx-heart-circle text-3xl text-pink-500 animate-heartbeat"></i>
						<div>
							<h1 class="text-xl font-bold text-pink-600">Heartbeat Harmony</h1>
							<p class="text-xs text-pink-400">Small Actions, Big Changes</p>
						</div>
					</div>

					<!-- Desktop Navigation on Right -->
					<div class="hidden md:flex items-center space-x-4">
						<div class="flex space-x-2">
							<button
									v-for="section in sections"
									:key="section.id"
									@click="scrollToSection(section.id)"
									:class="['px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2',
                  activeSection === section.id ? 'bg-pink-500 text-white' : 'text-pink-600 hover:bg-pink-100']">
								<i :class="section.icon"></i>
								<span>{{ section.name }}</span>
							</button>
						</div>

						<!-- Client Info Badge -->
						<div class="ml-4 pl-4 border-l border-pink-200">
							<div class="text-right">
								<p class="text-sm text-pink-700 font-medium">Rex Aaron Eda</p>
								<p class="text-xs text-pink-500">Grade 12 STEM</p>
							</div>
						</div>
					</div>

					<button
							@click="mobileMenuOpen = !mobileMenuOpen"
							class="md:hidden p-2 text-pink-600">
						<i :class="mobileMenuOpen ? 'bx bx-x text-2xl' : 'bx bx-menu text-2xl'"></i>
					</button>
				</div>

				<div class="md:hidden mt-3 pt-3 border-t border-pink-100">
					<div class="flex items-center justify-center space-x-2 text-sm">
						<span class="text-pink-600 font-medium">Rex Aaron Eda</span>
						<span class="text-pink-500"> • Grade 12 STEM</span>
					</div>
				</div>

				<!-- Mobile Navigation -->
				<div v-if="mobileMenuOpen" class="md:hidden mt-4 bg-pink-50 rounded-xl p-4 animate-fade-in">
					<div class="grid grid-cols-2 gap-2">
						<button
								v-for="section in sections"
								:key="section.id"
								@click="scrollToSection(section.id); mobileMenuOpen = false"
								:class="['p-3 rounded-lg font-medium flex flex-col items-center justify-center transition-colors',
                activeSection === section.id ? 'bg-pink-500 text-white' : 'bg-white text-pink-600 hover:bg-pink-100']">
							<i :class="section.icon + ' text-xl mb-1'"></i>
							<span class="text-sm">{{ section.name }}</span>
						</button>
					</div>

					<!-- Quick Actions in Mobile Menu -->
					<div class="mt-4 pt-4 border-t border-pink-200">
						<p class="text-center text-sm text-pink-700 mb-3">Quick Actions</p>
						<div class="flex gap-2">
							<button @click="scrollToSection('mission'); mobileMenuOpen = false"
							        class="flex-1 px-3 py-2 bg-pink-500 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2">
								<i class="bx bx-rocket"></i>
								Mission
							</button>
							<button @click="scrollToSection('vision'); mobileMenuOpen = false"
							        class="flex-1 px-3 py-2 bg-white border border-pink-300 text-pink-700 text-sm font-medium rounded-lg flex items-center justify-center gap-2">
								<i class="bx bx-planet"></i>
								Vision
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<main>
			<!-- Hero Section -->
			<section id="home" class="container mx-auto px-4 py-12">
				<div class="bg-white rounded-3xl p-8 shadow-xl">
					<div class="text-center mb-10">
						<!-- Tagline as main heading -->
						<h2 class="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Small Actions, Big Changes</h2>

						<!-- Subtitle explaining the tagline -->
						<p class="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
							Every small action contributes to meaningful transformation. Together, we create ripples of positive
							change.
						</p>

						<!-- Mission & Vision quick links -->
						<div class="flex flex-wrap justify-center gap-4 mb-8">
							<button @click="scrollToSection('mission')"
							        class="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors flex items-center gap-2">
								<i class="bx bx-bullseye"></i>
								Our Mission
							</button>
							<button @click="scrollToSection('vision')"
							        class="px-6 py-3 bg-white border-2 border-pink-300 text-pink-700 font-semibold rounded-full hover:bg-pink-50 transition-colors flex items-center gap-2">
								<i class="bx bx-planet"></i>
								Our Vision
							</button>
							<button @click="scrollToSection('about')"
							        class="px-6 py-3 bg-pink-100 text-pink-700 font-semibold rounded-full hover:bg-pink-200 transition-colors flex items-center gap-2">
								<i class="bx bx-info-circle"></i>
								About Us
							</button>
						</div>
					</div>

					<!-- Mission & Vision Preview Cards -->
					<div class="grid md:grid-cols-2 gap-8 mb-10">
						<!-- Mission Preview -->
						<div class="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-6">
							<div class="flex items-center gap-3 mb-4">
								<div class="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center">
									<i class="bx bx-bullseye text-pink-600 text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-pink-700">Our Mission</h3>
							</div>
							<p class="text-gray-700 mb-4">
								To empower individuals and communities to create lasting positive change through education, advocacy,
								and collective action.
							</p>
							<button @click="scrollToSection('mission')"
							        class="text-pink-600 font-medium hover:text-pink-700 transition-colors">
								Learn more about our mission →
							</button>
						</div>

						<!-- Vision Preview -->
						<div class="bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl p-6">
							<div class="flex items-center gap-3 mb-4">
								<div class="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center">
									<i class="bx bx-planet text-white text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-pink-700">Our Vision</h3>
							</div>
							<p class="text-gray-700 mb-4">
								A world where every individual thrives, communities support each other, and compassion guides our
								collective actions.
							</p>
							<button @click="scrollToSection('vision')"
							        class="text-pink-700 font-medium hover:text-pink-800 transition-colors">
								Discover our vision →
							</button>
						</div>
					</div>

					<!-- Our Core Values -->
					<div>
						<h3 class="text-2xl font-bold text-pink-700 mb-6 text-center">Our Core Values</h3>
						<div class="grid md:grid-cols-3 gap-8">
							<div class="text-center p-6">
								<div class="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
									<i class="bx bx-heart text-pink-600 text-2xl"></i>
								</div>
								<h3 class="text-xl font-bold text-pink-700 mb-2">Compassionate Action</h3>
								<p class="text-gray-600">Leading with empathy in all our initiatives and interactions.</p>
							</div>

							<div class="text-center p-6">
								<div class="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center mx-auto mb-4">
									<i class="bx bx-group text-pink-700 text-2xl"></i>
								</div>
								<h3 class="text-xl font-bold text-pink-700 mb-2">Community Focus</h3>
								<p class="text-gray-600">Building strong networks that support sustainable change.</p>
							</div>

							<div class="text-center p-6">
								<div class="w-16 h-16 rounded-full bg-pink-300 flex items-center justify-center mx-auto mb-4">
									<i class="bx bx-leaf text-white text-2xl"></i>
								</div>
								<h3 class="text-xl font-bold text-pink-700 mb-2">Sustainable Impact</h3>
								<p class="text-gray-600">Creating solutions that last for generations to come.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- About Section -->
			<section id="about" class="container mx-auto px-4 py-12">
				<div class="bg-gradient-to-r from-pink-50 to-pink-100 rounded-3xl p-8 shadow-xl">
					<div class="flex items-center mb-8">
						<i class="bx bx-info-circle text-pink-600 text-4xl mr-4"></i>
						<h2 class="text-3xl font-bold text-pink-700">About Heartbeat Harmony</h2>
					</div>

					<div class="grid md:grid-cols-2 gap-8">
						<div>
							<p class="text-gray-700 mb-6">
								Heartbeat Harmony is a social change advocacy initiative founded on the belief that small, consistent
								actions can create waves of positive transformation. We focus on empowering individuals and communities
								to become agents of change in their own contexts.
							</p>

							<div class="space-y-4">
								<div class="flex items-start">
									<i class="bx bx-check-circle text-pink-500 text-xl mt-1 mr-3"></i>
									<p class="text-gray-700">Grassroots community engagement</p>
								</div>
								<div class="flex items-start">
									<i class="bx bx-check-circle text-pink-500 text-xl mt-1 mr-3"></i>
									<p class="text-gray-700">Youth empowerment programs</p>
								</div>
								<div class="flex items-start">
									<i class="bx bx-check-circle text-pink-500 text-xl mt-1 mr-3"></i>
									<p class="text-gray-700">Environmental sustainability advocacy</p>
								</div>
							</div>
						</div>

						<div class="bg-white rounded-2xl p-6">
							<h3 class="text-xl font-bold text-pink-700 mb-4">Our Impact</h3>
							<div class="grid grid-cols-2 gap-4">
								<div class="text-center p-4">
									<div class="text-3xl font-bold text-pink-600 mb-1">2,500+</div>
									<div class="text-sm text-pink-700">Volunteers</div>
								</div>
								<div class="text-center p-4">
									<div class="text-3xl font-bold text-pink-600 mb-1">150+</div>
									<div class="text-sm text-pink-700">Projects</div>
								</div>
								<div class="text-center p-4">
									<div class="text-3xl font-bold text-pink-600 mb-1">45</div>
									<div class="text-sm text-pink-700">Countries</div>
								</div>
								<div class="text-center p-4">
									<div class="text-3xl font-bold text-pink-600 mb-1">10K+</div>
									<div class="text-sm text-pink-700">Lives Impacted</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Vision Section -->
			<section id="vision" class="container mx-auto px-4 py-12">
				<div class="bg-pink-600 text-white rounded-3xl p-8 shadow-xl">
					<div class="text-center mb-10">
						<h2 class="text-3xl font-bold mb-4">Our Vision</h2>
						<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6">
							<i class="bx bx-planet"></i>
							<span class="font-semibold">Inspired by: Small Actions, Big Changes</span>
						</div>
						<p class="text-white/90 text-lg text-center mb-8 max-w-3xl mx-auto">
							Our vision of a harmonious world starts with the belief that every small action matters.
							From individual gestures to community initiatives, we're building towards <span class="font-bold">big changes</span>
							that create lasting impact.
						</p>
					</div>

					<div class="mb-10">
						<h3 class="text-2xl font-bold mb-6 text-center">A World in Harmony</h3>
						<p class="text-white/90 text-lg text-center mb-8">
							We envision a future where every individual has the opportunity to thrive,
							where communities support each other, and where compassion guides our collective actions.
						</p>
					</div>

					<div class="grid md:grid-cols-2 gap-8">
						<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
							<h4 class="text-xl font-bold mb-4">Future Goals</h4>
							<ul class="space-y-4">
								<li class="flex items-start">
									<i class="bx bx-target-lock text-white text-xl mt-1 mr-3"></i>
									<div>
										<span class="font-semibold">Expand Youth Programs</span>
										<p class="text-white/80 text-sm mt-1">Reach 10,000 young changemakers by the end of 2026</p>
									</div>
								</li>
								<li class="flex items-start">
									<i class="bx bx-globe text-white text-xl mt-1 mr-3"></i>
									<div>
										<span class="font-semibold">Global Network</span>
										<p class="text-white/80 text-sm mt-1">Establish chapters in 100+ countries</p>
									</div>
								</li>
								<li class="flex items-start">
									<i class="bx bx-leaf text-white text-xl mt-1 mr-3"></i>
									<div>
										<span class="font-semibold">Climate Action</span>
										<p class="text-white/80 text-sm mt-1">Plant 1 million trees by 2030</p>
									</div>
								</li>
							</ul>
						</div>

						<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
							<h4 class="text-xl font-bold mb-4">Core Values</h4>
							<ul class="space-y-4">
								<li class="flex items-center">
									<i class="bx bx-heart text-white text-xl mr-3"></i>
									<span>Compassion & Empathy</span>
								</li>
								<li class="flex items-center">
									<i class="bx bx-shield text-white text-xl mr-3"></i>
									<span>Integrity & Transparency</span>
								</li>
								<li class="flex items-center">
									<i class="bx bxs-hand text-white text-xl mr-3"></i>
									<span>Inclusion & Diversity</span>
								</li>
								<li class="flex items-center">
									<i class="bx bx-trending-up text-white text-xl mr-3"></i>
									<span>Sustainable Growth</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<!-- Mission Section -->
			<section id="mission" class="container mx-auto px-4 py-12">
				<div class="bg-white rounded-3xl p-8 shadow-xl">
					<div class="flex items-center mb-8">
						<i class="bx bx-bullseye text-pink-600 text-4xl mr-4"></i>
						<h2 class="text-3xl font-bold text-pink-700">Our Mission</h2>
					</div>

					<div class="mb-10">
						<p class="text-xl text-gray-700 text-center mb-10">
							To empower individuals and communities to create lasting positive change through
							education, advocacy, and collective action.
						</p>

						<div class="grid md:grid-cols-3 gap-8">
							<div class="text-center p-6 bg-pink-50 rounded-2xl">
								<div class="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center mx-auto mb-4">
									<i class="bx bx-book-open text-pink-600 text-xl"></i>
								</div>
								<h3 class="text-lg font-bold text-pink-700 mb-2">Educate</h3>
								<p class="text-gray-600">Provide knowledge and resources for effective advocacy</p>
							</div>

							<div class="text-center p-6 bg-pink-100 rounded-2xl">
								<div class="w-12 h-12 rounded-full bg-pink-300 flex items-center justify-center mx-auto mb-4">
									<i class="bx bx-network-chart text-white text-xl"></i>
								</div>
								<h3 class="text-lg font-bold text-pink-700 mb-2">Connect</h3>
								<p class="text-gray-600">Build networks of changemakers and supporters</p>
							</div>

							<div class="text-center p-6 bg-pink-200 rounded-2xl">
								<div class="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center mx-auto mb-4">
									<i class="bx bx-rocket text-white text-xl"></i>
								</div>
								<h3 class="text-lg font-bold text-pink-700 mb-2">Activate</h3>
								<p class="text-gray-600">Mobilize communities for tangible impact</p>
							</div>
						</div>
					</div>

					<div class="text-center">
						<h3 class="text-2xl font-bold text-pink-700 mb-6">Join Our Movement</h3>
						<div class="flex flex-wrap justify-center gap-4">
							<button class="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors">
								<i class="bx bx-user-plus mr-2"></i>
								Become a Volunteer
							</button>
							<button class="px-6 py-3 bg-white border-2 border-pink-300 text-pink-700 font-semibold rounded-full hover:bg-pink-50 transition-colors">
								<i class="bx bx-donate-heart mr-2"></i>
								Make a Donation
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>

		<!-- Footer -->
		<footer class="bg-pink-700 text-white mt-12">
			<div class="container mx-auto px-4 py-8">
				<div class="text-center mb-8">
					<div class="flex items-center justify-center space-x-3 mb-4">
						<i class="bx bx-heart-circle text-3xl text-pink-300"></i>
						<div>
							<h2 class="text-2xl font-bold">Heartbeat Harmony</h2>
							<p class="text-pink-300">Small Actions, Big Changes</p>
						</div>
					</div>

					<div class="bg-pink-800/50 rounded-lg p-4 inline-block mb-6">
						<p class="font-medium">Project by <span class="font-bold">Rex Aaron Eda</span></p>
						<p class="text-pink-300 text-sm">Grade 12 STEM Student</p>
						<p class="text-pink-400 text-sm mt-1">Topic: Social Change Advocacy</p>
					</div>
				</div>

				<div class="flex justify-center space-x-6 mb-6">
					<a href="#" class="text-pink-300 hover:text-white">
						<i class="bx bxl-facebook text-2xl"></i>
					</a>
					<a href="#" class="text-pink-300 hover:text-white">
						<i class="bx bxl-twitter text-2xl"></i>
					</a>
					<a href="#" class="text-pink-300 hover:text-white">
						<i class="bx bxl-instagram text-2xl"></i>
					</a>
					<a href="#" class="text-pink-300 hover:text-white">
						<i class="bx bxl-youtube text-2xl"></i>
					</a>
				</div>

				<div class="border-t border-pink-600 pt-6 text-center text-pink-300 text-sm">
					<p>© {{ currentYear }} Heartbeat Harmony. All rights reserved.</p>
					<p class="mt-1">Made with <i class="bx bx-heart text-red-400"></i> for a better world</p>
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

// Reactive state
const activeSection = ref<string>('home')
const mobileMenuOpen = ref<boolean>(false)

// Data
const sections = ref<Section[]>([
	{id: 'home', name: 'Home', icon: 'bx bx-home'},
	{id: 'about', name: 'About', icon: 'bx bx-info-circle'},
	{id: 'vision', name: 'Vision', icon: 'bx bx-planet'},
	{id: 'mission', name: 'Mission', icon: 'bx bx-bullseye'}
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

	const sectionsList = [
		{id: 'home', element: document.getElementById('home')},
		{id: 'about', element: document.getElementById('about')},
		{id: 'vision', element: document.getElementById('vision')},
		{id: 'mission', element: document.getElementById('mission')}
	]

	for (let i = sectionsList.length - 1; i >= 0; i--) {
		const section = sectionsList[i]!
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
@import "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";

/* Custom animations */
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

.animate-heartbeat {
	animation: heartbeat 1.5s ease-in-out infinite;
}

/* Pink color definitions */
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

.from-pink-50 {
	--tw-gradient-from: var(--pink-50);
}

.to-pink-100 {
	--tw-gradient-to: var(--pink-100);
}

/* Responsive container */
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

/* Responsive text sizes */
@media (max-width: 640px) {
	.text-3xl {
		font-size: 1.5rem;
		line-height: 2rem;
	}

	.text-4xl {
		font-size: 1.875rem;
		line-height: 2.25rem;
	}
}
</style>