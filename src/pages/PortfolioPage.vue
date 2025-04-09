<template>
  <q-page
    class="q-pa-none column page-container"
    :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-black'"
  >
    <q-inner-loading
      :showing="isLoading"
      label="Preparing Awesomeness..."
      label-class="text-amber text-subtitle1"
      label-style="font-size: 1.2em; letter-spacing: 1px;"
      color="amber"
      class="bg-dark loading-indicator"
    >
      <q-spinner-gears size="60px" color="amber" />
    </q-inner-loading>

    <div v-show="!isLoading" class="page-content">
      <q-header
        elevated
        reveal
        class="text-white header-transition"
        :class="[
          $q.dark.isActive ? 'bg-dark-glass' : 'bg-primary-glass',
          isScrolled ? 'header-scrolled' : '',
        ]"
        height-hint="60"
      >
        <q-toolbar class="toolbar-padding">
          <q-toolbar-title class="text-h6 text-weight-medium site-title">
            <q-icon name="mdi-alpha-v-box-outline" class="q-mr-sm title-icon" />
            Vishwa Tharindu
          </q-toolbar-title>

          <q-btn flat label="Home" type="a" href="#" class="q-ml-sm nav-link" />
          <q-btn flat label="About" type="a" href="#about" class="q-ml-sm nav-link" />
          <q-btn flat label="Projects" type="a" href="#projects" class="q-ml-sm nav-link" />
          <q-btn flat label="Contact" type="a" href="#contact" class="q-ml-sm nav-link" />

          <q-space />

          <q-toggle
            v-model="isDark"
            color="amber"
            checked-icon="dark_mode"
            unchecked-icon="light_mode"
            class="q-ml-md dark-toggle"
            dense
          />
        </q-toolbar>
      </q-header>

      <section
        class="hero-section flex flex-center q-py-xl text-center scroll-section"
        id="home"
        :class="isDark ? 'text-white' : 'text-black'"
        :style="heroBackgroundStyle"
        data-aos="fade-in"
        data-aos-duration="1200"
      >
        <div class="background-mesh"></div>

        <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" class="hero-content">
          <h1 class="text-h2 text-bold q-mb-md hero-heading">
            <span class="line"
              >Hi, I'm <span class="text-amber name-highlight">Vishwa Tharindu</span></span
            >
          </h1>
          <p class="text-h6 q-mb-lg hero-subheading">
            <span class="line">UX/UI Designer · Chef · Photographer</span>
          </p>
          <q-btn
            label="Explore My Work"
            type="a"
            href="#projects"
            color="amber"
            text-color="black"
            unelevated
            rounded
            size="lg"
            icon-right="arrow_downward"
            class="q-px-xl hero-cta-button"
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="1000"
          />
        </div>
      </section>

      <section class="q-pa-xl about-section scroll-section" data-aos="fade-up" id="about">
        <div style="max-width: 800px; margin: auto">
          <h2 class="text-h4 text-amber text-center section-title">About Me</h2>
          <p
            class="text-body1 q-mt-lg text-center readable-text"
            :class="isDark ? 'text-grey-4' : 'text-grey-8'"
          >
            I craft intuitive digital experiences and memorable culinary journeys. Based in Sri
            Lanka, my work blends design thinking, visual storytelling, and technical precision.
            Let's create something exceptional together.
          </p>
        </div>
      </section>

      <section
        class="q-pa-xl projects-section scroll-section"
        :class="isDark ? 'bg-dark-2' : 'bg-grey-2'"
        id="projects"
      >
        <h2 class="text-h4 text-amber q-mb-xl text-center section-title" data-aos="fade-up">
          Featured Projects
        </h2>
        <div class="q-gutter-lg row items-stretch justify-center">
          <q-card
            class="project-card col-xs-12 col-sm-6 col-md-4"
            style="max-width: 380px"
            v-for="(project, index) in projects"
            :key="project.id"
            data-aos="fade-up"
            data-aos-duration="600"
            :data-aos-delay="150 + index * 150"
          >
            <q-img
              :src="project.imageUrl"
              :alt="project.title + ' Thumbnail'"
              class="project-image"
            >
              <template v-slot:error>...</template>
            </q-img>
            <q-card-section :class="isDark ? 'bg-dark-3' : ''">
              <div class="text-h6 project-title">{{ project.title }}</div>
              <q-chip
                dense
                size="sm"
                class="q-mt-sm"
                :icon="project.icon"
                :color="project.chipColor"
                text-color="white"
                >{{ project.category }}</q-chip
              >
              <p
                class="text-body2 q-mt-sm project-desc"
                :class="isDark ? 'text-grey-5' : 'text-grey-7'"
              >
                {{ project.description }}
              </p>
            </q-card-section>
            <q-card-actions align="right" :class="isDark ? 'bg-dark-3' : ''">
              <q-btn
                flat
                dense
                color="amber"
                label="View Details"
                @click="showProjectDetails(project)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </section>

      <section class="q-pa-xl contact-section scroll-section" id="contact">
        <div style="max-width: 700px; margin: auto">
          <h2 class="text-h4 text-amber q-mb-lg text-center section-title" data-aos="fade-up">
            Get In Touch
          </h2>
          <p
            class="text-body1 q-mb-lg text-center readable-text"
            :class="isDark ? 'text-grey-4' : 'text-grey-8'"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have a project idea or just want to connect? Send me a message!
          </p>
          <q-form
            @submit.prevent="handleFormSubmit"
            class="q-gutter-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <q-input
              outlined
              label="Your Name"
              v-model="formData.name"
              :dark="isDark"
              class="form-input"
              lazy-rules
              :rules="rules.name"
            />
            <q-input
              outlined
              label="Your Email"
              type="email"
              v-model="formData.email"
              :dark="isDark"
              class="form-input"
              lazy-rules
              :rules="rules.email"
            />
            <q-input
              outlined
              type="textarea"
              label="Your Message"
              v-model="formData.message"
              :dark="isDark"
              class="form-input"
              lazy-rules
              :rules="rules.message"
            />
            <div class="text-center q-mt-lg">
              <q-btn
                label="Send Message"
                color="amber"
                text-color="black"
                rounded
                unelevated
                type="submit"
                class="q-px-xl contact-submit-btn"
                icon-right="send"
              />
            </div>
          </q-form>
        </div>
      </section>

      <q-footer
        class="text-center q-pa-md footer-enhanced"
        :class="isDark ? 'bg-dark-4' : 'bg-grey-3'"
      >
        <div class="social-links q-mb-sm">
          <q-btn
            flat
            round
            dense
            type="a"
            href="#"
            target="_blank"
            icon="fab fa-linkedin"
            class="social-icon"
          />
          <q-btn
            flat
            round
            dense
            type="a"
            href="#"
            target="_blank"
            icon="fab fa-github"
            class="social-icon"
          />
          <q-btn
            flat
            round
            dense
            type="a"
            href="#"
            target="_blank"
            icon="fab fa-instagram"
            class="social-icon"
          />
        </div>
        <p class="text-caption q-ma-none" :class="isDark ? 'text-grey-6' : 'text-grey-8'">
          &copy; {{ new Date().getFullYear() }} Vishwa Tharindu. Built with Quasar & Vue.
        </p>
      </q-footer>

      <q-dialog v-model="showDialog">
        <q-card style="width: 700px; max-width: 80vw">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ selectedProject?.title }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section>
            <q-img
              :src="selectedProject?.imageUrl"
              :alt="selectedProject?.title"
              style="max-height: 300px"
              class="q-mb-md"
            />
            <p>{{ selectedProject?.description }}</p>
            <p><strong>Category:</strong> {{ selectedProject?.category }}</p>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref, reactive, watch, computed } from 'vue' // Added computed
