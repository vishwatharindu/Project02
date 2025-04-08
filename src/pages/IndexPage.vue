<template>
  <q-page
    class="flex flex-center q-pa-lg column animated-bg textured-bg"
    style="background-color: #1d1d1d"
  >
    <q-avatar
      size="150px"
      class="q-mb-lg avatar-container"
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <img
        class="avatar-image"
        src="https://via.placeholder.com/150/ffcc00/121212?text=VT"
        alt="Vishwa Tharindu"
      />
    </q-avatar>

    <div class="text-center q-mb-md" data-aos="fade-up" data-aos-delay="200">
      <h1 class="text-h2 text-weight-light text-white q-mb-sm intro-heading">
        Welcome,
        <span class="text-weight-bold text-amber border-accent name-highlight"
          >Vishwa Tharindu</span
        >
      </h1>
      <p class="text-h6 text-grey-5 intro-subheading" data-aos="fade-up" data-aos-delay="400">
        UX Designer // Founder // Lifelong Learner
      </p>
    </div>

    <div class="q-gutter-sm q-mb-lg skills-container">
      <q-chip
        data-aos="fade-up"
        data-aos-delay="500"
        class="skill-chip"
        icon="code"
        color="blue-grey-9"
        text-color="white"
        >Technology</q-chip
      >
      <q-chip
        data-aos="fade-up"
        data-aos-delay="600"
        class="skill-chip"
        icon="restaurant"
        color="deep-orange-9"
        text-color="white"
        >Culinary Arts</q-chip
      >
      <q-chip
        data-aos="fade-up"
        data-aos-delay="700"
        class="skill-chip"
        icon="camera"
        color="teal-9"
        text-color="white"
        >Photography</q-chip
      >
      <q-chip
        data-aos="fade-up"
        data-aos-delay="800"
        class="skill-chip"
        icon="design_services"
        color="indigo-9"
        text-color="white"
        >UX/UI Design</q-chip
      >
    </div>

    <q-btn
      icon="explore"
      label="Explore My Work"
      color="amber"
      text-color="dark"
      unelevated
      rounded
      size="lg"
      class="q-px-xl cta-button"
      data-aos="fade-up"
      data-aos-delay="1000"
      to="/portfolio"
    />
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    offset: 80,
    once: true,
  })
})
</script>

<style scoped>
/* --- Background Enhancements --- */
.animated-bg {
  position: relative;
  overflow: hidden;
}
.textured-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: url('/path/to/your/noise-texture.png'); */ /* Uncomment & provide texture */
  opacity: 0.03;
  pointer-events: none;
  z-index: 1;
}
.animated-bg::before {
  content: '';
  position: absolute;
  width: 200%; /* Even larger for smoother edges */
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 204, 0, 0.05) 0%,
    transparent 65%
  ); /* More subtle gradient */
  animation: pulse 15s infinite linear; /* Slower animation */
  z-index: 0;
  top: -50%;
  left: -50%;
}

@keyframes pulse {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1) rotate(180deg);
    opacity: 0.25;
  } /* Less scale, adjusted opacity */
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 0.5;
  }
}

/* --- Avatar Enhancements --- */
.avatar-container {
  /* Apply floating animation to the container */
  animation: float 6s ease-in-out infinite;
}
.avatar-image {
  /* Target the img tag directly */
  border-radius: 50%;
  box-shadow:
    0 0 20px rgba(255, 204, 0, 0.6),
    /* Slightly reduced intensity */ 0 0 40px rgba(255, 204, 0, 0.4),
    0 0 60px rgba(255, 204, 0, 0.2); /* Added tertiary softer glow */
  transition: transform 0.5s ease-out; /* Smoother ease-out curve */
  display: block; /* Ensure no extra space */
  width: 100%;
  height: 100%;
}
.avatar-container:hover .avatar-image {
  transform: scale(1.08); /* Slightly increased hover scale */
}

/* Subtle floating animation */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  } /* Adjust float distance */
  100% {
    transform: translateY(0px);
  }
}

/* --- Text Enhancements --- */
.intro-heading {
  letter-spacing: -1px;
}
.name-highlight {
  background: linear-gradient(60deg, var(--q-color-amber), #ffdd70); /* Adjusted angle/color */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  border-bottom: 3px solid transparent;
  padding-bottom: 2px;
  display: inline-block;
}
.intro-subheading {
  letter-spacing: 0.5px;
  opacity: 0.9; /* Slightly less prominent */
}

/* --- Chip Enhancements --- */
.skill-chip {
  transition: all 0.4s ease-out; /* Smoother transition */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.skill-chip:hover {
  transform: translateY(-5px) scale(1.05); /* More lift/scale */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
  filter: brightness(1.15); /* Brighter on hover */
}

/* --- Button Enhancements --- */
.cta-button {
  position: relative; /* Needed for potential pseudo-element glow */
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); /* Smoother, faster curve */
  /* Initial subtle glow via box-shadow animation */
  animation: subtleButtonGlow 4s ease-in-out infinite;
}

@keyframes subtleButtonGlow {
  0% {
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.2);
  }
  50% {
    box-shadow: 0 0 18px rgba(255, 193, 7, 0.4);
  } /* Pulsing glow */
  100% {
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.2);
  }
}

.cta-button:hover {
  transform: translateY(-4px) scale(1.03); /* More pronounced lift/scale */
  /* Stronger, wider glow on hover, cancel animation override */
  animation: none; /* Disable subtle glow animation on hover */
  box-shadow: 0 0 25px 8px rgba(255, 193, 7, 0.5);
  background-color: #ffca28; /* Lighter amber on hover */
  filter: brightness(1.1);
}

/* Base Text Colors */
.text-white {
  color: white !important;
}
.text-grey-5 {
  color: #bdbdbd !important;
}

/* Border Utility */
.border-accent {
  border-bottom: 3px solid var(--q-color-amber);
  padding-bottom: 2px;
}
</style>
