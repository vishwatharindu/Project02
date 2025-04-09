<template>
  <q-page
    class="q-pa-none column"
    :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-black'"
  >
    <q-header elevated :class="$q.dark.isActive ? 'bg-dark-3' : 'bg-primary'" class="text-white">
      <q-toolbar>
        <q-toolbar-title class="text-h6">Vishwa Tharindu</q-toolbar-title>

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
          class="q-ml-md"
          dense
        />
      </q-toolbar>
    </q-header>

    <section
      class="hero-section flex flex-center q-py-xl text-center"
      :class="isDark ? 'text-white' : 'text-black'"
      :style="
        isDark
          ? 'background-image: url(/dark-bg.jpg); background-color: #111;' /* Added fallback color */
          : 'background-image: url(/light-bg.jpg); background-color: #f5f5f5;' /* Added fallback color */
      "
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div data-aos="fade-up" data-aos-delay="300">
        <h1 class="text-h3 text-bold q-mb-md">Hi, I'm Vishwa Tharindu</h1>
        <p class="text-subtitle1 q-mb-lg">UX/UI Designer · Professional Chef · Photographer</p>
        <q-btn
          label="View My Work"
          type="a"
          href="#projects"
          color="amber"
          text-color="black"
          unelevated
          rounded
          size="lg"
          icon-right="arrow_downward"
          class="q-px-lg"
        />
      </div>
    </section>

    <section class="q-pa-xl about-section scroll-section" data-aos="fade-up" id="about">
      <div style="max-width: 800px; margin-left: auto; margin-right: auto">
        <h2 class="text-h4 text-amber text-center section-title">About Me</h2>
        <p class="text-body1 q-mt-lg text-center" :class="isDark ? 'text-grey-4' : 'text-grey-8'">
          I’m Vishwa Tharindu — a UX/UI designer, photographer, and chef based in Sri Lanka. I
          specialize in creating intuitive digital experiences and delicious, memorable dishes. With
          a strong background in design thinking and storytelling, I bring both creativity and
          precision to every project I touch.
        </p>
      </div>
    </section>

    <section
      class="q-pa-xl projects-section scroll-section"
      :class="isDark ? 'bg-dark-2' : 'bg-grey-2'"
      id="projects"
    >
      <h2 class="text-h4 text-amber q-mb-xl text-center section-title" data-aos="fade-up">
        Projects
      </h2>
      <div class="q-gutter-lg row items-stretch justify-center">
        <q-card
          class="project-card col-xs-12 col-sm-6 col-md-4"
          style="max-width: 380px"
          v-for="n in 3"
          :key="n"
          data-aos="zoom-in-up"
          :data-aos-delay="100 + n * 100"
        >
          <q-img
            :src="`https://via.placeholder.com/400x250/444444/ffffff?text=Project+${n}`"
            style="height: 200px"
            alt="Project Placeholder Image"
          >
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">
                Cannot load image
              </div>
            </template>
          </q-img>

          <q-card-section :class="isDark ? 'bg-dark-3' : ''">
            <div class="text-h6">Project Title {{ n }}</div>
            <p class="text-body2 q-mt-sm" :class="isDark ? 'text-grey-5' : 'text-grey-7'">
              Short description about the project, technologies used, and the goal. Replace this
              placeholder text.
            </p>
          </q-card-section>
          <q-card-actions align="right" :class="isDark ? 'bg-dark-3' : ''">
            <q-btn flat dense color="amber" label="View Details" />
          </q-card-actions>
        </q-card>
      </div>
    </section>

    <section class="q-pa-xl contact-section scroll-section" id="contact">
      <div style="max-width: 700px; margin-left: auto; margin-right: auto">
        <h2 class="text-h4 text-amber q-mb-lg text-center section-title" data-aos="fade-up">
          Contact Me
        </h2>
        <p
          class="text-body1 q-mb-lg text-center"
          :class="isDark ? 'text-grey-4' : 'text-grey-8'"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let's create something great together. Reach out to me via the form or email directly.
        </p>

        <q-form class="q-gutter-md" data-aos="fade-up" data-aos-delay="200">
          <q-input filled label="Your Name" :dark="isDark" class="form-input" />
          <q-input filled label="Your Email" type="email" :dark="isDark" class="form-input" />
          <q-input filled type="textarea" label="Your Message" :dark="isDark" class="form-input" />
          <div class="text-center q-mt-lg">
            <q-btn
              label="Send Message"
              color="amber"
              text-color="black"
              rounded
              unelevated
              type="submit"
              class="q-px-lg"
              icon-right="send"
            />
          </div>
        </q-form>
      </div>
    </section>
    <q-footer class="text-center q-pa-sm" :class="isDark ? 'bg-dark-3' : 'bg-grey-4'">
      <p class="text-caption q-ma-none" :class="isDark ? 'text-grey-6' : 'text-grey-8'">
        &copy; {{ new Date().getFullYear() }} Vishwa Tharindu. All Rights Reserved.
      </p>
    </q-footer>
  </q-page>