import { useQuasar } from 'quasar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const $q = useQuasar()
const isLoading = ref(true)
const isDark = ref($q.dark.isActive)
const isScrolled = ref(false) // For header scroll state

// --- Dark Mode ---
watch(isDark, (val) => {
  $q.dark.set(val)
})

// --- Scroll Handling for Header ---
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
// onUnmounted(() => { window.removeEventListener('scroll', handleScroll) }) // Remember to remove listener if component unmounts

// --- Hero Background ---
const heroBackgroundStyle = computed(() => ({
  // Use require for local assets in /src or absolute path for /public
  // Example: backgroundImage: `url(${isDark.value ? require('assets/dark-bg.jpg') : require('assets/light-bg.jpg')})`
  backgroundImage: `url(${isDark.value ? '/dark-bg.jpg' : '/light-bg.jpg'})`, // Assumes images are in /public
  backgroundColor: isDark.value ? '#111' : '#f5f5f5',
}))

// --- Project Data & Dialog ---
const projects = ref([
  // Replace with your actual project data
  {
    id: 1,
    title: 'Gourmet Burger App UI',
    category: 'UX/UI Design',
    description: 'Detailed description for project 1...',
    imageUrl: 'https://via.placeholder.com/400x250/FF6347/ffffff?text=Project+1+UI',
    icon: 'design_services',
    chipColor: 'indigo-9',
  },
  {
    id: 2,
    title: 'Artisan Cafe Branding',
    category: 'Photography',
    description: 'Detailed description for project 2...',
    imageUrl: 'https://via.placeholder.com/400x250/4682B4/ffffff?text=Project+2+Photo',
    icon: 'camera',
    chipColor: 'teal-9',
  },
  {
    id: 3,
    title: 'Recipe Management System',
    category: 'Technology',
    description: 'Detailed description for project 3...',
    imageUrl: 'https://via.placeholder.com/400x250/32CD32/ffffff?text=Project+3+Tech',
    icon: 'code',
    chipColor: 'blue-grey-9',
  },
  // Add more projects
])
const showDialog = ref(false)
const selectedProject = ref(null)
function showProjectDetails(project) {
  selectedProject.value = project
  showDialog.value = true
}

