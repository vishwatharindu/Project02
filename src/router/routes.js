const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // IndexPage at '/'
      { path: '', component: () => import('pages/IndexPage.vue') },

      // Portfolio page at '/portfolio'
      // *** Ensure 'pages/PortfolioPage.vue' exists and is the correct file ***
      { path: 'portfolio', component: () => import('pages/PortfolioPage.vue') },

      // *** REMOVED duplicate 'about' route from here ***

      // *** Add other pages that use MainLayout here ***
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*', // Matches anything not caught above
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
