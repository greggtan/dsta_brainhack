
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('src/pages/PageHome.vue') },
      { path: '/news', component: () => import('src/pages/PageNews.vue') },
      { path: '/profile', component: () => import('src/pages/PageProfile.vue') },
      { path: '/search', component: () => import('src/pages/PageSearch.vue') },
      { path: '', component: () => import('src/pages/PageDisclaimer.vue') },
      { path: '/details', component: () => import('src/pages/PageDetails.vue') },
      { path: '/detailsError', component: () => import('src/pages/PageDetailsError.vue') },
      { path: '/addToCalendar', component: () => import('src/pages/PageAddToCalendar.vue') },
      { path: '/upcomingTasks/:name/:date/:time/:crowd', component: () => import('src/pages/PageUpcomingTasks.vue') },
      
    ]
    
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
