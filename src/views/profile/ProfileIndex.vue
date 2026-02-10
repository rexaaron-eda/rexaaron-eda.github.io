<template>
	<div class="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
		<!-- Header -->
		<header class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
			<div class="container mx-auto px-4 py-3">
				<div class="flex justify-between items-center">
					<!-- Back to Advocacy Button -->
					<router-link
							to="/advocacy"
							class="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors group"
					>
						<i class="bx bx-arrow-back text-xl group-hover:-translate-x-1 transition-transform"></i>
						<span class="font-medium">Back to Advocacy</span>
					</router-link>

					<!-- Home Button -->
					<router-link
							to="/"
							class="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
					>
						<i class="bx bx-home text-xl"></i>
						<span class="font-medium">Home</span>
					</router-link>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<main class="container mx-auto px-4 py-8 md:py-12">
			<!-- Hero Section -->
			<section class="mb-12 md:mb-16">
				<div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
					<!-- Profile Image -->
					<div class="md:w-1/3 flex justify-center">
						<!-- Profile Image Section in PortfolioView.vue -->
						<div class="relative">
							<div class="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center shadow-xl overflow-hidden">
								<!-- Profile Image with Fallback -->
								<img
										src="/rex.jpg"
										alt="Rex Aaron Eda"
										class="w-full h-full object-cover"
										@error="imageError = true"
								>
								<!-- Fallback icon if image fails to load -->
								<div
										v-if="imageError"
										class="absolute inset-0 flex items-center justify-center"
								>
									<i class="bx bx-user-circle text-white text-8xl md:text-9xl"></i>
								</div>
							</div>

							<!-- Decorative Elements -->
							<div class="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center animate-bounce-slow shadow-md">
								<i class="bx bx-award text-white text-xl"></i>
							</div>
							<div class="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center animate-bounce-slow shadow-md"
							     style="animation-delay: 0.3s;">
								<i class="bx bx-code-alt text-white text-2xl"></i>
							</div>
						</div>
					</div>

					<!-- Profile Info -->
					<div class="md:w-2/3">
						<div class="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
							<div class="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-4">
								<i class="bx bx-user"></i>
								<span class="font-semibold">Portfolio</span>
							</div>

							<h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Rex Aaron Eda</h1>
							<p class="text-xl text-pink-600 mb-6">Grade 12 STEM Student & Social Advocate</p>

							<p class="text-gray-600 mb-8 leading-relaxed">
								Passionate STEM student dedicated to creating positive social change through technology
								and advocacy. Combining analytical thinking with compassionate action to build a better
								future for all.
							</p>

							<div class="flex flex-wrap gap-3">
								<a href="mailto:rex.aaron@example.com"
								   class="px-4 py-2 bg-pink-500 text-white font-medium rounded-full flex items-center gap-2 hover:bg-pink-600 transition-colors">
									<i class="bx bx-envelope"></i>
									Contact Me
								</a>
								<a href="#"
								   class="px-4 py-2 bg-white border-2 border-pink-300 text-pink-700 font-medium rounded-full flex items-center gap-2 hover:bg-pink-50 transition-colors">
									<i class="bx bx-download"></i>
									Download Resume
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Skills & Expertise -->
			<section class="mb-12 md:mb-16">
				<div class="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
					<div class="flex items-center gap-3 mb-8">
						<div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
							<i class="bx bx-brain text-pink-600 text-xl"></i>
						</div>
						<h2 class="text-2xl md:text-3xl font-bold text-gray-800">Skills & Expertise</h2>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
							<div class="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center mb-4">
								<i class="bx bx-code-block text-pink-600 text-xl"></i>
							</div>
							<h3 class="text-lg font-bold text-gray-800 mb-3">Technical Skills</h3>
							<ul class="space-y-2">
								<li class="flex items-center">
									<i class="bx bx-check-circle text-pink-500 mr-2"></i>
									<span>Web Development (Vue.js, TypeScript)</span>
								</li>
								<li class="flex items-center">
									<i class="bx bx-check-circle text-pink-500 mr-2"></i>
									<span>UI/UX Design</span>
								</li>
								<li class="flex items-center">
									<i class="bx bx-check-circle text-pink-500 mr-2"></i>
									<span>Data Analysis</span>
								</li>
							</ul>
						</div>

						<div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
							<div class="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mb-4">
								<i class="bx bx-megaphone text-purple-600 text-xl"></i>
							</div>
							<h3 class="text-lg font-bold text-gray-800 mb-3">Advocacy Skills</h3>
							<ul class="space-y-2">
								<li class="flex items-center">
									<i class="bx bx-check-circle text-purple-500 mr-2"></i>
									<span>Community Engagement</span>
								</li>
								<li class="flex items-center">
									<i class="bx bx-check-circle text-purple-500 mr-2"></i>
									<span>Public Speaking</span>
								</li>
								<li class="flex items-center">
									<i class="bx bx-check-circle text-purple-500 mr-2"></i>
									<span>Project Management</span>
								</li>
							</ul>
						</div>

						<div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
							<div class="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center mb-4">
								<i class="bx bx-book-open text-indigo-600 text-xl"></i>
							</div>
							<h3 class="text-lg font-bold text-gray-800 mb-3">Academic Focus</h3>
							<ul class="space-y-2">
								<li class="flex items-center">
									<i class="bx bx-check-circle text-indigo-500 mr-2"></i>
									<span>Science & Technology</span>
								</li>
								<li class="flex items-center">
									<i class="bx bx-check-circle text-indigo-500 mr-2"></i>
									<span>Mathematics</span>
								</li>
								<li class="flex items-center">
									<i class="bx bx-check-circle text-indigo-500 mr-2"></i>
									<span>Social Sciences</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<!-- Projects & Achievements -->
			<section class="mb-12 md:mb-16">
				<div class="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
					<div class="flex items-center gap-3 mb-8">
						<div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
							<i class="bx bx-trophy text-pink-600 text-xl"></i>
						</div>
						<h2 class="text-2xl md:text-3xl font-bold text-gray-800">Projects & Achievements</h2>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<!-- Heartbeat Harmony Advocacy (Keep this first) -->
						<div class="border border-pink-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
							<div class="flex items-start justify-between mb-4">
								<h3 class="text-lg font-bold text-gray-800">Heartbeat Harmony Advocacy</h3>
								<span class="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">Current</span>
							</div>
							<p class="text-gray-600 mb-4">
								Developed a comprehensive social change advocacy website promoting community engagement and positive
								action.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-pink-50 text-pink-600 text-xs rounded-full">Vue.js</span>
								<span class="px-3 py-1 bg-pink-50 text-pink-600 text-xs rounded-full">TypeScript</span>
								<span class="px-3 py-1 bg-pink-50 text-pink-600 text-xs rounded-full">Tailwind CSS</span>
							</div>
						</div>

						<!-- Chess Competition -->
						<div class="border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
							<div class="flex items-start justify-between mb-4">
								<h3 class="text-lg font-bold text-gray-800">Regional Chess Champion 2023</h3>
								<span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">1st Place</span>
							</div>
							<p class="text-gray-600 mb-4">
								Championed the Regional High School Chess Tournament, demonstrating strategic thinking and
								problem-solving skills against 50+ competitors.
							</p>
							<div class="flex items-center text-blue-600">
								<i class="bx bx-chess mr-2"></i>
								<span class="text-sm font-medium">Strategic Mind Award</span>
							</div>
						</div>

						<!-- Math Competition -->
						<div class="border border-green-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
							<div class="flex items-start justify-between mb-4">
								<h3 class="text-lg font-bold text-gray-800">National Math Olympiad Finalist</h3>
								<span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Top 10</span>
							</div>
							<p class="text-gray-600 mb-4">
								Represented the region in the National Mathematics Olympiad, placing in the top 10 nationally among 500+
								participants.
							</p>
							<div class="flex items-center text-green-600">
								<i class="bx bx-calculator mr-2"></i>
								<span class="text-sm font-medium">Mathematics Excellence</span>
							</div>
						</div>

						<!-- DaMath Competition -->
						<div class="border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
							<div class="flex items-start justify-between mb-4">
								<h3 class="text-lg font-bold text-gray-800">DaMath Competition Winner</h3>
								<span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Champion</span>
							</div>
							<p class="text-gray-600 mb-4">
								Won the Interschool DaMath Competition, combining mathematical skills with strategic gameplay against
								30+ schools.
							</p>
							<div class="flex items-center text-purple-600">
								<i class="bx bx-game mr-2"></i>
								<span class="text-sm font-medium">Math Strategy Champion</span>
							</div>
						</div>

						<!-- STEM Fair (Moved from 2nd position) -->
						<div class="border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
							<div class="flex items-start justify-between mb-4">
								<h3 class="text-lg font-bold text-gray-800">STEM Fair 2023 Winner</h3>
								<span class="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">1st Place</span>
							</div>
							<p class="text-gray-600 mb-4">
								First place in regional STEM fair for developing a sustainable energy monitoring system for local
								communities.
							</p>
							<div class="flex items-center text-orange-600">
								<i class="bx bx-award mr-2"></i>
								<span class="text-sm font-medium">Regional Champion</span>
							</div>
						</div>

						<!-- Community Clean-Up (Updated position) -->
						<div class="border border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
							<h3 class="text-lg font-bold text-gray-800 mb-4">Community Clean-Up Initiative</h3>
							<p class="text-gray-600 mb-4">
								Organized and led a community clean-up program that engaged 200+ volunteers and removed 1.5 tons of
								waste.
							</p>
							<div class="flex items-center text-indigo-600">
								<i class="bx bx-group mr-2"></i>
								<span class="text-sm font-medium">200+ Volunteers</span>
							</div>
						</div>
					</div>

					<!-- Additional Chess & Math Achievements Row -->
					<div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
						<!-- Chess Rating -->
						<div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 text-center">
							<i class="bx bx-chess text-blue-600 text-3xl mb-2"></i>
							<div class="text-2xl font-bold text-blue-700">1800+</div>
							<div class="text-sm text-blue-600">Chess ELO Rating</div>
						</div>

						<!-- Math Awards -->
						<div class="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 text-center">
							<i class="bx bx-math text-green-600 text-3xl mb-2"></i>
							<div class="text-2xl font-bold text-green-700">15+</div>
							<div class="text-sm text-green-600">Math Competition Awards</div>
						</div>

						<!-- Tournament Wins -->
						<div class="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 text-center">
							<i class="bx bx-trophy text-purple-600 text-3xl mb-2"></i>
							<div class="text-2xl font-bold text-purple-700">8</div>
							<div class="text-sm text-purple-600">Tournament Championships</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Contact & Links -->
			<section>
				<div class="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl text-white">
					<div class="text-center mb-8">
						<h2 class="text-2xl md:text-3xl font-bold mb-4">Let's Connect</h2>
						<p class="text-pink-100">Interested in collaboration or learning more about my work?</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
						<a href="mailto:rex.aaron@example.com"
						   class="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/20 transition-colors group">
							<i class="bx bx-envelope text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
							<h3 class="font-bold mb-2">Email</h3>
							<p class="text-sm text-pink-100">rexaaron12345@gmail.com</p>
						</a>

						<a href="https://linkedin.com"
						   target="_blank"
						   class="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/20 transition-colors group">
							<i class="bx bxl-linkedin text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
							<h3 class="font-bold mb-2">LinkedIn</h3>
							<p class="text-sm text-pink-100">Connect professionally</p>
						</a>

						<router-link
								to="/advocacy"
								class="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/20 transition-colors group"
						>
							<i class="bx bx-globe text-3xl mb-3 group-hover:scale-110 transition-transform"></i>
							<h3 class="font-bold mb-2">My Advocacy Project</h3>
							<p class="text-sm text-pink-100">View Heartbeat Harmony</p>
						</router-link>
					</div>
				</div>
			</section>
		</main>

		<!-- Footer -->
		<footer class="bg-gray-800 text-white mt-12">
			<div class="container mx-auto px-4 py-8">
				<div class="text-center">
					<div class="flex items-center justify-center space-x-3 mb-4">
						<i class="bx bx-heart-circle text-2xl text-pink-300"></i>
						<div>
							<p class="font-medium">Rex Aaron Eda Portfolio</p>
							<p class="text-gray-400 text-sm">Grade 12 STEM Student & Advocate</p>
						</div>
					</div>

					<div class="flex justify-center space-x-4 mb-6">
						<a href="#" class="text-gray-400 hover:text-white">
							<i class="bx bxl-github text-xl"></i>
						</a>
						<a href="#" class="text-gray-400 hover:text-white">
							<i class="bx bxl-twitter text-xl"></i>
						</a>
						<a href="#" class="text-gray-400 hover:text-white">
							<i class="bx bxl-instagram text-xl"></i>
						</a>
						<a href="#" class="text-gray-400 hover:text-white">
							<i class="bx bxl-facebook text-xl"></i>
						</a>
					</div>

					<div class="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
						<p>© {{ currentYear }} Rex Aaron Eda. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const imageError = ref(false)
const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
/* Custom animations */
@keyframes bounce-slow {
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10px);
	}
}

.animate-bounce-slow {
	animation: bounce-slow 2s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 640px) {
	.container {
		padding-left: 1rem;
		padding-right: 1rem;
	}
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

/* Purple colors for variety */
.bg-purple-50 {
	background-color: #faf5ff;
}

.bg-purple-100 {
	background-color: #f3e8ff;
}

.bg-purple-200 {
	background-color: #e9d5ff;
}

.bg-purple-300 {
	background-color: #d8b4fe;
}

.bg-purple-500 {
	background-color: #a855f7;
}

.bg-purple-600 {
	background-color: #9333ea;
}

.text-purple-500 {
	color: #a855f7;
}

.text-purple-600 {
	color: #9333ea;
}
</style>