</template>

<script setup>
// *** Make sure all needed imports are here ***
import { onMounted, ref, watch } from 'vue'
import { useQuasar } from 'quasar' // Import useQuasar
import AOS from 'aos'
import 'aos/dist/aos.css'

const $q = useQuasar() // Initialize Quasar composable

// --- Dark Mode ---
// Initialize based on Quasar's current dark mode state if possible, or default
const isDark = ref($q.dark.isActive)

// Watch the toggle model and update Quasar's dark mode
watch(isDark, (val) => {
  $q.dark.set(val) // Use Quasar's built-in dark mode handling
})

// --- AOS Initialization ---
onMounted(() => {
  AOS.init({
    duration: 800, // Adjusted duration
    once: true,
    offset: 100, // Adjusted offset
  })
})

// --- Form State (Add back if implementing submit) ---
// import { reactive } from 'vue'
// const formData = reactive({ name: '', email: '', message: '' })
// function handleFormSubmit() { ... }
</script>

<style scoped>
/* --- Global Styles Hint --- */
/* For smooth scrolling, add to global CSS (e.g., app.scss):
html { scroll-behavior: smooth; }
body { overflow-x: hidden; }
*/

/* --- Base & Transitions --- */
.q-page {
  transition:
    background-color 0.4s ease,
    color 0.4s ease; /* Slightly longer transition */
}
.scroll-section {
  /* Use a common class for sections */
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* --- Header --- */
.q-header {
  transition: background-color 0.4s ease;
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* --- Hero Section --- */
.hero-section {
  min-height: 85vh; /* Adjusted height */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition:
    background-image 0.5s ease-in-out,
    color 0.3s ease; /* Animate background image change */
  position: relative; /* For potential overlays */
}
/* Optional overlay for better text readability on images */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Adjust darkness/opacity */
  z-index: 1;
}
.hero-section > div {
  /* Ensure content is above overlay */
  position: relative;
  z-index: 2;
}

/* --- Section Title --- */
.section-title {
  position: relative;
  padding-bottom: 15px;
}
.section-title::after {
  content: '';
  position: absolute;
  display: block;
  width: 70px;
  height: 4px;
  background: var(--q-color-amber);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center center;
  transition: transform 0.6s ease-out 0.2s; /* Added delay */
  border-radius: 2px;
}
/* Trigger underline animation */
[data-aos='fade-up'].aos-animate .section-title::after,
.section-title.aos-animate::after {
  transform: translateX(-50%) scaleX(1);
}

/* --- Project Cards --- */
.project-card {
  background-color: #2f2f2f; /* Slightly lighter card */
  color: white;
  transition:
    transform 0.35s ease-out,
    box-shadow 0.35s ease-out;
  border: 1px solid #444;
  border-radius: 8px; /* Added border-radius */
  overflow: hidden;
}
.project-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}
.project-card .q-img {
  transition: transform 0.4s ease-out;
}
.project-card:hover .q-img {
  transform: scale(1.04);
}

/* --- Contact Form --- */
/* Using :deep() to target nested component elements - may be brittle */
.form-input :deep(.q-field__control) {
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  background: rgba(255, 255, 255, 0.05); /* Base input background */
  border-radius: 4px;
}
.form-input.q-field--dark :deep(.q-field__control) {
  /* Specific dark mode input bg */
  background: rgba(255, 255, 255, 0.07);
}
.form-input.q-field--dark :deep(.q-field__native),
.form-input.q-field--dark :deep(.q-field__label) {
  color: #ddd; /* Dark mode input text */
}
.form-input.q-field--focused :deep(.q-field__control),
.form-input:focus-within :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 0 0 2px rgba(var(--q-color-amber-rgb), 0.4); /* Amber focus ring */
}

/* --- Text Color Overrides --- */
/* Using !important can be necessary sometimes, but try to avoid if possible */
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

/* Custom Dark Mode Backgrounds */
.bg-dark-2 {
  background-color: #2a2a2a !important;
}
.bg-dark-3 {
  background-color: #333333 !important;
} /* For header/card sections */
</style>
