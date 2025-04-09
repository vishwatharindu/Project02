<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      reveal
      class="text-white header-transition"
      :class="$q.dark.isActive ? 'bg-dark-4' : 'bg-primary'"
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
          v-model="isDarkLayout"
          color="amber"
          checked-icon="dark_mode"
          unchecked-icon="light_mode"
          class="q-ml-md dark-toggle"
          dense
        />
      </q-toolbar>
    </q-header>

    <q-page-container> <router-view /> </q-page-container>

    <q-footer
      class="text-center q-pa-md footer-enhanced"
      :class="$q.dark.isActive ? 'bg-dark-4' : 'bg-grey-3'"
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
      <p class="text-caption q-ma-none" :class="$q.dark.isActive ? 'text-grey-6' : 'text-grey-8'">
        &copy; {{ new Date().getFullYear() }} Vishwa Tharindu. Built with Quasar & Vue.
      </p>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// --- Dark Mode state specific to the layout's toggle ---
// Initialize based on Quasar's current dark mode state
const isDarkLayout = ref($q.dark.isActive)

// Watch the toggle's model and update Quasar's global dark mode state
watch(isDarkLayout, (val) => {
  $q.dark.set(val)
})

// Also watch Quasar's global state in case it's changed elsewhere
// (e.g., by OS preference) and update the toggle
watch(
  () => $q.dark.isActive,
  (val) => {
    isDarkLayout.value = val
  },
)

// Optional: Drawer state if you add a drawer
// const leftDrawerOpen = ref(false)
// function toggleLeftDrawer() { leftDrawerOpen.value = !leftDrawerOpen.value }
</script>

<style scoped>
/* Styles specific to the Layout (Header, Footer, Nav links) */

.header-transition {
  transition: background-color 0.4s ease;
}
.bg-dark-4 {
  background-color: #222 !important;
} /* Header dark bg */
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
}
.nav-link {
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
  /* Animated Underline Effect */
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

/* Footer Styles */
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
</style>