// --- Form State & Validation ---
const formData = reactive({ name: '', email: '', message: '' })
const rules = {
  // Example validation rules
  name: [(val) => !!val || 'Name is required'],
  email: [
    (val) => !!val || 'Email is required',
    (val) => /.+@.+\..+/.test(val) || 'Invalid email format',
  ],
  message: [(val) => !!val || 'Message is required'],
}
function handleFormSubmit() {
  // Basic validation check (Quasar form handles actual rule execution on submit)
  if (!formData.name || !formData.email || !formData.message || !/.+@.+\..+/.test(formData.email)) {
    $q.notify({ type: 'negative', message: 'Please fill all fields correctly.' })
    return
  }
  console.log('Form Submitted:', formData)
  $q.notify({ color: 'positive', icon: 'cloud_done', message: 'Message Sent!' })
  // Clear form
  formData.name = ''
  formData.email = ''
  formData.message = ''
}

// --- Lifecycle and AOS ---
onMounted(() => {
  $q.dark.set(isDark.value) // Ensure initial dark mode is set
  handleScroll() // Check initial scroll position

  setTimeout(() => {
    isLoading.value = false
    setTimeout(() => {
      // Init AOS after content is visible
      AOS.init({ duration: 800, offset: 80, once: true })
    }, 50) // Short delay for render
  }, 1000) // Increased loading simulation time
})
</script>

<style scoped>
/* --- Font Import Hint --- */
/* Consider importing a professional font pair globally via quasar.config.js or App.vue */

/* --- Global Styles Hint --- */
/* Add to global CSS (e.g., app.scss):
html { scroll-behavior: smooth; }
body { overflow-x: hidden; background-color: var(--q-color-dark); } // Set base bg
body.body--light { background-color: #fff; } // Base light bg
*/

/* --- Page & Loading --- */
.page-container {
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
}
.loading-indicator {
  z-index: 9999;
  backdrop-filter: blur(5px);
}
.page-content {
  opacity: 0;
  animation: fadeInContent 0.6s ease-out 1s forwards;
}
@keyframes fadeInContent {
  to {
    opacity: 1;
  }
}

/* --- Header Enhancements --- */
.q-header {
  transition:
    background-color 0.4s ease,
    box-shadow 0.4s ease,
    backdrop-filter 0.4s ease;
}
.bg-primary-glass,
.bg-dark-glass {
  background-color: transparent;
  backdrop-filter: none;
}
/* Scrolled State - Glassmorphism */
.header-scrolled {
  background-color: rgba(30, 30, 30, 0.7); /* Dark glass */
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
body.body--light .header-scrolled {
  background-color: rgba(255, 255, 255, 0.7); /* Light glass */
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.toolbar-padding {
  padding: 0 3%;
}
.site-title {
  transition: color 0.3s ease;
  letter-spacing: 0.5px;
  cursor: default;
}
.title-icon {
  transition: transform 0.4s ease;
}
.site-title:hover .title-icon {
  transform: rotate(360deg);
} /* Example icon animation */
.nav-link {
  /* Keep previous nav link styles */
  position: relative;
  padding: 10px 15px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  overflow: hidden;
  transition: color 0.3s ease-out;
  opacity: 0.9;
}
.nav-link:hover {
  background-color: transparent !important;
  color: var(--q-color-amber);
  opacity: 1;
}
.nav-link::after {
  /* Keep underline effect */
  content: '';
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: var(--q-color-amber);
  transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 1px;
}
.nav-link:hover::after {
  width: 80%;
}
.dark-toggle {
  transition: transform 0.2s ease;
}
.dark-toggle:hover {
  transform: scale(1.1);
}

/* --- Hero Section --- */
.hero-section {
  min-height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Parallax */
  transition:
    background-image 0.6s ease-in-out,
    color 0.3s ease;
  position: relative;
}
.hero-section::before {
  /* Darker Overlay */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
}
/* --- Subtle Mesh/Particle Background Layer --- */
.background-mesh {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Example: Very subtle animated gradient lines - replace or enhance */
  background: linear-gradient(
    -45deg,
    rgba(255, 193, 7, 0.02) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 193, 7, 0.02) 50%,
    rgba(255, 193, 7, 0.02) 75%,
    transparent 75%,
    transparent
  );
  background-size: 30px 30px; /* Size of the pattern */
  opacity: 0.5;
  z-index: 0; /* Behind overlay and content */
  animation: moveMesh 60s linear infinite;
}
@keyframes moveMesh {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1000px 1000px;
  }
}

/* --- Hero Text Animation (Line Reveal) --- */
.hero-heading .line,
.hero-subheading .line {
  display: inline-block;
  overflow: hidden;
}
.hero-heading .line span,
.hero-subheading .line span {
  display: inline-block;
  transform: translateY(110%);
  opacity: 0;
  animation: revealText 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
/* Apply delays using AOS or manual calculation if needed */
.hero-heading .line {
  animation-delay: 0.6s;
} /* Delay for heading line */
.hero-subheading .line {
  animation-delay: 0.8s;
} /* Delay for subheading line */

@keyframes revealText {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.name-highlight {
  /* Keep gradient */
  background: linear-gradient(60deg, var(--q-color-amber), #ffdd70);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  border-bottom: 3px solid transparent;
  padding-bottom: 2px;
  display: inline-block;
}
.hero-cta-button {
  /* Make hero button slightly different */
  animation: subtleButtonGlow 4s ease-in-out infinite alternate; /* Keep glow */
}
.hero-cta-button:hover {
  /* Keep hover */
  transform: translateY(-4px) scale(1.03);
  animation: none;
  box-shadow: 0 0 25px 10px rgba(255, 193, 7, 0.6);
  background-color: #ffca28;
  filter: brightness(1.1);
}

/* --- General Section Styling --- */
.scroll-section {
  min-height: 70vh;
  padding: 80px 5%;
} /* Increased padding */
.readable-text {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

/* --- Section Title Underline Animation --- */
.section-title {
  position: relative;
  padding-bottom: 20px;
}
.section-title::after {
  /* Keep underline style */
  content: '';
  position: absolute;
  display: block;
  width: 80px;
  height: 4px;
  background: var(--q-color-amber);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center center;
  transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s; /* Smoother, delayed */
  border-radius: 2px;
}
[data-aos].aos-animate .section-title::after {
  transform: translateX(-50%) scaleX(1);
}

/* --- Project Card Enhancements --- */
.project-card {
  background-color: rgba(47, 47, 47, 0.8); /* More transparency? */
  backdrop-filter: blur(5px); /* Glassmorphism hint */
  color: white;
  transition: all 0.4s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}
.project-card::before {
  /* Subtle border glow on hover */
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, transparent, var(--q-color-amber), transparent);
  z-index: -1;
  border-radius: 14px;
  opacity: 0;
  transition: opacity 0.4s ease;
  filter: blur(5px);
}
.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 193, 7, 0.5); /* Highlight border */
}
.project-card:hover::before {
  opacity: 0.5;
} /* Show border glow */
.project-image {
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.project-card:hover .project-image {
  transform: scale(1.06);
}
.project-title {
  font-weight: 600;
}
.project-desc {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* --- Contact Form Enhancements --- */
.form-input :deep(.q-field__control) {
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px; /* Slightly rounder */
  border: 1px solid transparent; /* Prepare for focus border */
}
.form-input.q-field--dark :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.08);
}
.form-input.q-field--dark :deep(.q-field__native),
.form-input.q-field--dark :deep(.q-field__label) {
  color: #e0e0e0;
}
.form-input.q-field--focused :deep(.q-field__control),
.form-input:focus-within :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none; /* Remove default focus ring */
  border-color: var(--q-color-amber); /* Use border color for focus */
}
.contact-submit-btn {
  transition: all 0.3s ease;
} /* Keep base button styles */
.contact-submit-btn:hover {
  /* Keep hover from cta-button */
  transform: translateY(-4px) scale(1.03);
  animation: none;
  box-shadow: 0 0 25px 10px rgba(255, 193, 7, 0.6);
  background-color: #ffca28;
  filter: brightness(1.1);
}

/* --- Footer Enhancements --- */
.footer-enhanced {
  transition: background-color 0.4s ease;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.social-icon {
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  color: var(--q-color-grey-6);
}
.social-icon:hover {
  transform: scale(1.2) rotate(10deg);
  color: var(--q-color-amber);
}
body.body--light .footer-enhanced {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
body.body--light .social-icon {
  color: var(--q-color-grey-8);
}
body.body--light .social-icon:hover {
  color: var(--q-color-primary);
}

/* --- Utility --- */
.bg-dark-2 {
  background-color: #2a2a2a !important;
}
.bg-dark-3 {
  background-color: #333333 !important;
}
.bg-dark-4 {
  background-color: #222 !important;
}
.text-amber {
  color: var(--q-color-amber) !important;
}
.text-grey-4 {
  color: #cccccc !important;
}
.text-grey-5 {
  color: #bdbdbd !important;
}
.text-grey-6 {
  color: #9e9e9e !important;
}
.text-grey-7 {
  color: #757575 !important;
}
.text-grey-8 {
  color: #616161 !important;
}
</style>
